import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Aside from '../components/aside/Aside';
import Col from '../components/col/Col'
import '../index.css'

const Layout = () => {
  return (
  <div className="body_container">
    <div className="main_container">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
    <Aside />
    <Col />
  </div>
  );
};

export default Layout;
