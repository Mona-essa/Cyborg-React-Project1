import './GamingLibraryCard.css'

const GamingLibraryCard = (props) => {
    return(
        <div className='GamingLibraryCard'>
            <ul>
                <li><img src={props.image} /></li>
                <li>{props.title}<br/><span>{props.category}</span></li>
                <li>{props.download} <br/><span>{props.category}</span></li>
                <li>{props.rate} <br/><span>{props.category}</span></li>
                <li>{props.title} <br/><span>{props.category}</span></li>
                <li><button>download</button></li>
            </ul>
        </div>
    )
}
export default GamingLibraryCard;