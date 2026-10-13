(() => {
  "use strict";

  // ASCII background: lightweight canvas animation, no WebGL dependency.
  const canvas = document.getElementById("ascii-canvas");
  const ctx = canvas.getContext("2d", { alpha: true });
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const glyphs = "01{}[]<>/\\|+-=*#@$%:;.";
  let width = 0, height = 0, dpr = 1, columns = [], raf = 0, lastFrame = 0;

  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cell = width < 600 ? 17 : 20;
    columns = Array.from({ length: Math.ceil(width / cell) }, (_, i) => ({
      x: i * cell,
      y: Math.random() * height,
      speed: .15 + Math.random() * .55,
      cell
    }));
  }

  function draw(timestamp = 0) {
    if (prefersReducedMotion) return;
    raf = requestAnimationFrame(draw);
    if (timestamp - lastFrame < 42) return;
    lastFrame = timestamp;
    ctx.clearRect(0, 0, width, height);
    ctx.font = (width < 600 ? "10px" : "11px") + ' "Fira Code", monospace';
    ctx.textAlign = "center";
    for (const col of columns) {
      for (let row = 0; row < 5; row++) {
        const y = col.y - row * 15;
        if (y < -10 || y > height + 10) continue;
        const char = glyphs[(Math.floor(col.y / 15) + row + Math.floor(col.x)) % glyphs.length];
        const alpha = (1 - row / 5) * (0.08 + (Math.sin(timestamp / 900 + col.x) + 1) * 0.045);
        ctx.fillStyle = `rgba(235,235,235,${alpha})`;
        ctx.fillText(char, col.x, y);
      }
      col.y += col.speed * 1.6;
      if (col.y - 60 > height) col.y = -Math.random() * 150;
    }
  }

  resizeCanvas();
  if (!prefersReducedMotion) draw();
  window.addEventListener("resize", () => {
    cancelAnimationFrame(raf);
    resizeCanvas();
    if (!prefersReducedMotion) draw();
  }, { passive: true });

  const projects = {
    "legato-mobile": {
      semester: "5º SEMESTRE",
      title: "Legato Mobile",
      description: "Plataforma de conexão musical baseada em geolocalização, facilitando colaborações entre artistas, produtores e entusiastas. Inclui sistema de descoberta (match), feed social, chat em tempo real via WebSockets, reports e gerenciamento de perfil.",
      technologies: ["React Native", "MVVM", "API REST", "WebSockets"],
      role: "Minha contribuição individual foi implementar a comunicação do chat em tempo real via WebSockets e desenvolver funcionalidades do frontend mobile. O trabalho foi realizado em equipe; esta ficha destaca as partes pelas quais fui responsável.",
      repo: "https://github.com/victor-trindade-santos/legato-mobile",
      screenshots: ["Adicione uma captura da tela inicial", "Adicione uma captura do chat ou da descoberta"],
      imagePaths: ["images/legato-mobile_page1.png","images/legato-mobile_page2.png","images/legato-mobile_page3.png"]
    },
    "legato-frontend": {
      semester: "4º SEMESTRE",
      title: "Legato Frontend",
      description: "Frontend para uma plataforma que conecta músicos localmente, facilitando descoberta, colaboração e comunicação através de perfis, matches por cards, feed de postagens e chat integrado.",
      technologies: ["Front-end web", "Perfis", "Cards de match", "Feed social", "Chat"],
      role: "Desenvolvi sozinho o frontend web e também implementei algumas partes do backend. O projeto foi realizado em coautoria com Ernesto.",
      repo: "https://github.com/victor-trindade-santos/Legato-Frontend",
      live: "https://legato-frontend.vercel.app/",
      screenshots: ["Adicione uma captura da interface principal", "Adicione uma captura do feed ou dos cards de match"],
      imagePaths: ["images/legato-web_page1.png","images/legato-web_page2.png"]
    },
    "bruxa": {
      semester: "3º SEMESTRE",
      title: "Portal Bruxa Acadêmica",
      description: "Website desenvolvido para Márcia Silva, voltado a tarologia, numerologia, magia e astrologia, com cursos pagos e gratuitos e publicação de artigos.",
      technologies: ["Desenvolvimento web", "Website de conteúdo", "Cursos", "Artigos"],
      role: "Fui responsável pelo desenvolvimento do frontend, incluindo a tela inicial (home) e a tela de escrita/publicação de artigo.",
      repo: "https://github.com/victor-trindade-santos/portal_bruxa_academica",
      live: "https://portal-bruxa-academica.vercel.app/",
      screenshots: ["Adicione uma captura da página inicial", "Adicione uma captura de cursos ou artigos"],
      imagePaths: ["images/portal-bruxa-academica_page1.png","images/portal-bruxa-academica_page2.png"]
    },
    "agrostock": {
      semester: "2º SEMESTRE",
      title: "AgroStock",
      description: "Sistema de gerenciamento voltado ao setor agrícola, criado para centralizar o controle de insumos em estoque, colheitas, fornecedores, compradores e vendas. Também inclui autenticação e gerenciamento de usuários, recuperação de senha por e-mail e dashboard gerencial.",
      technologies: ["Node.js", "MVC", "Handlebars", "JavaScript", "Banco de dados"],
      role: "Minha contribuição individual foi o desenvolvimento da parte de estoque em Node.js, relacionada ao gerenciamento dos insumos agrícolas. A arquitetura identificada no projeto separa models, views, controllers e routes. A tecnologia específica do banco de dados não foi confirmada nesta descrição.",
      repo: "https://github.com/victor-trindade-santos/PI-2Semestre-AgroStock",
      screenshots: ["Adicione uma captura do controle de estoque", "Adicione uma captura do cadastro ou listagem de insumos"],
      imagePaths: ["images/agrostock_page1.png", "images/agrostock_page2.png"]
    },
    "senior-conecta": {
      semester: "1º SEMESTRE",
      title: "Projeto Sênior Conecta",
      description: "Aplicação web acadêmica com a proposta de aproximar empresas e trabalhadores. A versão apresentada contém interfaces de cadastro de empresas e trabalhadores, além de uma página de erro 404.",
      technologies: ["HTML", "Frontend estático", "Documentação", "Diagramas de Engenharia de Software"],
      role: "Minha participação foi concentrada principalmente na documentação do projeto e na elaboração dos diagramas de Engenharia de Software.",
      repo: "https://github.com/rafaelassoaress/Projeto-Senior-Conecta",
      live: "https://projeto-senior-conecta.vercel.app/",
      screenshots: ["Adicione uma captura da página inicial", "Adicione uma captura de cadastro de empresa ou trabalhador"],
      imagePaths: ["images/senior_conecta_page1.png", "images/senior_conecta_page2.png"]
    }
  };

  const dialog = document.getElementById("project-dialog");
  const dialogContent = document.getElementById("dialog-content");
  const closeDialog = document.getElementById("close-dialog");

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    }[char]));
  }

  function renderProject(project) {
    const technologies = project.technologies.map(tech => `<span>${escapeHTML(tech)}</span>`).join("");
    const screenshots = project.screenshots.map((label, index) => {
      const src = project.imagePaths && project.imagePaths[index];
      return src
        ? `<div class="screenshot-placeholder"><img src="${escapeHTML(src)}" alt="${escapeHTML(label)}"></div>`
        : `<div class="screenshot-placeholder"><div><strong>[ SCREENSHOT 0${index + 1} ]</strong>${escapeHTML(label)}<br><small>Substitua este bloco por uma imagem real do projeto.</small></div></div>`;
    }).join("");

    dialogContent.innerHTML = `
      <p class="dialog-project-kicker">${escapeHTML(project.semester)} // PROJECT RECORD</p>
      <h2 class="dialog-title" id="dialog-title">${escapeHTML(project.title)}</h2>
      <p class="dialog-description">${escapeHTML(project.description)}</p>
      <div class="tag-row">${technologies}</div>
      <div class="dialog-columns">
        <section class="dialog-section">
          <h3>01 / REPOSITÓRIO</h3>
          <p>Consulte o código-fonte e os detalhes técnicos do projeto.</p>
          <a class="dialog-link" href="${escapeHTML(project.repo)}" target="_blank" rel="noreferrer">[ ABRIR GITHUB ↗ ]</a>
          ${project.live ? `<p><a class="dialog-link" href="${escapeHTML(project.live)}" target="_blank" rel="noreferrer">[ ABRIR PROJETO PUBLICADO ↗ ]</a></p>` : ""}
          <h3 style="margin-top:25px">02 / PARTICIPAÇÃO</h3>
          <p>${escapeHTML(project.role)}</p>
        </section>
        <section class="dialog-section">
          <h3>03 / SCREENSHOTS</h3>
          <p>Espaços reservados para imagens do projeto em funcionamento.</p>
          ${screenshots}
        </section>
      </div>`;
    dialog.showModal();
    closeDialog.focus();
  }

  document.querySelectorAll("[data-project]").forEach(card => {
    card.addEventListener("click", () => {
      const project = projects[card.dataset.project];
      if (project) renderProject(project);
    });
  });
  closeDialog.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && dialog.open) dialog.close();
  });
})();
