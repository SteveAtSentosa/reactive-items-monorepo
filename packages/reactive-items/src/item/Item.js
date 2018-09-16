// TODO:
// * Flow
// * Error boundaries
// * Error callback
// * emotion + facepaint + design-system-utils + polished
// * flyd
// * look at using babel env option: see here https://emotion.sh/docs/install
// * combine make babel.config-react and babel.confg-base into bable.config, which can be included


import React from 'react';
import PT from 'prop-types';
import { noop } from 'ramda-adjunct';
import ItemView from './ItemView';
import { itemReactShape, itemReactDefaults } from './model/itemReact';
import { cloneItem, makeItem } from './model/itemOperators';

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

  state = {
    pendingItem: this.props.isNew ? makeItem() :
      this.props.startInEditMode ? cloneItem(this.props.item) : null
  }

  render = () => {
    const { pendingItem } = this.state;
    const { className, item } = this.props;
    return (
      <ItemView {...{item}} />
    );
  }
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

