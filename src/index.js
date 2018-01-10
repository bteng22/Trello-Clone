import ReactDOM from 'react-dom';
import './index.css';
import history from './history';
import router from './router';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');

function renderComponent(component) {
  ReactDOM.render(component, container);
}

function render(location) {
  router.resolve(routes, location)
    .then(renderComponent)
    .catch(error => router.resolve(routes, { ...location, error })
    .then(renderComponent));
}

render(history.location);
history.listen(render);
registerServiceWorker();