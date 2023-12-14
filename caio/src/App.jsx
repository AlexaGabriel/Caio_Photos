/* eslint-disable react/jsx-no-target-blank */
import './App.scss'
import logo from "./assets/logo-caio.png"
import foto1 from "./assets/1.jpg"
import foto2 from "./assets/2.jpg"
import foto3 from "./assets/3.jpg"
import foto4 from "./assets/4.jpg"
import foto5 from "./assets/5.jpg"
import foto6 from "./assets/6.jpg"
import caio from "./assets/caio.png"
import light from "./assets/light.png"
import photo from "./assets/photo.png"
import video from "./assets/video.png"
import serv1 from "./assets/serv1.jpg"
import serv2 from "./assets/serv2.jpg"
import serv3 from "./assets/serv3.jpg"
import insta from "./assets/instagram.png"
import email from "./assets/gmail.png"

function App() {

  return (
    <>
      <header>
        <nav>
          <span className='logo'><img src={logo} alt="Logo caiow_photos"/></span>
          <ul>
            <li><a href="#port">Portfólio</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#serv">Serviços</a></li>
            <li><a href="#footer">Contato</a></li>
          </ul>
        </nav>
        <div className='title'>
              <h1 className='caio'>Caio</h1>
              <h1 className='góes'>Góes</h1>
              <h2>FOTÓGRAFO</h2>
          </div>
      </header>
      <main>
        <article id='port'>
          <h2>Portfólio 2023-2024</h2>
          <div className='imagens-colum'>
              <span className='first-line'><img src={foto1} alt="" /></span>
              <span className='second-line'><img src={foto2} alt="" /></span>
              <span className='third-line'><img src={foto3} alt=""/></span>
              <span className='fourth-line'><img src={foto4} alt=""/></span>
              <span className='five-line'><img src={foto5} alt=""/></span>
              <span className='sixty-line'><img src={foto6} alt=""/></span>
          </div>
        </article>
        <article id='about'>
          <div className='flex-in'>
            <img src={caio} alt="" />
            <section>
              <h1>Sobre mim</h1>
              <p>Olá, meu nome é Caio, sou um jovem de 19 anos residente em Salvador, e recentemente tomei a decisão entusiasmante de imergir na fascinante jornada das áreas de fotografia, design e edição. Neste espaço dedicado, você será brindado com uma galeria de imagens extraordinárias, todas habilmente capturadas utilizando apenas meu celular, e em breve, com a aquisição de uma câmera profissional, a qualidade visual será elevada a patamares ainda mais impressionantes. Explore este universo visual em constante evolução e permita-se ser cativado por essa experiência estética única!</p>
              <div className='linha-horizontal'></div>
              
            </section>
          </div>
        </article>
        <article id='serv'>
          <div className='flexi'>
            <h1>Serviços</h1>
            <section className='texto-serv'>
            <div className='linha-v'></div>
              <aside className='as-1'>
              <div className='linha-h'></div>
                <span><img src={photo} alt="" /></span>
                <p>tiro fotos de altissima qualidade, em seus eventos, seja show, aniversario, casamento ou igreja. </p>
              </aside>
              <aside className='as-2'>
                <span><img src={video} alt="" /></span>
                <p>gravo videos para os diversos usos, além de edita-los </p>
              </aside>
              <aside className='as-3'>
                <span><img src={light} alt="" /></span>
                <p>faço o design dos seus itens, seja logo ou todo o trabalho visual da sua pagina/insta</p>
              </aside>
            </section>
          </div>
          <section className='imgs-serv'>
            <img className='serv1' src={serv1} alt="" />
            <img className='serv2' src={serv2} alt="" />
            <img className='serv3' src={serv3} alt="" />
          </section>
        </article>
      </main>
      <footer id='footer'>
      <h2>contato</h2>
      <div className='parte'>
        <aside className='contacts'>
          
            <span>
              <img src={insta} alt="" />
              <p>Instagram: <a href="https://www.instagram.com/caiow_photos/" target='blank'>caiow_photos</a></p>
            </span>
         
            <span>
              <img src={email} alt="" />
              <p>Email:<a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=DmwnWrRtsffTgHWKxPdGqXRPFbSJLtCvsKjcBPtKzMDQLgSKfvxPSnpZbZwPzrxNSksjxfSlggXB" target='blank'>caiowphotos@gmail.com</a></p>
            </span>
        </aside>
        <aside className='creditos'>
          <p>Feito por <a href="https://www.instagram.com/dev_alexgbriel/">Alexandre</a></p>
          <a target="_blank" href="https://icons8.com/icon/cD26kdwTbCzt/image">Image</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </aside>
      </div>
      </footer>

    </>
  )
}

export default App
