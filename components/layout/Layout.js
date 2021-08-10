import Navbar from './Navbar';
import globalStyles from '../../styles/global';

function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
}

export default Layout;
