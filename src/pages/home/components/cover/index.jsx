import {SpecialCard} from "../../../../components/special-card";
import './style.scss'
import image1 from "../../../../assets/images/image-1.jpg";
import image2 from "../../../../assets/images/image-2.jpg";
import {Button} from "../../../../components/button";

export const Cover = () => {
    const shopList = [
        {
            title: 'Special Offer',
            description: 'SAVE 20%',
            image: image1,
        }, {
            title: 'Special Offer',
            description: 'SAVE 40%',
            image: image2,
        }
    ]


    return <section>
        <div className={'G-container'}>
            <div className={'cover-block G-flex gap-30'}>
                <div className={'cover-left'}>
                    <div className='cover-main G-center G-flex-column gap-10'
                         style={{backgroundImage: `url('${image1}')`}}>
                        <h1>Men Fashion</h1>
                        <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr
                            ipsum diam</p>
                        <Button type={'secondary'}>Shop Now</Button>
                    </div>
                </div>
                <div className={'cover-right G-flex-column gap-30'}>
                    {shopList.map((item, index) => {
                        return <SpecialCard key={index} description={item.description}
                                            title={item.title}
                                            image={item.image}
                                            minHeight={200}/>
                    })}
                </div>
            </div>
        </div>
    </section>
}