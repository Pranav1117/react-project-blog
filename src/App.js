
import './App.css';
import Home from './pages/Home/Home';
import Bollywood from './pages/Bollywood/bollywod';
import Hollywood from './pages/Hollywood/hollywood';
import Fitness from './pages/Fitness/fitness';
import Gaming from './pages/Gaming/Gaming';
import Technology from './pages/Technology/technology';
import RouterComponent from './Utilities/Routes/Routes';
import {Info} from './Utilities/ContextApi/contextApi';

function App() {
  return (
    <div className="App">
      <Info>
     <RouterComponent>
     <Home/>
     <Bollywood/>
     <Hollywood/>
     <Technology/>
     <Gaming/>
     <Fitness/>
     
     </RouterComponent>
     </Info>
    
    </div>
  );
}

export default App;
