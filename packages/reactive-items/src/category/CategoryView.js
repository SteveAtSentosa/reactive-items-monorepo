import React from 'react';
import PT from 'prop-types';
import s from 'fccs';
import { css } from 'emotion';
import { catReactShape, catReactDefaults } from './model/catReact';

//*****************************************************************************
// Interface
//*****************************************************************************

CategoryView.propTypes = {
  ...catReactShape,
  addingItem: PT.bool, // is item add in progress?
};

CategoryView.defaultProps = {
  ...catReactDefaults,
  addingItem: false,
};

//*****************************************************************************
// Component
//*****************************************************************************

const fs = css`
  font-size: 200%;
  @media (min-width: 576px) { font-size: 100%; }
`;

const fsd = css`font-size: 200%;`;
const fsm = css`@media (min-width: 576px) { font-size: 100%; }`;

export default function CategoryView(props) {
  const {title, subtitle, description, items, addingItem} = props;
  const { p, tc, m, bgc, fz } = s;

  // const css={[ tc('@lighter'), bgc('@primaryOne'), m(1), p(2), fz('xl')
  //              rxSm(m(2), p(2), fz('2xl'))
  //              rxMd(m(4), p(4), fz('3xl'))
  //           ]};

  // const css={fx([ tc('@lighter'), bgc('@primaryOne'), m(1), p(2), fz('xl')
  //                 rxSm(m(2), p(2), fz('2xl'))
  //                 rxMd(m(4), p(4), fz('3xl'))
  //            ])};


  // const css={[ tc('@lighter'), bgc('@primaryOne'),
  //            m('1 sm:2 md:4), p('1 sm:2 md:4'), fz('xl sm:2xl md:3xl')
  //           ]};


  return (
    <div css={[ m(8), p(5), tc('@lighter'), bgc('@primaryOne'), [fsd, fsm] ]}>
      Some text
    </div>
  );
}
