export const JCakeCard = ({ 
    id,
    name,
    price,
    stock,
    img,
    type }) => {
  return (
    <div className="col-4">
        <div className="card mb-3">
            <img className="card-img-top" src={ `../assets/${ type }/${ img }` } alt={ name } />
            <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text">{ `Precio: $ ${ price }` }</p>
                <p className="card-text">{ `Quedan: ${ stock } unidades` }</p>
            </div>
        </div>
    </div>
  )
}
