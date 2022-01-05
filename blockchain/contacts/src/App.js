import './App.css';
import { BrowserRouter,
  Routes, 
  Route } from "react-router-dom";
  import HomeComponent from './page/home/home.component';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
