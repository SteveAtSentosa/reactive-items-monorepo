import React from 'react';
import PT from 'prop-types';
// import { split, pipe, trim, pick, values, __ } from 'ramda';
import { noop } from 'ramda-adjunct';
import { css } from 'emotion';
// import { s } from '../common/fccs/fcss';
import s from 'fccs';

// import { pick } from 'ramda';
// import css from '../../../styles/habu-configured';
// import theme from '../../../styles/theme';
// import s from  '../../../styles/sharedStyles';
// import { mergeStyles } from '../../../styles/utils';
// import Paper from 'material-ui/Paper';
// import hoverable from '../../core/HOCs/hoverable';
// import EditIcon from '../../core/icons/Edit';
// import DeleteIcon from '../../core/icons/Delete';
// import ItemStatus from './ItemStatus';
// import {
//   itemReactShape,
//   itemReactDefaults } from '../models/item/itemReact';
// import {
//   viewItemProp,
//   setItemProp } from '../models/item/itemOperators';

import { itemReactShape, itemReactDefaults} from './model/itemReact';

//*****************************************************************************
// Interface
//*****************************************************************************

const propTypes = {

  item: PT.shape(itemReactShape)
//   onEdit: PT.func, // sig:: onEdit (item), called with edit button hit
//   onDelete: PT.func, // sig:: onDelete (item), called with delete button hit
//   onUpdate: PT.func, // sig:: onUpdate (updatedItem).  Called for status updates, etc.
//   className: PT.string, // applied to root container
};

const defaultProps = {
  item: itemReactDefaults,
  // onEdit: noop,
  // onDelete: noop,
  // onUpdate: noop,
  // className: '',
};


//*****************************************************************************
// The ItemView Component
//*****************************************************************************

export default function ItemView(props) {

  //  const { item, onEdit, onDelete, onUpdate, className } = props;
  const { item } = props;
  // const cn = {
  //   root:
  //     mergeStyles(css('m:12','mnh:40','d:fx','fxf:rn','alignItems:stretch','bdr:3'),className),
  //   status: css('p:6'),
  //   info: css('w:100%', 'mnh:100%'),
  // };

  // const statusProps = {
  //   className: cn.status,
  //   onUpdate: newCompletedList =>
  //      onUpdate(setItemProp('completedTimes', newCompletedList, item)),
  //   ...pick(['repeat','completedTimes',], item),
  // };

  // return (
  //   ce(Paper, { className: cn.root, zDepth:1 },
  //     ce(ItemStatus, { className: cn.status, ...statusProps }),
  //     ce(ItemInfo, { className : cn.info, item, onEdit, onDelete }),
  //   )
  // );

  // NOTE: figure out how to set font sizes per break

  // TODO: use ops fxns to get name etc
  console.log('s: ', s);
  return (
    <div css={[s.shadow, s.fz_5xl]}>
      {item.title}
    </div>
  );
}

ItemView.propTypes = propTypes;
ItemView.defaultProps = defaultProps;

//*****************************************************************************
// Sub Components
//*****************************************************************************

// ItemInfoBase.propTypes = {
//   item: PT.shape(itemReactShape),
//   onEdit: PT.func, // sig:: onEdit (item), called with edit button hit
//   onDelete: PT.func, // sig:: onDelete (item), called with delete button hit
//   className: PT.string,
// };

// ItemInfoBase.defaultPropw = {
//   onEdit: noop,
//   onDelete: noop,
//   className: '',
// };

// const  ItemInfo = hoverable(ItemInfoBase);
// function ItemInfoBase(props) {

//   const { item={}, hovering, onEdit, onDelete, className } = props;

//   const cn = {
//     root: mergeStyles( css('d:fx', 'fxf:rn' ), s.posR, className),
//     name: mergeStyles ( s.itemText,  css('m:8px 0px', 'fxb:100%')),
//     actions:
//       css('d:fx', 'fxf:cn', 'jc:center', 'ps:a', 'pt:3', 'h:100%', 'tp:0', 'rt:0',
//           'bgc:@grey.light', hovering?'':'d:none')
//   };

//     const iconProps = {
//       color: theme.colors.white,
//       scale: .7,
//       hoverShade: -0.6,
//       className: css('cu:po'),
//     };

//   return (
//     ce('div', { className: cn.root },
//       ce('div', { className: cn.name }, viewItemProp('name', item) ),
//       ce('div', { className: cn.actions },
//         ce(EditIcon, { onTouchTap: ()=>onEdit(item), ...iconProps }),
//         ce(DeleteIcon, { onTouchTap: ()=>onDelete(item), ...iconProps }),
//       )
//     )
//   );
// }
