function createParagraph(text) {
  const p = document.createElement("p");
  p.innerHTML = text;
  return p;
}

function createSection(id, title, body) {
  const section = document.createElement("section");
  section.id = id;
  const h2 = document.createElement("h2");
  h2.innerHTML = title;
  const p = document.createElement("p");
  p.innerHTML = body;
  section.appendChild(h2);
  section.appendChild(p);
  return section;
}
