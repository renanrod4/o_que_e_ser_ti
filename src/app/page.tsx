import { AnimatedBorderDemo } from "./components/borderanim/animated-border-demo";
import Image from 'next/image'
import { Displays } from './components/displays/displays';
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
            Vamos Descobrir um pouco mais sobre essas <span className="yellow yellow-glow" >criaturas fascinantes!</span>
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

      <section className='darker bg-custom-dots' id='internetOrigin'>{/* Origins of internet */}
        <article className='infoArticle'>
          <h1>Como surgiu a internet?</h1>
          <div className='textContent'>
            <p>A internet surgiu no final dos anos 1960 como um projeto militar dos Estados Unidos para conectar computadores de diferentes locais de forma segura e descentralizada.
              <br /> Com o tempo, ela foi adaptada para universidades, empresas e, mais tarde, para o público geral, transformando-se no que conhecemos hoje.</p>
          </div>
        </article>
      </section>

      <section id='arpanet'>
        <article id='arpanetLeft'>
          <div className="image"><Image alt="gif" src="/images/sphere.webp" width={700} height={500} />
          </div>
        </article>

        <article id='arpanetRight' className='infoArticle'>
          <h1>Arpanet</h1>
          <div className='textContent'>
            <p>A ARPANET, criada em 1969, foi a precursora da internet. Desenvolvida pelo Departamento de Defesa dos EUA, ela conectava instituições de pesquisa e universidades, permitindo o compartilhamento de informações.
              <br />Foi a primeira rede a usar o protocolo TCP/IP, base para a internet moderna.</p>
          </div>
        </article>
      </section>

      <section id='http'>{/* How emerged the HTTP */}
        <article id='httpLeft'>
          <div className="image"><Image alt="gif" src="/images/http.svg" width={350} height={350} id='httpsvg' />
          </div>
        </article>

        <article id='httpRight' className='infoArticle'>
          <h1>Como surgiu o HTTP?</h1>
          <div className='textContent'>
            <p>O HTTP (Hypertext Transfer Protocol) foi criado em 1989 por Tim Berners-Lee, o inventor da World Wide Web.
              <br />Ele desenvolveu o protocolo como uma forma de comunicação entre navegadores e servidores, permitindo a troca de informações na web de forma rápida e acessível.</p>
          </div>
        </article>
      </section>

      <section className="darker" id='plOrigins'>{/* Programming languages origins */}
        <Image alt='brackets' src={"/images/brackets.svg"} height={900} width={150} id='leftBracket' className='brackets' />
        <article className='infoArticle'  >
          <h1>Como surgiram as linguagens de programação</h1>
          <div className='textContent'>
            <p>
              As linguagens de programação surgiram para simplificar a comunicação entre humanos e computadores. Nos anos 1950, foram criadas linguagens como Fortran e COBOL para resolver problemas matemáticos e comerciais.
              <br /> Desde então, elas evoluíram para atender às necessidades de diversas áreas, como web, inteligência artificial e jogos.
            </p>
          </div>
        </article>
        <Image alt='brackets' src={"/images/brackets.svg"} height={900} width={150} id='rightBracket' className='brackets' />
      </section>

      <section>
        <AnimatedBorderDemo />
      </section>
    </main>
  );
}
