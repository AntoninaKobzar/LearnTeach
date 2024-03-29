import Header from "../header/Header"
import Footer from "../footer/Footer"
import BurgerMenu from "../burgermenu/BurgerMenu"


const Layout=({children})=>{

    return(
        <>
         <BurgerMenu/>
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
        </>
    )
}
export default Layout