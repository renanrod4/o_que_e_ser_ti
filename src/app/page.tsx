import {Displays} from './components/displays/displays';
import './page.css'



export default function Home() {
  return (
    <main>
      <section>
        <Displays title="O que é ser um T.I" id="mainWindow" buttons={false}>
          <div id="mainContent">
            <p>
              <span className="purple">&lt;/</span>
              O que é ser um profissional de T.I? /&gt;
            </p>
          </div>
        </Displays>

        <Displays title="O que comem? Onde habitam?" id="bottomWindow" buttons={false}>
          <p>
            Vamos Descobrir um pouco mais sobre essas <span className="yellow yellow-glow" >criaturas fascinantes</span>!
          </p>
        </Displays>

        <Displays id="leftWindow" buttons={true}>
          <div id="ylwrect"></div>
          <div id="lines">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        </Displays>
      </section>
      <section className='darker bg-custom-dots' id='internetOrigin'>
        <article className='infoArticle'>
          <h1>Como surgiu a internet?</h1>
          <div className='textContent'>
          <p>A internet surgiu no final dos anos 1960 como um projeto militar dos Estados Unidos para conectar computadores de diferentes locais de forma segura e descentralizada. Com o tempo, ela foi adaptada para universidades, empresas e, mais tarde, para o público geral, transformando-se no que conhecemos hoje.</p>
          </div>
        </article>
        
      </section>
    </main>
  );
}
