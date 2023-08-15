import'./card.css'
import { FaAsterisk,FaArrowAltCircleDown } from "react-icons/fa";



const Card = (props) => {
    return(
        <div className='card'>
        <div className='card-wrapper'>
            <img src={props.image}/>
            <div className='card-info'>
                <h5>{props.title} <br/> <span style={{"font-size":"10px"}}>{props.category}</span></h5>
               
                <ul>
                    <li><span style={{"color":"yellow"}}><FaAsterisk />{props.rate}</span></li>
                    <li><span style={{"font-size":"12px"}}><FaArrowAltCircleDown />{props.download}</span></li>
                </ul>
            
            </div>
        </div>
    </div>
    )
}
export default Card;