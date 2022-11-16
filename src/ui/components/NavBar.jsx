import { Link, useNavigate } from 'react-router-dom';

export const NavBar = ({ children }) => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/', {
            replace: true
        });
    }

  return (
    <nav className="navbar navbar-expand-lg rounded p-2">
        <div className='container-fluid'>
        <Link 
            className="navbar-brand" 
            to="#"
        >
            <img src='../assets/logo.svg' className="d-inline-block align-top" height='50' alt='logo' />
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">
                { children }
            </div>
        </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
                <button 
                    aria-label='btnLogout'
                    className='nav-item nav-link btn'
                    onClick={ onLogout }>
                    Salir
                </button>
            </ul>
        </div>

    </nav>
  )
}
