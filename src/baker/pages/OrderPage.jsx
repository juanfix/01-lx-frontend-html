import { OrderTable } from "../components/OrderTable"

export const OrderPage = () => {
  return (
    <div className="row mt-2">
    <h2 className='text-center'>Pedidos</h2>
      <div className="col-12">
        <OrderTable />
      </div>
    </div>
  )
}
