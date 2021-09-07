import logo from './logo.svg';
import './App.css';
import Layout from './js/components/Layout';
import Card from './js/components/Card';
import injectContext from './js/store/appContext';


function App() {
  return (
    <Layout />
  );
}

export default injectContext(App);