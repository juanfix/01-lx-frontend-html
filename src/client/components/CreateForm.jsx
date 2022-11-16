import { flavours, ornaments } from '../../data/data';

export const CreateForm = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        alert('Pedido realizado');
    }
  return (
    <>
        <form method='post' className='mt-3 mb-3' onSubmit={ submitHandler }>
        {/* Sabores */}
        <h3>Elige los sabores</h3>
        <div className="table-responsive">
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Seleccionar</th>
                <th scope="col">Sabor</th>
                <th scope="col">Precio</th>
                <th scope="col">Unidades restantes</th>
                </tr>
            </thead>
            <tbody>
            {
                flavours.map((flavour) => (
                    <tr key={ flavour.id }>
                        <td>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={ flavour.name } name="flavours[]" />
                        </div>
                        </td>
                        <td>{ flavour.name }</td>
                        <td>$ { flavour.price }</td>
                        <td>{ flavour.stock }</td>
                    </tr>
                ))
            }
            </tbody>
            </table>
        </div>

        {/* Adornos */}
        <h3>Elige los adornos</h3>
        <div className="table-responsive">
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Seleccionar</th>
                <th scope="col">Adorno</th>
                <th scope="col">Precio</th>
                <th scope="col">Unidades restantes</th>
                </tr>
            </thead>
            <tbody>
            {
                ornaments.map((ornament) => (
                    <tr key={ ornament.id }>
                        <td>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value={ ornament.name } name="ornaments[]" />
                        </div>
                        </td>
                        <td>{ ornament.name }</td>
                        <td>$ { ornament.price }</td>
                        <td>{ ornament.stock }</td>
                    </tr>
                ))
            }
            </tbody>
            </table>
        </div>

        {/* Datos del cliente */}
        <h3>Datos de envío</h3>
        <div className="form-group">
            <label htmlFor="name">Nombre completo</label>
            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Jhon Doe" required />
        </div>
        <div className="form-group">
            <label htmlFor="phonenumber">Teléfono</label>
            <input type="number" className="form-control" id="phonenumber" aria-describedby="phonenumberHelp" placeholder="+573123652563" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="jhon@mail.com" required />
        </div>
        <div className="form-group">
            <label htmlFor="description">Descripción del pastel</label>
            <textarea className="form-control" id="description" aria-describedby="descriptionHelp" placeholder="Indica detalles del pastel..." required />
        </div>
        <button type="submit" className="btn mt-3 text-center">Encargar</button>

        </form>
       
    </>
  )
}
