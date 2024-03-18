import {SectionTitle} from "../../../../components/section-title";
import './style.scss'
export const Categories = ()=>{
    return <section>
        <div className='G-container'>
            <div className={'category-block'}>
                <SectionTitle title={'Categories'}/>
                <div className={'categories-list G-flex-wrap gap-10'}>

                </div>
            </div>
        </div>
    </section>
}