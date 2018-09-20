// import variables from SCSS file and convert to JS object
// (using sass-extract-loader with sass-extract-js plugin, configuration in
// .next_config/load-sass-variables.js)
import theme from '../../scss/_variables.scss';

const Default = {
  ...theme,
};

export default Default;
