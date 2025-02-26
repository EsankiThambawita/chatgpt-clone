import { Link, Outlet } from 'react-router'
import './rootLayout.css'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to="/" className='logo'>
            <img src="/logo.ico" alt=""/>
            <span>Unicorn AI</span>
            </Link>
            <div className="user">User</div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  );
};

export default RootLayout