import React from 'react';
import './App.css';

import store from './store/store'
import { bugAdded, bugResolved } from './actions';

function App() {

  // const unSubscribe = store.subscribe(() => {
  //   console.log("Store Changed! ", store.getState())
  // })

  store.dispatch(bugAdded("Bug 1"))
  store.dispatch(bugAdded("Bug 2"))
  store.dispatch(bugAdded("Bug 3"))
  store.dispatch(bugResolved(1))
  // unSubscribe();

  // store.dispatch({
  //   type: actions.BUG_REMOVED,
  //   payload: {
  //     id: 1
  //   }
  // })
  console.log(store.getState())
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
