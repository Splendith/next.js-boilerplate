// import variables from SCSS file and convert to JS object
// (using sass-extract-loader with sass-extract-js plugin, configuration in
// .next_config/load-sass-variables.js)
import theme from '../../scss/_variables.scss';

const Default = {
  ...theme,
  defaultFontColor: theme.gray800, // Get theme.gray800 from /src/styles/scss/_variables.scss ( $gray-800 )
};

export default Default;
