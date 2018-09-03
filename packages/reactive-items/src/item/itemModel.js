import PT from 'prop-types';
import LG from 'ramda-lens-groups';

//******************************************************************************
// view/set/make utils
//******************************************************************************

// all operations honor immutability, and are safe against undefined prop access

export const itemProps =    [ 'name', 'category', 'order', 'id' ];
export const itemDefaults = [ '',     '',          0,       undefined ];

export const itemLg = LG.create(itemProps, itemDefaults);
export const cloneItemWithDef = LG.cloneWithDef(itemLg);

// For props on LG and initProps, values from initProps will be used.
// For props on LG but not initProps, values will be defaulted (except for id)
// To create an iteem with all values defaulted, omit initProps
export const makeItem = toBeCloned => cloneItemWithDef(toBeCloned);

export const cloneItem = LG.clone(itemLg);

// export const setItemProp = LG.set(itemLg);
// export const setItemProps = LG.setL(itemLg);
// export const viewItemProp = LG.view(itemLg);
// export const viewItemProps = LG.viewL(itemLg);
// export const viewItemPropOr = LG.viewOr(itemLg);




//******************************************************************************
// React shapes and defaults
//******************************************************************************

export const itemReactShape = {
  id: PT.string,
  name: PT.string.isRequred,
  category: PT.string.isRequred,
  description: PT.string,
  order: PT.number
};

export const itemReactDefaults = {
  name: '',
  category: '',
  order: 0
};
