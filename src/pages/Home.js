import ItemListContainer from './../components/ItemListContainer/ItemListContainer';
import Carousel from './../components/Carousel/Carousel';
import Brands from './../components/Brands/Brands';
const Home=()=>{

    return( 
        <>
        <Carousel 
            img1='../ban/Banner_01.png' 
            img2='../ban/Banner_02.png' 
            img3='../ban/Banner_03.png'
            page1='marvel'
            page2='dc'
            page3='ivrea'
        />
        <Brands/>
        <ItemListContainer titleCont='NUEVOS LANZAMIENTOS'/>
        </>
        
    )
}
export default Home;