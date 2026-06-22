import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.sass' 

import { Provider } from 'react-redux'
import { store } from './app/stor.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)