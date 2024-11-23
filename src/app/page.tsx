import Displays from './components/displays/page';
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
    </main>
  );
}
