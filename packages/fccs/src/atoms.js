// TODO:
// * ramda toStr makdes 'abc' -> '" "' , yikes, try again in the mapping fxns
// * doc generating functions
// * responsive functions

import { mapColorSpec } from './maps/color';
import { mapSpacingSpec } from './maps/space';
import { mapFontSizeSpec } from './maps/typography';
import { withTheme } from './theme';
import { atomicFunctions, addAtomicFunctions, addAtomicFunction, constructAtom } from './utils/atomUtils';

// NOTE: held in atomUtils.js
// atoms = {
//   pt : { <-- atom type
//     1:            'padding-top: 0.25rem', <-- a css atom, applied via atomic fxn pt(1)
//     2:            'padding-top: 0.5rem'   <-- another css atom, applied via atomic function pt(2)
//     ^              ^                 ^
//     cssSpec        cssStr (css string or classname, depening upon definition of toClass())
//
//   c : { <-- a second atom type
//     red:           'color:     #c62828',  <-- a css atom, applied via atomic function.c('red')
//   }                ^cssProp    ^cssVal
// }

//*************************************************************************************************
// Spacing
//*************************************************************************************************

// Add theming for spacing?

const addSpacingAtom = (atomType, cssStr) => constructAtom(atomType, cssStr, mapSpacingSpec);
const spacingSpecs = [
  { atomType: 'p',  cssStr: 'padding: $;' },
  { atomType: 'pt', cssStr: 'padding-top: $;' },
  { atomType: 'pb', cssStr: 'padding-bottom: $;' },
  { atomType: 'pl', cssStr: 'padding-left: $;' },
  { atomType: 'pr', cssStr: 'padding-right: $;' },
  { atomType: 'pv', cssStr: 'padding: $ 0' },
  { atomType: 'ph', cssStr: 'padding: 0 $' },
  { atomType: 'm',  cssStr: 'margin: $;' },
  { atomType: 'mt', cssStr: 'margin-top: $;' },
  { atomType: 'mb', cssStr: 'margin-bottom: $;' },
  { atomType: 'ml', cssStr: 'margin-left: $;' },
  { atomType: 'mr', cssStr: 'margin-right: $;' },
  { atomType: 'mv', cssStr: 'margin: $ 0' },
  { atomType: 'mh', cssStr: 'margin: 0 $' },
];

addAtomicFunctions(spacingSpecs, addSpacingAtom);

//*************************************************************************************************
// Coloring
//*************************************************************************************************

// TODO: consilidate this into a spec list struct to drive mor mass creation (similiar to spacing)
// above, once I have the ustils in atomUtils straightened out
const addColoringAtom = (atomType, cssStr) =>
  constructAtom(atomType, cssStr, withTheme('textColors', mapColorSpec));

const addBgcAtom = (atomType, cssStr) =>
  constructAtom(atomType, cssStr, withTheme('backgroundColors', mapColorSpec));

const addBcAtom = (atomType, cssStr) =>
  constructAtom(atomType, cssStr, withTheme('borderColors', mapColorSpec));

// const colorSpecs = [
//   { atomType: 'c', cssStr: 'color: $;' },
//   { atomType: 'bc', cssStr: 'border-color: $;' },
//   { atomType: 'bgc', cssStr: 'background-color: $;' },
// ];

addAtomicFunction('tc', 'color: $;', addColoringAtom);
addAtomicFunction('bgc', 'background-color: $;', addBgcAtom);
addAtomicFunction('bc', 'border-color: $;', addBcAtom);

// addAtomicFunction('bc', 'border-color: $;', addBgcAtom);


//*************************************************************************************************
// Typography
//*************************************************************************************************

const addFontSizeAtom = (atomType, cssStr) => constructAtom(atomType, cssStr, mapFontSizeSpec);
addAtomicFunction('fz', 'font-size: $', addFontSizeAtom);

console.log('atomicFunctions: ', atomicFunctions);
export { atomicFunctions };


//*************************************************************************************************


// import { atomicFunctions } from './atomUtils';

// const tss=[ tc('@lighter'), bgc('@primaryOne'), m(1), p(2), fz('xl')
//             rxSm(m(2), p(2), fz('2xl'))
//             rxMd(m(4), p(4), fz('3xl'))
//           ];

// const tss=[ tc('@lighter'), bgc('@primaryOne'), m(1), p(2), fz('xl'),
//             rxSm(m(2), p(2), fz('2xl'))
//             rxMd(m(4), p(4), fz('3xl'))
//           ];


// const fsm = css`@media (min-width: 576px) { font-size: 100%; }`;

const atoms = {
  bgc: {
    'grey:300': 'background-color: #e0e0e0;',
    'grey:400': 'background-color: #bdbdbd;',
    'md:grey:100': '@media (min-width: 576px) { font-size: 100%; }'
  },
  c: {
    'grey:300': 'color: #e0e0e0;',
    'cyan:700': 'color: #0097a7;'
  },
  fz: {
    '5xl': 'font-size: 3rem'
  }
};

const { tc, bgc, m, p, fz } = atomicFunctions;


export const rxSm = (...atomicFns) =>
  console.log(' ----- atomicFns: ', atomicFns);

rxSm(m(2), p(2), fz('2xl'));

