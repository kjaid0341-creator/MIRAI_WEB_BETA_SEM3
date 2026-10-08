// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <App />
// //   </StrictMode>,
// // )

// import React from "react";
//       import ReactDOM from "React-dom/client"

//       const root = ReactDOM.createRoot(document.getElementById('root'))
//       const heading = React.createElement('h3',{},'react is starting');
//       root.render(heading);



import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const app = React.createElement(
  "div",
  { className: "page" },

  /* Background */
  React.createElement("div", { className: "glow glow1" }),
  React.createElement("div", { className: "glow glow2" }),

  /* Navbar */
  React.createElement(
    "nav",
    { className: "navbar" },

    React.createElement(
      "div",
      { className: "brand" },
      React.createElement("span", { className: "logo" }, "⚛"),
      React.createElement("span", {}, "ReactX")
    ),

    React.createElement(
      "div",
      { className: "nav-links" },
      React.createElement("a", { href: "#" }, "Home"),
      React.createElement("a", { href: "#" }, "Explore"),
      React.createElement("a", { href: "#" }, "Projects"),
      React.createElement("a", { href: "#" }, "Contact")
    ),

    React.createElement(
      "button",
      { className: "nav-btn" },
      "Let's Build →"
    )
  ),

  /* Hero */
  React.createElement(
    "main",
    { className: "hero" },

    React.createElement(
      "section",
      { className: "hero-text" },

      React.createElement(
        "div",
        { className: "badge" },
        "●  REACT DEVELOPER MODE"
      ),

      React.createElement(
        "h1",
        {},
        "Build.",
        React.createElement("br"),
        "Create.",
        React.createElement(
          "span",
          {},
          " Innovate."
        )
      ),

      React.createElement(
        "p",
        { className: "hero-description" },
        "Welcome to the world of React — where ideas turn into ",
        React.createElement("strong", {}, "interactive experiences.")
      ),

      React.createElement(
        "div",
        { className: "hero-buttons" },

        React.createElement(
          "button",
          { className: "primary-btn" },
          "Start Building ⚡"
        ),

        React.createElement(
          "button",
          { className: "secondary-btn" },
          "Explore React →"
        )
      ),

      React.createElement(
        "div",
        { className: "stats" },

        React.createElement(
          "div",
          {},
          React.createElement("h3", {}, "01"),
          React.createElement("p", {}, "Components")
        ),

        React.createElement(
          "div",
          {},
          React.createElement("h3", {}, "∞"),
          React.createElement("p", {}, "Possibilities")
        ),

        React.createElement(
          "div",
          {},
          React.createElement("h3", {}, "100%"),
          React.createElement("p", {}, "Creative")
        )
      )
    ),

    /* React Visual */
    React.createElement(
      "section",
      { className: "visual" },

      React.createElement(
        "div",
        { className: "react-orbit orbit1" },
        React.createElement("span", {}, "⚛")
      ),

      React.createElement(
        "div",
        { className: "react-orbit orbit2" },
        React.createElement("span", {}, "JS")
      ),

      React.createElement(
        "div",
        { className: "react-orbit orbit3" },
        React.createElement("span", {}, "{}")
      ),

      React.createElement(
        "div",
        { className: "react-core" },
        React.createElement("div", { className: "react-symbol" }, "⚛"),
        React.createElement("p", {}, "REACT"),
        React.createElement(
          "small",
          {},
          "Create • Learn • Build"
        )
      )
    )
  ),

  /* Feature Section */
  React.createElement(
    "section",
    { className: "features" },

    React.createElement(
      "div",
      { className: "section-heading" },
      React.createElement(
        "p",
        {},
        "WHY REACT?"
      ),
      React.createElement(
        "h2",
        {},
        "Everything you need to build the web."
      )
    ),

    React.createElement(
      "div",
      { className: "feature-grid" },

      React.createElement(
        "article",
        { className: "feature-card" },
        React.createElement("div", { className: "icon" }, "⚡"),
        React.createElement("h3", {}, "Fast"),
        React.createElement(
          "p",
          {},
          "Build powerful interfaces with reusable components."
        ),
        React.createElement("span", {}, "01 →")
      ),

      React.createElement(
        "article",
        { className: "feature-card" },
        React.createElement("div", { className: "icon" }, "🧩"),
        React.createElement("h3", {}, "Reusable"),
        React.createElement(
          "p",
          {},
          "Create components once and use them everywhere."
        ),
        React.createElement("span", {}, "02 →")
      ),

      React.createElement(
        "article",
        { className: "feature-card" },
        React.createElement("div", { className: "icon" }, "🚀"),
        React.createElement("h3", {}, "Scalable"),
        React.createElement(
          "p",
          {},
          "Turn small ideas into large production applications."
        ),
        React.createElement("span", {}, "03 →")
      )
    )
  ),

  /* Image Showcase */
  React.createElement(
    "section",
    { className: "showcase" },

    React.createElement(
      "div",
      { className: "showcase-image" },
      React.createElement("img", {
        src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200",
        alt: "React development"
      })
    ),

    React.createElement(
      "div",
      { className: "showcase-text" },
      React.createElement(
        "p",
        {},
        "THE FUTURE IS CODE"
      ),
      React.createElement(
        "h2",
        {},
        "Your next project starts here."
      ),
      React.createElement(
        "p",
        {},
        "Experiment. Break things. Learn. Build something amazing."
      ),
      React.createElement(
        "button",
        { className: "primary-btn" },
        "Create Something →"
      )
    )
  ),

  /* Footer */
  React.createElement(
    "footer",
    {},
    React.createElement(
      "div",
      { className: "footer-logo" },
      "⚛ ReactX"
    ),
    React.createElement(
      "p",
      {},
      "Designed with creativity • Built with React"
    ),
    React.createElement(
      "span",
      {},
      "© 2026"
    )
  )
);

root.render(app);
