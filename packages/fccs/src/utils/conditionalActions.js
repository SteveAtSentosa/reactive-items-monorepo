import { curry } from 'ramda';

// if pred(toTest) log msg as a console warning.  always returns toTest
export const warnIf = curry((pred, msg, toTest)=> {
  if (pred(toTest)) console.warn(msg);
  return toTest;
});
