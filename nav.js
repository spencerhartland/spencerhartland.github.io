class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
        * {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
        }

        a {
          color: black;
          text-decoration: none;
        }

        .logo_container {
          display: inline-block;
          height: 48px;
          line-height: 48px; /* vertical */
          text-align: center; /* horizontal */
        }

        .navbar {
          /* Header (container) attributes */
          width: 100%;
          height: 48px;
          line-height: 48px; /* Centers text vertically */
          text-align: center; /* Centers text horizontally */
          background-color: white;
        }

        .navbar * {
          vertical-align: top;
          display: inline-block;
        }

        .nav-item {
          display: inline-grid;
          font-family: 'Rajdhani';
          font-weight: 600;
          font-size: 16px;
        }

        #nav-item-about-text, #nav-item-projects-text {
          /* Setting the text's position in the grid to the same as the */
          /* the indicator div will allow the elements to be layered.  */

          /* Layer 2 (top) */
          grid-column: 1;
          grid-row: 1;
        }

        #nav-item-about-indicator, #nav-item-projects-indicator {
          /* Layer 1 (Bottom) */
          grid-column: 1;
          grid-row: 1;
          height: 32px; /* Line up the indicator with the large logo */
        }

        #nav-item-about-indicator.current, #nav-item-projects-indicator.current {
          border-bottom: 1px solid black;
          animation: glitch 200ms ease-in forwards;
        }

        /* Animation shown when a page is selected in the nav bar. */
        /* Intended to look like the site is glitching for a cyberpunk feel. */
        @keyframes glitch {
          0% { width: 0%; }
          40% { width: 135%; height: 36px; }
          50% { width: 30%; height: 28px; }
          70% { width: 70%; height: 32px; }
          90% { width: 0%; }
          100% { width: 100%; }
        }

        /* Creates dynamic space between elements in the nav bar. */
        .spacer {
          width: 4%;
        }

        /* Shows full name text if display is big enough. */
        @media only screen and (min-width: 600px) {
          /* Hide small logo */
          .logo_small { display: none; }

          /* Display large logo */
          .logo_lrg {
            /* Text attributes */
            font-family: 'Work Sans';
            font-weight: 800;
            font-size: 24px;
          }
        }

        /* Shows small logo on smaller screens. */
        @media only screen and (max-width: 600px) {
          /* Hide full name text. */
          .logo_lrg { display: none; }

          /* display initials logo */
          .logo_small { height: 100%; }

          /* Adjust space between menu items */
          .spacer { width: 10%; }
        }
      </style>

      <header>
        <div class="navbar">
          <!-- Menu item: About -->
          <a href="about.html" class="nav-item" id="nav-item-about">
            <div id="nav-item-about-indicator"></div>
            <div id="nav-item-about-text">ABOUT</div>
          </a>

          <!-- Spacer -->
          <div class="spacer"></div>

          <a href="index.html" class="logo_container">
            <!-- Small logo for small screens -->
            <img src="Assets/small_logo.svg" class="logo_small">
            <!-- Full name for large screens -->
            <h1 class="logo_lrg">SPENCER HARTLAND</h1>
          </a>

          <!-- Spacer -->
          <div class="spacer"></div>

          <!-- Menu item: Projects -->
          <a href="projects.html" class="nav-item" id="nav-item-projects">
            <div id="nav-item-projects-indicator"></div>
            <div id="nav-item-projects-text">PROJECTS</div>
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavigationBar);

// Nav icon animation
$(document).ready(function(){

  // Highlight the current page
  // ABOUT
  $('#nav-item-about-indicator').each(function() {
    if ((window.location.pathname.indexOf($('#nav-item-about').attr('href'))) > -1) {
        $(this).toggleClass('current');
    }
  });
  // PROJECTS
  $('#nav-item-projects-indicator').each(function() {
    if ((window.location.pathname.indexOf($('#nav-item-projects').attr('href'))) > -1) {
        $(this).toggleClass('current');
    }
  });

  // Animate the menu icon used on small screens
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('#dropdown').toggleClass('open');
  });
});
