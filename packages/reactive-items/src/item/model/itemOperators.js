import LG from 'ramda-lens-groups';

// all operations honor immutability, and are safe against undefined prop access

export const itemProps =    [
  'name',         // item name
  'description',  // detailed item description
  'order'         // relative position in a display list of items
];

export const itemDefaults = [ '', '', 0 ];
export const itemLg = LG.create(itemProps, itemDefaults);

export const cloneItemWithDef = LG.cloneWithDef(itemLg);
export const cloneItem = LG.clone(itemLg);

// For props on LG and initProps, values from initProps will be used.
// For props on LG but not initProps, values will be defaulted (except for id)
// To create an iteem with all values defaulted, omit initProps
export const makeItem = toBeCloned => cloneItemWithDef(toBeCloned);

// export const setItemProp = LG.set(itemLg);
// export const setItemProps = LG.setL(itemLg);
// export const viewItemProp = LG.view(itemLg);
// export const viewItemProps = LG.viewL(itemLg);
// export const viewItemPropOr = LG.viewOr(itemLg);
