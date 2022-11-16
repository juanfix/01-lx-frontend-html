import { JCakeCard } from '../components/JCakeCard';
import { flavours } from '../../data/data';

export const CakesPage = () => {
  return (
    <div className="row mt-2">
    <h2 className='text-center'>Sabores</h2>
      {
        flavours.map((flavour) =>  (
              <JCakeCard 
                key={ flavour.id }
                { ...flavour }
              />
          ))
        }
    </div>
  )
}
