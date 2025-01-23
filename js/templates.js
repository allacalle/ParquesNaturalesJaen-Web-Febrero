function Menu() {
  const navContainer = document.getElementById('nav-container');
  const nav = document.createElement('nav');
  nav.className = "navbar";

  // Estructura del menú con un botón toggle
  nav.innerHTML = `
    <div class="logo">
      <img src="/images/logo.png" alt="Logo de Paraísos Naturales de Jaén">
    </div>
    <button class="navbar-toggle" aria-label="Toggle menu">&#9776;</button>
    <ul class="navbar-list">
      <li><a href="/index.html">Inicio</a></li>
      <li><a href="/pages/parques.html">Parques</a></li>
      <li><a href="/pages/actividades.html">Actividades</a></li>
      <li><a href="/pages/contacto.html">Contacto</a></li>
    </ul>
  `;

  // Agregar funcionalidad al botón
  const toggleButton = nav.querySelector('.navbar-toggle');
  const navbarList = nav.querySelector('.navbar-list');
  toggleButton.addEventListener('click', () => {
      // Alterna la visibilidad del menú al hacer clic
      navbarList.classList.toggle('show');
  });

  // Agregar el menú al contenedor
  navContainer.appendChild(nav);
}




function Footer() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-container">
      <!-- Sección "Sobre nosotros" -->
      <div class="footer-section">
        <h4>Sobre nosotros</h4>
        <p>Paraísos Naturales de Jaén es un portal dedicado a promover los parques naturales de nuestra provincia, ayudando a todos a disfrutar de la naturaleza.</p>
      </div>

      <!-- Enlaces útiles -->
      <div class="footer-section">
        <h4>Enlaces útiles</h4>
        <ul>
          <li><a href="/index.html">Inicio</a></li>
          <li><a href="/pages/parques.html">Parques</a></li>
          <li><a href="/pages/actividades.html">Actividades</a></li>
          <li><a href="/pages/contacto.html">Contacto</a></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div class="footer-section">
        <h4>Contacto</h4>
        <p>Email: <a href="mailto:info@parquesjaen.com">info@parquesjaen.com</a></p>
        <p>Teléfono: <a href="tel:+34951123456">+34 951 123 456</a></p>
      </div>
    </div>

    <!-- Nota de Fair Use -->
    <div class="footer-fair-use">
      <p>
        Este sitio web hace uso del principio de <strong>"fair use"</strong> para algunos videos e imágenes, siempre incluyendo el enlace al contenido original. 
        Si eres el autor de algún contenido y deseas que sea eliminado, por favor <a href="/pages/contacto.html">contáctanos</a>.
      </p>
    </div>

    <!-- Derechos reservados -->
    <div class="footer-bottom">
      <p>&copy; 2025 Paraísos Naturales de Jaén. Todos los derechos reservados. Alfonso Lacalle García.</p>
    </div>
  `;
  document.body.appendChild(footer);
}

