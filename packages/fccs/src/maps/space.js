import { pathOr, toString } from 'ramda';

export const mapSpacingSpec = spacingSpec =>
  `${pathOr('0', ['vals', toString(spacingSpec)], spacingVals)}${spacingVals.unit}`;

const spacingVals = {
  unit: 'rem',
  vals: {
    0: 0,
    1: 0.25,
    2: 0.5,
    3: 0.75,
    4: 1,
    5: 1.25,
    6: 1.5,
    8: 2,
    10: 2.5,
    12: 3,
    16: 4,
    20: 5,
    24: 6,
    32: 8,
  }
};


// console.log('mapSpacingSpec(3): ', mapSpacingSpec(3));
// console.log('mapSpacingSpec(24): ', mapSpacingSpec(24));
// console.log('mapSpacingSpec(): ', mapSpacingSpec());
// console.log('mapSpacingSpec(99): ', mapSpacingSpec(99));
// console.log('mapSpacingSpec(oops): ', mapSpacingSpec('oops'));
