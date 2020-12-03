import 'regenerator-runtime/runtime';

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { ConnectedKittens} from './Kittens'
import { ConnectedPuppies} from './Puppies'
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedPuppies />
    <ConnectedKittens />
  </Provider>,
  document.getElementById('app')
)
