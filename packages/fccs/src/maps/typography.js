import { pathOr } from 'ramda';

const fontSizes = {
  unit: 'rem',
  vals: {
    'xs': 0.75,
    'sm': 0.875,
    'med': 1,
    'lg': 1.125,
    'xl': 1.25,
    '2xl': 1.5,
    '3xl': 1.875,
    '4xl': 2.25,
    '5xl': 3,
  }
};

export const mapFontSizeSpec = fontSpec =>
  `${pathOr('0', ['vals', fontSpec], fontSizes)}${fontSizes.unit}`;



// console.log('mapFontSizeSpec(xs): ', mapFontSizeSpec('xs'));
// console.log('mapFontSizeSpec(xs): ', mapFontSizeSpec('2xl'));
// console.log('mapFontSizeSpec(xs): ', mapFontSizeSpec(5));
