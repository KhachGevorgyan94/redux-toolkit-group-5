import {Button} from "../button";
import './style.scss'
export const SpecialCard = ({title, description, image, minHeight}) => {
    return <div className={'special-card G-center'} style={{minHeight}}>
        <div className='special-card-image' style={{backgroundImage: `url('${image}')`}}/>
        <div className={'special-card-info G-flex G-flex-column G-center gap-10'}>
            <span>{description}</span>
            <h3>{title}</h3>
            <Button>Shop Now</Button>
        </div>
    </div>
}