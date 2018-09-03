// TODO:
// * Flow
// * Error boundaries
// * Error callback

import React, { createElement as ce } from 'react';
import PT from 'prop-types';
import { compose } from 'ramda';
import { noop } from 'ramda-adjunct';

import {
  itemReactShape, itemReactDefaults,
  makeItem, cloneItem
} from './itemModel';

// import { graphql } from 'react-apollo';
// import { randomId } from '../../../utils/id';
// import ItemView from '../components/ItemView';
// import ItemMutate from '../components/ItemMutate';
// import {
//   itemReactShape, itemReactDefaults }
//   from '../models/item/itemReact';
// import {
//   viewItemProps, makeItem, cloneItem }
//   from '../models/item/itemOperators';
// import {
//   addItem, updateItem, deleteItem,
//   refetchItemsbyCat, optimistic }
//   from '../models/item/itemGql';

//******************************************************************************
// Interface
//******************************************************************************

// This is a stateful container that enables create, display, and editing of an item.
// This component's state holds pending values during item create/edit, which allows
// pending values to be maintained if a user accidentally cancels an edit/create


const propTypes = {
  isNew: PT.bool,                 // is this a new item?
  item: PT.shape(itemReactShape), // item to display/edit.  Omit if creating new
  startInEditMode: PT.bool,       // start in editing mode? (assumed true if isNew === true)
  category: PT.string,            // for new plan items, can omit if editing existing plan item
  onBlurNew: PT.func,             // called if focus lost during creation of new plan item
  className: PT.string,           // applied to item's root container for custom styling
};

const defaultProps = {
  item: itemReactDefaults,
  isNew: false,
  startInEditMode: false,
  onBlurNew: noop,
  category: '',
  className: '',
};

//******************************************************************************
// Container
//******************************************************************************

export default class Item extends React.Component {

  constructor(props, ...rest) {
    super(props, ...rest);
    const { isNew, startInEditMode, item } = props;
    const pendingItem = isNew ?
      makeItem() :
      startInEditMode ? cloneItem(item) : null;

    this.state = { pendingItem };

    // this.onSubmit = this.onSubmit.bind(this);
    // this.onChange = this.onChange.bind(this);
    // this.onEdit = this.onEdit.bind(this);
    // this.onDelete = this.onDelete.bind(this);
    // this.onCancel = this.onCancel.bind(this);
  }

  onSubmit = itemToSubmit => {
    const { category='', isNew=true } = this.props;
  }

  // onSubmit(incomingItem) {

  //   const { category='', isNew=true } = this.props;

  // TODO: can I implement optimistic cache and update on response?
  // Would have to be associated with the appropriate query and the ID of
  // the response won't match the outgoing temp ID. Might not be possible

  // const itemTosend = isNew ?
  //   makeItem({
  //     ...incomingItem,
  //     id: randomId('TPM-PITM-ID-'), // for possible caching ???? or may not need
  //     // createdBy: 'USER-STEVO',
  //     category }) :
  //   cloneItem(incomingItem); // cloning strips away extraneous props

  // const mutateOptions = R.assoc(
  //   isNew ? 'refetchQueries' : 'optimisticResponse',
  //   isNew ? refetchItemsbyCat(category) : optimistic(itemTosend),
  //   { variables: { item : itemTosend } },
  // );

  // const mutateFxn = isNew ? 'addItem' : 'updateItem';
  // this.props[mutateFxn](mutateOptions);

  // this.setState({pendingItem: isNew ? makeItem(): null});
  // }

  // TODO: can I make this more granular, or is this better for immutability?
  onChange = item => this.setState({ pendingItem:cloneItem(item) });

  // onEdit = item => {
  //   const { isNew } = this.props;
  //   this.setState({ pendingItem:
  //     isNew ? makeItem(item) : cloneItem(item)
  //   });
  // }

  onEdit = item =>
    this.setState({ pendingItem: this.props.isNew ?
      makeItem(item) : cloneItem(item)});



  onCancel = () => this.setState({ pendingItem: null });


  onDelete(item) {
    const { deleteItem } = this.props;
    // const { _id, category } = viewItemProps(['_id', 'category'], item);
    // if (_id && category ) {
    //   const refetchQueries = refetchItemsbyCat(category);
    //   this.props.deleteItem({variables: {_id}, refetchQueries});
    // }
    // else {
    //   // TODO: figure out what to do with this (and other cases like this) wrt friendly user error reporting
    //   console.warn('Item.onDelete(): invalid id or category for item:', item);
    // }
  }

  render() {

    const { className, item, isNew, onBlurNew } = this.props;
    const { onSubmit, onChange, onEdit, onDelete } = this;

    const onBlur = isNew ? onBlurNew : this.onCancel;
    const onCancel = isNew ? onBlurNew : this.onCancel;

    return (
      <div>Hello Item</div>
    );
    // ce('div', { className },
    //   state.pendingItem ?
    //   ce(ItemMutate, {
    //     item: state.pendingItem,
    //     onSubmit, onChange, onCancel,
    //     handleClickOutside: onBlur,
    //   }) :
    //   ce(ItemView, {
    //     item, onDelete, onEdit,
    //     onUpdate: onSubmit
    //   })
    // )
  }
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

//*****************************************************************************
// Wrappers
//*****************************************************************************

// add graphql mutation fxns to props
// export default compose(
//   graphql(addItem, {name:'addItem'}),
//   graphql(updateItem, {name:'updateItem'}),
//   graphql(deleteItem, {name:'deleteItem'}),
// )(Item);
