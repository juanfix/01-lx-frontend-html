import { Link } from "react-router-dom"

export const AboutPage = () => {
  return (
    <div className="row mt-2">
      <h2 className='text-center'>Contacto</h2>
      <div className="col-12">
        <div className="table-responsive">
          <table className="table table-striped">
          <thead>
              <tr>
              <th scope="col">Sede</th>
              <th scope="col">Dirección</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Horario de atención</th>
              </tr>
          </thead>
          <tbody>
            <tr>
                <td>Norte</td>
                <td><a target='_blank' href='https://goo.gl/maps/5Stgb4Hq4By6Rp5c6'>Cra. 13 #153-81, Bogotá</a></td>
                <td>3025256325</td>
                <td>24 Horas</td>
            </tr>
            <tr>
                <td>Sur</td>
                <td><a target='_blank' href='https://goo.gl/maps/Y8MKhdKEaPaaz4RP9'>Cl. 51 Sur #3415, Bogotá</a></td>
                <td>3116529865</td>
                <td>Lunes a Viernes, 8:00 am - 9:00 pm</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
