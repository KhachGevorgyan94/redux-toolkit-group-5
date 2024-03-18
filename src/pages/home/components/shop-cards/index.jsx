import {SpecialCard} from "../../../../components/special-card";
import image1 from "../../../../assets/images/image-1.jpg";
import image2 from "../../../../assets/images/image-2.jpg";

export const ShopCards = ()=>{

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

            <div className={'shop-cards G-flex gap-30'}>
                {shopList.map((item, index) => {
                    return <SpecialCard key={index} description={item.description}
                                        title={item.title}
                                        image={item.image}
                                        minHeight={300}/>
                })}
            </div>
        </div>
    </section>
}