import React from 'react';
import './App.css';

import configureStore from './store/configureStore'
import { bugAdded, bugResolved } from './store/bugs';
import { projectAdded } from './store/projects';

function App() {

  const store = configureStore();

  store.dispatch(projectAdded({ name: "Project 1" }))

  store.dispatch(bugAdded({ description: "Bug 1" }))
  store.dispatch(bugAdded({ description: "Bug 2" }))
  store.dispatch(bugAdded({ description: "Bug 3" }))
  store.dispatch(bugResolved({ id: 1 }))

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
