import { CardItem } from "./card-item";
import { AnimatedBorder } from "./animatedborder";

export function AnimatedBorderDemo() {
  return (
    <AnimatedBorder
      className="max-h-3/5 h-fit w-3/6 rounded-xl "
      to="var(--foreground)"
      from="#6F2DBD"
      stop="#6F2DBD"
    >
      <CardItem text={"Tecnologia da Informação (T.I) é o conjunto de técnicas, ferramentas e sistemas usados para criar, gerenciar e compartilhar informações.\n hardware, software, redes e análise de dados, T.I. é o motor invisível que move o mundo moderno — e também o culpado quando \"o sistema tá fora do ar\"."} title="O que é T.I?" className="backdrop-blur-3xl bg-darker textContent card" />
    </AnimatedBorder>
  );
}
