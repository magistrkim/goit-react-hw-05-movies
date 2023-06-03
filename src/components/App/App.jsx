import { BrowserRouter } from 'react-router-dom';

import MoviesRoutes from '../MoviesRoutes/MoviesRoutes';

const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <MoviesRoutes />
    </BrowserRouter>
  );
};

export default App;
