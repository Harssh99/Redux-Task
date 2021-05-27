import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import Button from './Components/Button';
import DispCount from './Components/DispCount';

function App() {
  return (
      <Provider Store= {Store}>
        <div className="App">
          <div className="outerContainer" style={{float: 'left'}}>
            <Button />
          </div> 
          <div className="outerContainer" style={{float: 'right'}}>
            <DispCount />
          </div>     
        </div>
    </Provider>
  );
}

export default App;
