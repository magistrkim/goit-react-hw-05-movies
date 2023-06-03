import { BrowserRouter } from 'react-router-dom';

import MoviesRoutes from '../MoviesRoutes/MoviesRoutes';

const App = () => {
  return (
    <BrowserRouter >
      <MoviesRoutes />
    </BrowserRouter>
  );
};

export default App;
