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
          vertical-align: middle;
          display: inline-block;
        }

        /* Hide the navigation items on small screens (nav icon to open menu) */
        @media only screen and (max-width: 600px) {
          .nav-item {
            display: none;
          }
        }

        /* Hide the navigation icon on large screens (nav bar will host menu items) */
        @media only screen and (min-width: 600px) {
          #nav-icon {
            display: none;
          }
        }

        #nav-icon {
          width: 40px;
          height: 28px;
          position: absolute;
          left: 12px;
          margin: 12px auto;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: .5s ease-in-out;
          -moz-transition: .5s ease-in-out;
          -o-transition: .5s ease-in-out;
          transition: .5s ease-in-out;
          cursor: pointer;
        }

        #nav-icon span {
          display: block;
          position: absolute;
          height: 4px;
          width: 100%;
          background: #000000;
          border-radius: 10px;
          opacity: 1;
          left: 0;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: .25s ease-in-out;
          -moz-transition: .25s ease-in-out;
          -o-transition: .25s ease-in-out;
          transition: .25s ease-in-out;
        }

        #nav-icon span:nth-child(1) {
          top: 0px;
        }

        #nav-icon span:nth-child(2), #nav-icon span:nth-child(3) {
          top: 10px;
        }

        #nav-icon span:nth-child(4) {
          top: 20px;
        }

        #nav-icon.open span:nth-child(1) {
          top: 10px;
          width: 0%;
          left: 50%;
        }

        #nav-icon.open span:nth-child(2) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        #nav-icon.open span:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }

        #nav-icon.open span:nth-child(4) {
          top: 18px;
          width: 0%;
          left: 50%;
        }

        #dropdown {
          position: relative;
          width: 100%;
          height: 0px; /* prevents the landing artwork from moving down below the menu

          /* Text attributes */
          text-align: left;
          font-family: 'Work Sans';
          font-weight: 500;
          font-size: 16px;

          display: none;
        }

        #dropdown.open {
          display: block;
          animation: expand 300ms ease-in-out forwards;
          transform-origin: top center;
        }

        @keyframes expand {
          0% {
            transform: scaleY(0)
          }
          100% {
            transform: scaleY(1)
            }
        }

        .nav-item {
          font-family: 'Source Code Pro';
          font-weight: 650;
          font-size: 16px;
        }

        .spacer {
          width: 4%;
        }

        .menu-item {
          background-color: white;
          padding: 2% 10% 2% 10%;
        }

        .menu-divider {
          height: 2px;
          width: 100%;
          margin-top: 16px;
          background-color: black;
        }

        /* shows full name text if display is big enough */
        @media only screen and (min-width: 600px) {
          /* hide small logo */
          .logo_small {
            display: none;
          }

          .logo_lrg {
            /* Text attributes */
            font-family: 'Work Sans';
            font-weight: 800;
            font-size: 24px;
          }
        }

        /* shows small logo if on iPhone */
        @media only screen and (max-width: 600px) {
          /* hide full name text */
          .logo_lrg {
            display: none;
          }

          .logo_small {
            height: 100%;
          }
        }
      </style>

      <header>
        <div class="navbar">
          <!-- Nav icon for small screens -->
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <!-- Menu item: About -->
          <a href="./about.html" class="nav-item">ABOUT</a>

          <!-- Spacer -->
          <div class="spacer"></div>

          <a href="./index.html" class="logo_container">
            <!-- Small logo for small screens -->
            <img src="./Assets/small_logo.svg" class="logo_small">
            <!-- Full name for large screens -->
            <h1 class="logo_lrg">SPENCER HARTLAND</h1>
          </a>

          <!-- Spacer -->
          <div class="spacer"></div>

          <!-- Menu item: Projects -->
          <a href="./projects.html" class="nav-item">PROJECTS</a>
        </div>

        <!-- Navigation menu for small screens -->
        <ul class="dropdown">
          <ul class="dropdown_menu" id="dropdown">

            <!-- Page 1: About -->
            <li class="dropdown_item-1">
              <div class="menu-item">
                <a href="./about.html">About</a>
                <div class="menu-divider"></div>
              </div>
            </li>

            <!-- Page 2: Projects -->
            <li class="dropdown_item-2">
              <div class="menu-item">
                <a href="./projects.html">Projects</a>
                <div class="menu-divider"></div>
              </div>
            </li>

          </ul>
        </ul>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavigationBar);

// Nav icon animation
$(document).ready(function(){
 $('#nav-icon').click(function(){
   $(this).toggleClass('open');
   $('#dropdown').toggleClass('open');
 });
});
