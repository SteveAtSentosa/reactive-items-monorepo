import PT from 'prop-types';

//******************************************************************************
// React shapes and defaults
//******************************************************************************

export const itemReactShape = {
  name: PT.string.isRequred,  // item name
  description: PT.string,     // detailed item description
  order: PT.number,           // relative position in a display list of items
};

export const itemReactDefaults = {
  title: '',
  description: '',
  order: 0,
};
