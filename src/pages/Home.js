import ItemListContainer from './../components/ItemListContainer/ItemListContainer';
import Carousel from './../components/Carousel/Carousel';
import Brands from './../components/Brands/Brands';
const Home=()=>{
    return(
        <>
        <Carousel img1='../ban/B4.jpg' img2='../ban/B5.jpg' img3='../ban/B6.jpg'/>
        <Brands/>
        <ItemListContainer titleCont='NUEVOS LANZAMIENTOS'/>
        </>
        
    )
}
export default Home;