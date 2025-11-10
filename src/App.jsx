
import './App.css';
import Prents_app from './component/parents';
import New_state from './states/State';
import Hide from './states/hide';
import Text_live from './states/input_text';

function App() {
  return (
    <div className="App">
      
      <Prents_app/>
      <New_state/>

      <Text_live/>
      <Hide/>
      
    </div>
  );
}

export default App;
