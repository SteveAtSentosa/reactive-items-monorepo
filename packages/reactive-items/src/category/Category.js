import React from 'react';
import { catReactShape, catReactDefaults } from './model/catReact';
import CategoryView from './CategoryView';

// This is a stateful container that displays a list of items, and allows new items
// to be created.

//*****************************************************************************
// Container
//*****************************************************************************

CategoryView.propTypes = catReactShape;
CategoryView.defaultProps = catReactDefaults;

export default class Category extends React.Component {

  state = { addingItem: false };

  render = () => {
    const { addingItem } = this.state;
    const { title, subtitle, description, items } = this.props;
    return (
      <CategoryView
        {...{title, subtitle, description, items, addingItem}}
      />
    );
  }
}

