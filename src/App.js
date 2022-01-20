import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClubInfo from './views/Club/ClubInfo';
import Header from './components/common/Header/Header';
import Home from './views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home/premier-league" exact element={<Home />}></Route>
          <Route path="/club/:code" exact element={<ClubInfo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
