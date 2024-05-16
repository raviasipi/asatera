import "./App.css";
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from "./routes/routes.config";

const GlobalRoutes = () => useRoutes(routes)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalRoutes />
      </Router>
    </Provider>
  );
}

export default App;
