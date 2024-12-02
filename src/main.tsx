import './index.css'
import TodoApp from './components/TodoApp.jsx'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);