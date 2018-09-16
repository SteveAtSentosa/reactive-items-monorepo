import { path, curry, assocPath, toString, replace, forEach } from 'ramda';


//*************************************************************************************************
// atomic data
//*************************************************************************************************

// Holds atomic styles or classes, which are added dynamically as they are requested
let atoms = {};

// holds all atomic css create/retrieve functions
export const atomicFunctions = {};

// atomicFunctions = {
//   pt: atomKey -> corresponding css|class string
// }
//
// Example usage:
// { pt } = atomicFunctions;
// pt(2) //=> padding-top: 0.5rem
// <div css={[ pt(2) ]}

// customze your css class generator here
const toClass = c=>c; // to keep raw css strings
// const toClass = css; // to create emotion classes

//*************************************************************************************************
// atomic utils
//*************************************************************************************************

// this atomic constructor fxn is at the heart of the fccs system, lets talk about it a bit

// atomType and atomKey are as you would expect as documented above
// example values for atomtType / AtomKey : 'pt' '2', 'c' 'red'

// atomKeyToCssVal is a function that takes an atom key specific to the atom type, and
// returns the corresponding raw css value (not the entire css entire string)
// examples: getColor('red') //=> '#c62828', getSpace(2) //=> .5

// cssStr is a psuedo template string, where $ acts as a place holder that will be replaced
// by the value returned by atomKeyToCssVal
// 'color: $' for would be transfored to 'color: #c62828' (assuming atomKeyToCssVal = getColor)

// '' -> (atomKey -> '' | number ) -> cssStr, atomKey
export const constructAtom = curry((atomType, cssStr, mapToCssVal, atomKey) =>
  getAtomCss(atomType, atomKey) || ( // of the atomCss already exists, return it
    mapToCssVal(atomKey) &&      // if we have a valid atomKey, add the atom
    addAtom(atomType, atomKey, toClass(replace(/[$]/g, `${mapToCssVal(atomKey)}`, cssStr)))
  )
);

export const addAtomicFunction = (atomType, cssStr, addAtomFn) => {
  atomicFunctions[atomType] = addAtomFn(atomType, cssStr);
};

// TODO BETTER NAMING
export const addAtomicFunctions = (cssSpecs, addAtomFn) => {
  forEach(({atomType, cssStr})=> {
    addAtomicFunction(atomType, cssStr, addAtomFn);
  }, cssSpecs);
};

//*************************************************************************************************
// Helpers
//*************************************************************************************************

const cssProp = cssStr => cssStr.split(':')[0];

const getAtomCss = (atomType, atomKey) => path([atomType, toString(atomKey)], atoms);

// add an atom, and return the corresponding atomCss
const addAtom = (atomType, atomKey, atomCss) => {
  atoms = assocPath([atomType, toString(atomKey)], atomCss, atoms);

  const atomProp = cssProp(atomCss);

  console.log('~~> addAtom()');
  console.log('atomProp: ', atomProp);
  console.log('atoms: ', atoms);
  return path([atomType, toString(atomKey)], atoms);
};


//*************************************************************************************************

const s1 = '5xl med:2xl lg:3xl';
const s2 = 'red:300 med:grey:300';
const s3 = 'red:300';

// TODO: normalize

const isReactive = cssSpec => cssSpec.indexOf(' ', cssSpec) > -1;

// const r1 = isReactive(s1);
// const r2 = isReactive(s2);
// const r3 = isReactive(s3);

// console.log('r1: ', r1);
// console.log('r2: ', r2);
// console.log('r3: ', r3);




const a = {
  bgc: {
    'grey:300': 'background-color: #e0e0e0;',
    'grey:400': 'background-color: #bdbdbd;'
  },
  c: {
    'grey:300': 'color: #e0e0e0;',
    'cyan:700': 'color: #0097a7;'
  },
  fz: {
    '5xl': 'font-size: 3rem'
  }
}
