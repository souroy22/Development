import './App.css';
import {Route, Routes} from 'react-router-dom';
import News from './components/news/views/News';
import Navbar from './components/navbar/views/Navbar';
import Bookmark from './components/bookmark/views/Bookmark';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<News />}  />
        <Route exact path='/bookmarks' element={<Bookmark />}  />
      </Routes>
    </div>
  );
}

export default App;
