// import variables from SCSS file and convert to JS object
// (using sass-extract-loader with sass-extract-js plugin, configuration in
// .next_config/load-sass-variables.js)
import theme from '../scss/_variables.scss';

const Default = {
  ...theme,
  headerColor: theme.primary, // Get value from /style/_variables.scss ( $primary )
};

export default Default;
