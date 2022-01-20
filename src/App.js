import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Club from './views/Club/Club';
import Header from './components/common/Header/Header';
import Home from './views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/club/:code" exact element={<Club />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
