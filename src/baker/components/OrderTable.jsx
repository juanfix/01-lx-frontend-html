import { orders } from '../../data/data';

export const OrderTable = () => {
  return (
    <div className="table-responsive">
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">Nombre de cliente</th>
            <th scope="col">Número telefónico</th>
            <th scope="col">Email</th>
            <th scope="col">Decripcion</th>
            <th scope="col">Sabores</th>
            <th scope="col">Adornos</th>
            <th scope="col">Precio</th>
            <th scope="col">Fecha</th>
            </tr>
        </thead>
        <tbody>
        {
            orders.map((order) => (
                <tr key={ order.id }>
                    <td>{ order.name }</td>
                    <td>{ order.phonenumber }</td>
                    <td>{ order.email }</td>
                    <td>{ order.description }</td>
                    <td>{ order.flavours.map((flavour) => (
                        <ul>
                            <li>{ flavour }</li>
                        </ul>
                    )) }
                    </td>
                    <td>{ order.ornaments.map((ornament) => (
                        <ul>
                            <li>{ ornament }</li>
                        </ul>
                    )) }
                    </td>
                    <td>{ order.price }</td>
                    <td>{ order.date }</td>
                </tr>
            ))
        }
        </tbody>
        </table>
    </div>
  )
}
