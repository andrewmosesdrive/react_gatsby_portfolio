const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/andrewmoses/Desktop/repos/homework_repos/react_gatsby_portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/andrewmoses/Desktop/repos/homework_repos/react_gatsby_portfolio/src/pages/index.js")))
}

