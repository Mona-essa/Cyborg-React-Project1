import './GamingLibrary.css'
import GamingLibraryCard from '../GamingLibraryCard/GamingLibraryCard';
import GamingLibraryCardData from '../Data/GamingLibraryCardData'
import SectionHeader from '../SectionHeader/SectionHeader';

const GamingLibrary = () => {

const Items = GamingLibraryCardData.map(item => {
    return(
        <GamingLibraryCard key={item.id} title={item.title} category={item.category} image={item.image} rate={item.rate} download={item.download} />
    )
})

    return(
        <div className='section-wrapper mt-5'>
            <SectionHeader>Gaming Library</SectionHeader>
            <div className='gaming-library'>{Items}</div>
       
        </div>
        

    )
}

export default GamingLibrary;