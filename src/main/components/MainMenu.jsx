import { useNavigate } from "react-router-dom";

export const MainMenu = () => {

    let navigate = useNavigate();

    const routeChange = (e, type) =>{ 
        if (type === 'client') navigate('client/cakes');
        else navigate('/baker/stock');
    }

  return (
    <>
        <h1>Bienvenido a JCake</h1>
        <img src='./assets/logo.svg' className="img-fluid mt-5" alt='logo' />
        <h4 className='mt-3'>¡Degusta tus dulces creaciones!</h4>
        <div className="row mt-5">
            <div className="col-3"></div>
            <div className="col-6 d-grid">
                <button 
                    className="btn btn-secondary btn-block"
                    onClick={ (e) => routeChange(e, 'client') }
                    >
                    Soy cliente
                </button>
            </div>
            <div className="col-3"></div>
        </div>
        <div className="row mt-3">
            <div className="col-3"></div>
            <div className="col-6 d-grid">
                <button 
                    className="btn btn-secondary btn-block"
                    onClick={ (e) => routeChange(e, 'baker') }
                    >
                    Soy pastelero
                </button>
            </div>
            <div className="col-3"></div>
        </div>
    </>
  )
}
