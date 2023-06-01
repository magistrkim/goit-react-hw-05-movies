import { BrowserRouter } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import MoviesRoutes from '../MoviesRoutes/MoviesRoutes';
import Footer from 'components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter >
      <Navbar />
      <MoviesRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
