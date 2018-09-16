import { atomicFunctions } from './atomUtils';

// const tss=[ tc('@lighter'), bgc('@primaryOne'), m(1), p(2), fz('xl')
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


console.log('atomicFunctions: ', atomicFunctions);

export const rxSm = (...atomicFns) =>
  console.log('atomicFunctions: ', atomicFunctions);


// const { tc, bgc, m, p, fz } = s;