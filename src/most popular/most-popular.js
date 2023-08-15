import './most-popular.css';
import Card from '../card/card';

import SectionHeader from '../SectionHeader/SectionHeader';
import MostPopularItems from '../Data/data';



const MostPopular = () => {

  const Items = MostPopularItems.map(item => {
    return(
      <Card key={item.id} image={item.image} title={item.title} category={item.category} rate={item.rate}/>
    )
  })
 
    return(
        <div className='section-wrapper '>
            <SectionHeader>Most Popular </SectionHeader>
            <div className='most-popular'>
              {Items}    
            </div>
            </div>
    )
}


export default MostPopular;