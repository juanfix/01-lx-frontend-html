import { flavours, ornaments } from '../../data/data';

export const StockTables = () => {
  return (
    <>
    {/* Sabores */}
    <h3>sabores</h3>
        <div className="table-responsive">
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Sabor</th>
                <th scope="col">Unidades restantes</th>
                </tr>
            </thead>
            <tbody>
            {
                flavours.map((flavour) => (
                    <tr key={ flavour.id }>
                        <td>{ flavour.name }</td>
                        <td>{ flavour.stock }</td>
                    </tr>
                ))
            }
            </tbody>
            </table>
        </div>

        {/* Adornos */}
        <h3>adornos</h3>
        <div className="table-responsive">
            <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Adorno</th>
                <th scope="col">Unidades restantes</th>
                </tr>
            </thead>
            <tbody>
            {
                ornaments.map((ornament) => (
                    <tr key={ ornament.id }>
                        <td>{ ornament.name }</td>
                        <td>{ ornament.stock }</td>
                    </tr>
                ))
            }
            </tbody>
            </table>
        </div>
    </>
  )
}
