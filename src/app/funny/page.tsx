import { AnimatedBorderDemo } from "../components/borderanim/animated-border-demo";
import { InfiniteCarouselDemo } from "../components/carousel/infinite-carousel-demo";

import Image from 'next/image'
import { Displays } from '../components/displays/displays';
import '../page.css'



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
            <p>A internet surgiu no final dos anos 1960, basicamente porque alguém pensou: &quot;E se precisarmos mandar um e-mail secreto sobre mísseis nucleares?&quot; Assim, nasceu uma rede para conectar computadores de diferentes locais de forma segura e descentralizada.
              <br />
              Com o tempo, essa ideia séria acabou caindo nas mãos das universidades, que usaram para trocar artigos científicos, e depois das empresas, que a transformaram em uma máquina de anúncios. Eventualmente, chegou até o público geral, onde evoluiu para o que conhecemos hoje: 
              <br />um lugar onde memes, vídeos de gatinhos e debates acalorados sobre qual é o melhor sabor de pizza dominam a comunicação global.</p>
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
              <br />Foi a primeira rede a usar o protocolo TCP/IP, base para a internet moderna  e pavimentou o caminho para tudo que amamos hoje, desde e-mails com gifs animados até discussões intermináveis sobre teorias da conspiração no Twitter.
              <br /> Obrigado, ARPANET, por começar tudo isso!</p>
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
      <section className="darker" id="itAreas">
        <article className="infoArticle" id="itAreasLeft">
          <h1>Áreas de T.I</h1>
          <div className="textContent" >
            <p>
              A T.I é uma área vasta, que inclui:
            </p>
            <ul>
              <li>Desenvolvimento de software (Responsaveis infelizes pela existência do LoL)</li>
              <li>Segurança da informação (Os Hackermans da vida real)</li>
              <li>Administração de redes (Nome autoexplicativo, é o que a vivo não tem!)</li>
              <li>Inteligência artificial (Os anjos que criaram o ChatGPT)</li>
              <li>Ciência de dados (Traduzem rios de números em soluções brilhantes)</li>
              <li>Suporte técnico (Os carinhas do: &quot;já tentou reiniciar?&quot;).</li>
            </ul>
            <p>Essas especialidades ajudam empresas e pessoas a resolver problemas e inovar.</p>

          </div>
        </article>
        <article id="itAreasRight">
          <Image alt="computer" src={"/images/computer.svg"} width={900} height={900} id="computer" />
        </article>
      </section>

      <section id="prosAndCons" className="darker">
        <div className="flex flex-row w-full">
          <article id="pros" className="infoArticle">
            <h1>Pontos Positivos</h1>
            <div className="textContent">
              <ul className="text-start">
                <li>Grandes oportunidades de carreira</li>
                <li>Trabalhos remotos e flexíveis</li>
                <li>Salários atrativos</li>
                <li>Tendência a crescer</li>
              </ul>
            </div>
          </article >
          <article id="cons" className="infoArticle">
            <h1>Pontos Negativos</h1>
            <div className="textContent">
              <ul className="text-start">
                <li>Alta demanda por atualização constante</li>
                <li>Pode ser uma área estressante</li>
                <li>Longas horas de trabalho em alguns casos</li>
                <li>Muita Concorrência</li>
                <li>Ausência de regulamentação</li>
              </ul>
            </div>
          </article>
        </div>
        <h1 >São mais pontos negativos do que positivos...</h1>
      </section>
      <section id="topLangs">
        <article className="infoArticle">
          <h1>Linguagens em alta</h1>
          <div className="textContent">
            <p>Atualmente, algumas das linguagens mais populares e utilizadas são:</p>
            <ul>
              <li>Python: usado em inteligência artificial e ciência de dados.</li>
              <li>JavaScript: essencial para desenvolvimento web.</li>
              <li>Java: muito usado por grandes empresas em aplicativos móveis.</li>
              <li>C#: comum em desenvolvimento de jogos e softwares.</li>
              <li>C++: amplamente usado em aplicações desktop</li>
              <li>Rust: Usado em construção de sistemas que tem grande controle sobre o hardware</li>
            </ul>
          </div>

        </article>
        <div className="bg-darker rounded-none w-full flex items-center justify-center h-[105px]">
          <InfiniteCarouselDemo />
        </div>
      </section>
      <section id="minimumWage" className="darker">
        <Image src="images/money.svg" className="money moneySt" width={1000} height={1000} alt="money" />
        <Image src="images/money.svg" className="money moneyNd" width={1000} height={1000} alt="money" />
        <Image src="images/money.svg" className="money moneyRd" width={1000} height={1000} alt="money" />

        <article className="infoArticle">
          <h1>Piso salarial em TI</h1>
          <div className="textContent">
            <p>Os salários na área de TI variam conforme a experiência e a localização. <br />O piso salarial inicial pode variar entre R$2.000 a R$4.000 no Brasil, enquanto profissionais experientes podem ganhar muito mais, principalmente em áreas como desenvolvimento de software e segurança da informação. <br />Enquanto a média salarial na área no Brasil pode variar entre R$6.000 e R$10.000 mensais</p>
          </div>

        </article>
      </section>
    </main>
  );
}
