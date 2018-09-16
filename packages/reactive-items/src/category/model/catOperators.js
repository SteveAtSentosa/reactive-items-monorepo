import LG from 'ramda-lens-groups';

// all operations honor immutability, and are safe against undefined prop access

export const catProps =    [
  'title',        // cat title
  'subtitle',     // cat subtitle
  'description',  // more detailed cat description
  'items',        // list of items associated with this category
];

export const catDefaults = [ '', '', '', [] ];
export const catLg = LG.create(catProps, catDefaults);

// export const cloneCatWithDef = LG.cloneWithDef(catLg);
// export const cloneCat = LG.clone(catLg);

// For props on LG and initProps, values from initProps will be used.
// For props on LG but not initProps, values will be defaulted (except for id)
// To create an iteem with all values defaulted, omit initProps
// export const makeCat = toBeCloned => cloneCatWithDef(toBeCloned);

// export const setCatProp = LG.set(catLg);
// export const setCatProps = LG.setL(catLg);
// export const viewCatProp = LG.view(catLg);
// export const viewCatProps = LG.viewL(catLg);
// export const viewCatPropOr = LG.viewOr(catLg);
