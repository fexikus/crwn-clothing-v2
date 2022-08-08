import {Outlet,Link} from 'react-router-dom';
import {Fragment} from 'react';

import {ReactComponent as CrownLogo} from '../../../assets/crown.svg';
import './navigation.style.scss';
// Navigationsleiste
const Navigation = () => {
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrownLogo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>Shop </Link>
                <Link className="nav-link" to='/shop'>Sonstiges </Link>
                <Link className="nav-link" to='/shop'>Sonstiges2 </Link>
      
            </div>
        </div>
          <Outlet />
      </Fragment>
    );
  }
  export default Navigation;