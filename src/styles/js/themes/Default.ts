import { DefaultTheme } from 'styled-components';

// import variables from SCSS file and convert to JS object
// (using sass-extract-loader with sass-extract-js plugin in src/scss/_variables.module.scss)
// Extract our Sass variables into a JS object
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../scss/_variables.module.scss'); // eslint-disable-line

const Default: DefaultTheme = {
  ...theme,
  defaultFontColor: theme.gray800, // Get theme.gray800 from /src/styles/scss/_variables.scss ( $gray-800 )
};

export default Default;
