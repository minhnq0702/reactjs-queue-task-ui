import { Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Logo.css';

const CLogo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <Image width={50} src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default CLogo;
