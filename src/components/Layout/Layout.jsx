import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import Loader from 'components/Loader/Loader';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <Navbar />
        </div>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Layout;
