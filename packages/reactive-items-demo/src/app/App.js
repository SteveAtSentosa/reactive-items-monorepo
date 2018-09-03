import React from 'react';
import { hot } from 'react-hot-loader';
import { Item } from 'reactive-items';

const App = () =>(
  <div>
    Hello Hot
    <Item />
  </div>
);
export default hot(module)(App);
