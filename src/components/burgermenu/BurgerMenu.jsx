import style from './burgermenu.module.css'

const BurgerMenu=()=>{

    return(
    <div className={style.menu}>
        <button className={style.burgerbtn}>Головна</button>
        <button className={style.burgerbtn}>Учню</button>
        <button className={style.burgerbtn}>Вчителю</button>
        <button className={style.burgerbtn}>Питання</button>
        <button className={style.burgerbtn}>Кабінет</button>
    
    </div>)
}
export default BurgerMenu