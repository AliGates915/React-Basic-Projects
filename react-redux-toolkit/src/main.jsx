import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AddTodo/>
    <Todos/>
  </Provider>,
)
