import { BrowserRouter } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import MoviesRoutes from '../MoviesRoutes/MoviesRoutes';

const App = () => {
  return (
    <BrowserRouter >
      <Navbar />
      <MoviesRoutes />
    </BrowserRouter>
  );
};

export default App;
