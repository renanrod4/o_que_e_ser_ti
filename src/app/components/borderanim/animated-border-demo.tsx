import { CardItem } from "./card-item";
import { AnimatedBorder } from "./animatedborder";

export function AnimatedBorderDemo() {
  let breakline = "\n"
  return (
    <AnimatedBorder
      className="max-h-3/5 h-fit w-3/6 rounded-xl "
      to="var(--foreground)"
      from="#6F2DBD"
      stop="#6F2DBD"
    >
      <CardItem text={"Tecnologia da Informação (T.I) é o conjunto de técnicas, ferramentas e sistemas usados para criar, gerenciar e compartilhar informações.\n  Ela envolve hardware, software, redes e a análise de dados, sendo fundamental em quase todas as áreas modernas."} title="O que é T.I?" className="backdrop-blur-3xl bg-darker textContent card" />
    </AnimatedBorder>
  );
}
