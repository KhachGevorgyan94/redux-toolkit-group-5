import {Button} from "../../components/button";
import {SpecialCard} from "../../components/special-card";
import image1 from '../../assets/images/image-1.jpg'
import image2 from '../../assets/images/image-1.jpg'
import {Cover} from "./components/cover";
import {ShopCards} from "./components/shop-cards";
import {Categories} from "./components/categories";

export const Home = () => {
    return <>
        <Cover/>
        <Categories/>
        <ShopCards/>
    </>
}


// example 1
// function Home(){
//     return <div>Home</div>
// }
// export default Home


// tarberak 2
// export default function Home(){
//     return <div>Home</div>
// }

// tarberak 3
// export const Home =  function (){
//     return <div>Home</div>
// }

// tarberak 4
// export const Home = () => {
//     return <div>Home</div>
// }


function foo() {

}

// const foo = function ()
