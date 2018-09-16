// TODO:
// * withThem higher level fxn

import { path, curry, prop, pipe } from 'ramda';
import { isString } from 'ramda-adjunct';

const theme = {

  // Universal theme values, can be applied to any atom / theme-type

  // Key colors
  primaryOne: 'deepPurple:700',
  primaryTwo: 'amber:700',
  complimentaryOne: 'blue:a200',
  complimentaryTwo: 'cyan:600',

  // grey scale
  white: 'white',
  black: 'black',
  darkest: 'grey:800',
  darker: 'grey:700',
  dark: 'grey:600',
  medium: 'grey:500',
  light: 'grey:400',
  lighter: 'grey:300',
  lightest: 'grey:200',

  // Theme types specific to atom types.  When applying a theme to a particular an atom type,
  // these types will be applied if it exists, otherwise the universal theme value will be applied

  backgroundColors: {},
  textColors: {
    standOut: 'cyan:700',
  }
};

export { theme };
export default theme;

//*************************************************************************************************
// Theme utils
//*************************************************************************************************

// check for a theme value
const isThemeVal = toCheck => isString(toCheck) && toCheck.charAt(0) === '@';

// apply theme translation to a CSS mapping function
export const withTheme = (themeType, cssMapperFn) =>
  pipe(themeToCssSpec('textColors'), cssMapperFn);

// given a them value, map it to a cssSpec
export const mapTheme = (themeType, themeVal) =>
  path([ themeType, themeVal ],theme) || prop(themeVal, theme) || '';

// Recieves a theme value or css spec.  If applyTo is a theme value, the corresponding
// cssSpec is returned.  If applyTo is not a theme value it is assumed to be a cssSpec
// and just passed through as is
export const themeToCssSpec = curry((themeType, applyTo) =>
  isThemeVal(applyTo) ? mapTheme(themeType, applyTo.substr(1)) : applyTo);




// const mappedTheme = mapTheme('textColors', 'medium');
// console.log('mappedTheme: ', mappedTheme);

// const ttest1 = themeToCssSpec('textColors', '@medium');
// console.log('ttest: ', ttest1);



