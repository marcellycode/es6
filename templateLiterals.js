const article = {
  title: "Aprendendo Template Sttring",
  tags: ["es6", "js", "html"],
  author: "Marcelly",
};

//função que passa unknown se não tiver nome na propriedade author 
function renderAuthor(name) {
  return name ? name : "unknown";
}

const markup = `
      <article>
          <header>
          <h1>${title}</h1>
          </header>
          <section>
          <ul>
              ${article.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
          ${renderAuthor(article.author)}
          </section>
      </article>`;
document.body.innerhtml = markup;
