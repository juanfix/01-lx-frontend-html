import { JCakeCard } from "../components/JCakeCard"

import { ornaments } from '../../data/data';


export const OrnamentPage = () => {
  return (
    <div className="row mt-2">
    <h2 className='text-center'>Adornos</h2>
      {
        ornaments.map((ornament) =>  (
              <JCakeCard 
                key={ ornament.id }
                { ...ornament }
              />
          ))
        }
    </div>
  )
}
