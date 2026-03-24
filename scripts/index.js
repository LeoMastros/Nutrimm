const nav = document.querySelector("nav");

function createA(href, texto) {
  const a = document.createElement("a");
  a.innerHTML = texto;
  a.href = href;
  return a;
}
/*const navs = [
  { href: "#sobre", texto: "Sobre" },
  { href: "#dicas", texto: "Dicas" },
  { href: "#contato", texto: "Contato" },
];*/
for (let index = 0; index < navs.length; index++) {
  const element = navs[index];
  const link = createA(element.href, element.texto);
  nav.appendChild(link);
}
/*const sections = [
  {
    title: "Sobre nós",
    body: `A NUTRIMM – Nutrição Marilene Mouta vai muito além de prescrever
dietas: nosso propósito é transformar a sua relação com a comida e com
o seu corpo. Especializados no conceito inovador da Nutrição
Comportamental, oferecemos um acompanhamento 100% personalizado e
acolhedor. Entendemos que cada paciente tem uma história única. Por
isso, utilizamos métodos modernos para criar estratégias alimentares
que se adaptam à sua rotina, e não o contrário. Nosso cuidado é
integral e abrange todas as fases e necessidades da vida: acompanhamos
crianças, adolescentes, adultos, gestantes e idosos. Também oferecemos
suporte avançado para esportistas e dietoterapia especializada para
diversas condições de saúde. Na NUTRIMM, temos uma convicção: a
verdadeira saúde se constrói de dentro para fora. Sem julgamentos ou
restrições extremas, vamos ajudar você a fazer do alimento o seu maior
aliado na conquista do bem-estar e da qualidade de vida que você
merece.`,
  },
  {
    title: "Dicas de Nutrição",
    body: `<ul>
            <li style="font-size: 1.2em">
              Base natural: Faça de alimentos frescos e in natura (frutas,
              vegetais, grãos, carnes e ovos) a base do seu prato.
            </li>
            <li style="font-size: 1.2em">
              Moderação nos temperos: Use óleos, gorduras, sal e açúcar em
              pequenas quantidades apenas para dar sabor..
            </li>
            <li style="font-size: 1.2em">
              Limite os processados: Queijos, pães artesanais e conservas são
              ótimos complementos, mas não devem ser a refeição principal.
            </li>
            <li style="font-size: 1.2em">
              Evite ultraprocessados: Fuja de produtos de pacote cheios de
              aditivos artificiais (refrigerantes, biscoitos recheados, macarrão
              instantâneo).
            </li>
            <li style="font-size: 1.2em">
              Atenção plena (Mindful Eating): Coma sem distrações (sem celular ou
              TV) para o cérebro registrar a refeição e perceber a saciedade.
            </li>
            <li style="font-size: 1.2em">
              Coma em companhia: Dividir a mesa com outras pessoas reduz a
              ansiedade, traz conexão e faz você comer mais devagar.
            </li>
            <li style="font-size: 1.2em">
              Compre em feiras: Priorize locais com alimentos frescos, da estação
              e menos embalados, como sacolões e mercados de bairro.
            </li>
            <li style="font-size: 1.2em">
              Vá para a cozinha: Preparar a própria comida, mesmo pratos simples,
              garante o controle total sobre a qualidade do que você ingere.
            </li>
            <li style="font-size: 1.2em">
              Planeje-se: Organize sua despensa e seu cardápio semanal para não
              cair na armadilha do delivery e do fast-food por puro cansaço.
            </li>
            <li style="font-size: 1.2em">
              Leia os rótulos: Seja crítico com o marketing; não se engane com
              embalagens que dizem ser "fit", mas têm nomes estranhos nos
              ingredientes.
            </li>
          </ul>`,
  },
  {
    title: "Contato",
    body: "Entre em contato conosco pelo email: contato@nutricao.com",
  },
];
const p = createParagraph(
  "Este é um parágrafo criado com a função createParagraph.",
);
const p2 = createParagraph(
  "Este é um parágrafo criado com a função createParagraph.",
);*/
const main = document.querySelector("main");

main.appendChild(p);
main.append(p2);

for (let index = 0; index < sections.length; index++) {
  const section = createSection(
    `section-${index + 1}`,
    sections[index].title,
    sections[index].body,
  );
  main.appendChild(section);
}
