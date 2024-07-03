import { Outlet } from 'react-router-dom';
import CSidebar from '../components/Sidebar';

const LApp = () => {
  // TODO get logged status from context
  // const [isLogged] = useState(true);

  return (
    <div>
      <CSidebar></CSidebar>
      <div className="container app">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LApp;
