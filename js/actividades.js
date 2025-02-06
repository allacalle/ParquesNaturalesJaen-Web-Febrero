let actividadesGlobales = [];

// Función para generar el menú de categorías dinámicamente
function generarMenuCategorias() {
  const menuCategorias = document.getElementById('menu-categorias');
  menuCategorias.innerHTML = ''; // Limpiar contenido previo

  // Por cada categoría en el JSON, se crea un botón
  actividadesGlobales.forEach((categoria, index) => {
    const boton = document.createElement('button');
    boton.textContent = categoria.nombre;
    
    // Si es la primera categoría, la marcamos como activa por defecto
    if (index === 0) {
      boton.classList.add('active');
    }
    
    // Al hacer clic, se mostrará la categoría correspondiente
    boton.addEventListener('click', function(event) {
      // Remover la clase "active" de todos los botones
      document.querySelectorAll('#menu-categorias button').forEach(btn => btn.classList.remove('active'));
      
      // Agregar la clase "active" al botón clicado
      event.target.classList.add('active');
      
      // Generar las actividades de la categoría seleccionada
      generarActividades(categoria.nombre);

      // Hacer scroll hacia el contenedor de actividades
      setTimeout(() => {
        const contenedor = document.getElementById('contenedor-actividades');
        contenedor.scrollTo({
          top: 0, // Desplazar al inicio del contenedor
          behavior: 'smooth'
        });
      }, 100);  // Esto da tiempo a que las actividades se generen antes de hacer el scroll
    });

    menuCategorias.appendChild(boton);
  });
}

// Función para generar el HTML de las actividades filtradas por categoría
function generarActividades(categoriaSeleccionada) {
  const contenedor = document.getElementById('contenedor-actividades');
  contenedor.innerHTML = ''; // Limpiar el contenido anterior

  // Buscamos la categoría que coincida (ignorando mayúsculas/minúsculas)
  const categoria = actividadesGlobales.find(cat => cat.nombre.toLowerCase() === categoriaSeleccionada.toLowerCase());
  
  if (categoria && categoria.actividades && categoria.actividades.length > 0) {
    // Generar todas las actividades de la categoría
    categoria.actividades.forEach(actividad => {
      const actividadDiv = document.createElement('div');
      actividadDiv.classList.add('actividad-card');

      // Se arma el contenido HTML principal de la tarjeta
      let contenidoHTML = `
        <img src="${actividad.imagen.url}" alt="${actividad.nombre}">
        <div class="actividad-info">
          <h3>${actividad.nombre}</h3>
          <p>${actividad.descripcion}</p>
          <p><strong>Duración:</strong> ${actividad.duracion} | <strong>Dificultad:</strong> ${actividad.dificultad}</p>
        </div>
      `;
      
      // Si hay empresas, se agregan de forma no intrusiva
      if (actividad.empresas && actividad.empresas.length > 0) {
        contenidoHTML += `<div class="actividad-empresas">
          <p>Para realizar esta actividad, puedes contactar con estas empresas:</p>
          <ul>`;
        actividad.empresas.forEach(empresa => {
          if (empresa.web) {
            contenidoHTML += `<li><a href="${empresa.web}" target="_blank">${empresa.nombre}</a></li>`;
          } else {
            contenidoHTML += `<li>${empresa.nombre}</li>`;
          }
        });
        contenidoHTML += `</ul></div>`;
      }
      
      actividadDiv.innerHTML = contenidoHTML;
      contenedor.appendChild(actividadDiv);
    });

    // Foco en la imagen de la primera actividad
    setTimeout(() => {
      const primeraActividad = contenedor.querySelector('.actividad-card img');
      if (primeraActividad) {
        primeraActividad.scrollIntoView({
          behavior: 'smooth',
          block: 'center'  // Asegura que la imagen quede al principio de la vista
        });
      }
    }, 100);  // Esto da tiempo a que las actividades se generen antes de hacer el scroll
  } else {
    contenedor.innerHTML = '<p>No hay actividades disponibles para esta categoría.</p>';
  }
}

// Función para cargar el JSON con todas las actividades
function cargarActividades() {
  fetch('/data/actividades.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el JSON');
      }
      return response.json();
    })
    .then(data => {
      // Guardamos todas las categorías y sus actividades en una variable global
      actividadesGlobales = data.categorias;
      
      // Generamos el menú de categorías dinámicamente
      generarMenuCategorias();
      
      // Por defecto, mostramos la primera categoría (si existe)
      if (actividadesGlobales.length > 0) {
        generarActividades(actividadesGlobales[0].nombre);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('contenedor-actividades').innerHTML = '<p>Error al cargar las actividades.</p>';
    });
}

// Ejecuta la carga de actividades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarActividades);

 