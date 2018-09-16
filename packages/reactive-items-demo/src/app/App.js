import React, { createElement as ce } from 'react';
import { hot } from 'react-hot-loader';
import { Category } from 'reactive-items';


const App = () =>
  ce('div', 0,
    ce(Category, {...catFood})
  );

export default hot(module)(App);

// Mock Data


const oatMeal = {
  title: 'Overnight Oatmeal',
  subtitle: '1- Cup Oatmeal, handful of almonds.  Put it all in a jar the night before.  Eat the next morning',
  order: 0
};

const catFood = {
  title: 'Food',
  subtitle: 'for energy',
  description: 'Eat for a different reason.  Eat for energy and flavor and a vibrant life.',
  items: [ oatMeal ]
};
