import PT from 'prop-types';
import { itemReactShape } from '../../item/model/itemReact';

//******************************************************************************
// React shapes and defaults
//******************************************************************************

export const catReactShape = {
  title: PT.string.isRequired, // cat title
  subtitle: PT.string,         // cat subtitle
  description: PT.string,      // detailed cat description
  items: PT.arrayOf(PT.shape(itemReactShape))
};

export const catReactDefaults = {
  subtitle: '',
  description: '',
};
