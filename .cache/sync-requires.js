const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/andrewmoses/Desktop/repos/homework_repos/react_gatsby_portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/andrewmoses/Desktop/repos/homework_repos/react_gatsby_portfolio/src/pages/404.js"))),
  "component---src-pages-creative-2-index-js": hot(preferDefault(require("/Users/andrewmoses/Desktop/repos/homework_repos/react_gatsby_portfolio/src/pages/creative-2/index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/andrewmoses/Desktop/repos/homework_repos/react_gatsby_portfolio/src/pages/index.js")))
}

