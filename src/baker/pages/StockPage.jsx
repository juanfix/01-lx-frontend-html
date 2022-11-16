import { StockTables } from "../components/StockTables"

export const StockPage = () => {
  return (
    <div className="row mt-2">
    <h2 className='text-center'>Inventario</h2>
      <div className="col-12">
        <StockTables />
      </div>
    </div>
  )
}
