import { BrowserRouter } from 'react-router-dom';
import FilmRoutes from './FilmRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <FilmRoutes />
    </BrowserRouter>
  );
};

export default App;
