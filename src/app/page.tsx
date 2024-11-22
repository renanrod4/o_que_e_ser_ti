import { Archivo } from "next/font/google";
import './page.css'
import { Window } from './components/windows/page';
const archivo = Archivo({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800',],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={archivo.className}>
      <section>
        <Window title="O que é ser um T.I" id="mainWindow" buttons={false}>
          <div id="mainContent">
            <p>
              <span className="purple">&lt;/</span>
              O que é ser um profissional de T.I? /&gt;
            </p>
          </div>
        </Window>

        <Window title="O que comem? Onde habitam?" id="bottomWindow" buttons={false}>
          <p>
            Vamos Descobrir um pouco mais sobre essas <span className="yellow yellow-glow" >criaturas fascinantes</span>!
          </p>
        </Window>

        <Window id="leftWindow" buttons={true}>

        </Window>
      </section>
    </main>
  );
}
