const nav = document.querySelector("nav");

function createA(href, texto) {
  const a = document.createElement("a");
  a.innerHTML = texto;
  a.href = href;
  return a;
}
const navs = [
  { href: "#sobre", texto: "Sobre" },
  { href: "#dicas", texto: "Dicas" },
  { href: "#contato", texto: "Contato" },
];
for (let index = 0; index < navs.length; index++) {
  const element = navs[index];
  const link = createA(element.href, element.texto);
  nav.appendChild(link)
}
/*const sections = [
  {
    title: "Sobre nós",
    body: "Somos dedicados a promover uma vida saudável através de uma boa nutrição.",
  },
  {
    title: "Dicas de Nutrição",
    body: "Coma mais frutas e vegetais, beba bastante água e evite alimentos processados.",
  },
  {
    title: "Contato",
    body: "Entre em contato conosco pelo email: contato@nutricao.com",
  },
];*/
const p = createParagraph(
  "Este é um parágrafo criado com a função createParagraph.",
);
const p2 = createParagraph(
  "Este é um parágrafo criado com a função createParagraph.",
);
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
