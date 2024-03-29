import style from './Header.module.css'
import MenuIcon from '../../assets/images/menu.png'

const Header=()=>{

    return(
        <div className={style.header}>
        <p className={style.logo}>ВчусяВчу</p>
        
        <button className={style.menubtn}><img className={style.menuicon} src={MenuIcon} width="30" height="30" alt='burger menu icon'/></button>
        </div>
    )
}
export default Header