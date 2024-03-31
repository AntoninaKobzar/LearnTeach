import style from './mainPage.module.css'
import Img1 from '../../assets/images/img1.jpg'
import Img2 from '../../assets/images/img2.jpg'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const MainPage=()=>{

    return(
        <>
        <Header/>
        <div className={style['main-page']}>
        <h1 className={style.title}>ВчусяВчу: </h1>
        <p className={style.subtitle}>Вчись сам, навчай інших!</p>
        <img className={style['main-img']} src={Img1} width='80px' alt={<a href="http://www.freepik.com">Designed by Freepik</a>}/>
        <p className={style['main-text']}>Ласкаво просимо на наш веб-сайт, де ми створили унікальну можливість для учнів та вчителів знаходити одне одного для навчання та викладання!</p>
        <p className={style['info-title']}>Безліч можливостей:</p>

<p className={style.info}>Наш сайт пропонує широкий спектр навчальних предметів – від математики та фізики до мов та мистецтва. Ви можете вибирати між онлайн- та очними заняттями в залежності від вашого розкладу та особистих вподобань. Крім того, у нас є можливість перегляду відгуків та рейтингів, щоб ви могли знайти вчителя, який найкраще підходить вам.
Не вагайтеся – приєднуйтесь до нашої спільноти навчання та розвитку вже сьогодні!</p>
       <p className={style.quote}>
        <q>"Навчання - це ключ до дверей, що ведуть до найбільших можливостей у вашому житті." 
        </q>- Oprah Winfrey</p> 
        <img className={style['main-img']} src={Img2} width='80px' alt={<a href="http://www.freepik.com">Designed by Freepik</a>}/>
        <div className={style['pupils-info']}>
            <p className={style['info-title']}>Для учнів:</p>
            <p className={style['info-text']}>Ви шукаєте вчителя або репетитора з конкретного предмету? У нас ви знайдете великий вибір кваліфікованих вчителів, готових допомогти вам у засвоєнні будь-якого матеріалу. Ви можете шукати за предметами, рівнем складності, рейтингом, а також вибирати між онлайн- та очними заняттями – все залежить від вашої власної зручності та переваг.</p>
        <button className={style['main-btn']}>Перейти</button>
        </div>
        <div className={style['teachers-info']}>
        <p className={style['info-title']}>Для вчителів:</p>
        <p className={style['info-text']}>Ви прагнете допомогти іншим у навчанні? У нас є безліч учнів, які активно шукають вчителів як для онлайн-, так і для очних занять. Ви можете створити профіль, вказавши ваші навчальні предмети та рівень кваліфікації, і чекати, коли учні звернуться саме до вас.</p>
        <button className={style['main-btn']}>Перейти</button>
        </div>
        </div>
       <Footer/>
        </>
    )
}
export default MainPage