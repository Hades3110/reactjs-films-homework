import ReactDOM from 'react-dom'
import App from './components/app/App'
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
