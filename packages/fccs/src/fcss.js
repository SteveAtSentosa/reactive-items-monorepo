// TODO:
// * Check out https://www.sitepoint.com/css-architecture-block-element-modifier-bem-atomic-css/
// * Add warnings when invalid input given to atomic functions (could be simple in pipelines)

import { atomicFunctions } from './atoms';

// merge a list of styles/classnames into a single space seperates string
// export const ms = styleList => reduce(
//   (acc, style)=>trim(`${acc} ${style}`), '', styleList);

export const s = {
  ...atomicFunctions
};

export default s;

