const projects = {
  // =========================================================
  // PROJETO 05 — LEGATO MOBILE
  // =========================================================
  "legato-mobile": {
    code: "PROJECT / 005",
    semester: "SEMESTRE 05",
    title: "Legato Mobile",

    description:
      "Aplicativo mobile voltado à conexão entre músicos, descoberta de perfis, colaboração musical e comunicação em tempo real.",

    details:
      "O Legato Mobile faz parte de uma plataforma que busca aproximar músicos com interesses e objetivos em comum. A aplicação oferece recursos sociais, descoberta de usuários, publicações, interações, conexões e comunicação direta. O backend disponibiliza serviços para dar suporte a essas funcionalidades, incluindo integração com serviços externos e gerenciamento de dados.",

    features: [
      "Descoberta de músicos e perfis com interesses em comum.",
      "Busca de usuários próximos por geolocalização.",
      "Publicações, comentários e curtidas.",
      "Conexões, seguidores e gerenciamento de interações entre usuários.",
      "Recursos para criação e gerenciamento de colaborações musicais.",
      "Chat com troca de mensagens em tempo real.",
      "Notificações sobre atividades da plataforma.",
      "Integração com o Spotify para acesso a informações musicais."
    ],

    architecture:
      "A aplicação mobile utiliza uma organização baseada em MVVM. O backend principal é desenvolvido em Java com Spring Boot, organizado em camadas de controllers, services, repositories, models, DTOs e mappers. A lógica de negócio é separada em serviços específicos, e as alterações no banco de dados são organizadas por scripts de migração. A comunicação em tempo real utiliza WebSockets com STOMP.",

    technologies: [
      "React Native",
      "Java",
      "Spring Boot",
      "WebSockets",
      "STOMP",
      "API REST",
      "MVVM",
      "Maven",
      "Docker",
      "Cloudinary",
      "Spotify API"
    ],

    contribution:
      "Implementei a comunicação do chat por WebSockets e desenvolvi funcionalidades da interface mobile. Minha atuação contribuiu para a integração da aplicação com os serviços de comunicação em tempo real.",

    contributionTechnologies: [
      "React Native",
      "WebSockets",
      "STOMP",
      "API REST"
    ],

    repository:
      "https://github.com/victor-trindade-santos/legato-mobile",

    repositoryLinks: [
      {
        label: "Aplicativo Mobile",
        url: "https://github.com/victor-trindade-santos/legato-mobile",
        description: "Código-fonte da aplicação mobile."
      },
      {
        label: "Backend Mobile",
        url: "https://github.com/tba-txt/legato-mobile-backend",
        description: "API Java/Spring Boot para suporte ao aplicativo mobile."
      }
    ],



    screenshots: [
      {
        src: "images/legato-mobile_page1.png",
        alt: "Tela principal do Legato Mobile",
        caption: "Tela principal do aplicativo"
      },
      {
        src: "images/legato-mobile_page2.png",
        alt: "Segunda tela do Legato Mobile",
        caption: "Funcionalidades da aplicação"
      },
      {
        src: "images/legato-mobile_page3.png",
        alt: "Terceira tela do Legato Mobile",
        caption: "Outras funcionalidades do aplicativo"
      }
    ]
  },

  // =========================================================
  // PROJETO 04 — LEGATO WEB
  // =========================================================
  "legato-frontend": {
    code: "PROJECT / 004",
    semester: "SEMESTRE 04",
    title: "Legato Web",

    description:
      "Plataforma web para descoberta de músicos, interação social, compartilhamento de conteúdo e colaboração musical.",

    details:
      "O Legato Web integra a proposta de uma rede social voltada a músicos. A plataforma reúne interfaces para apresentação de perfis, descoberta de pessoas, publicações, interações e comunicação. O projeto possui frontend web e backend com serviços para autenticação, perfis, conexões, conteúdo, colaborações, notificações e chat.",

    features: [
      "Interfaces web para interação entre músicos.",
      "Perfis com informações e interesses musicais.",
      "Descoberta de usuários e busca por proximidade.",
      "Publicações, comentários e curtidas.",
      "Solicitações de conexão, seguidores e bloqueios.",
      "Criação e gerenciamento de colaborações.",
      "Chat e comunicação em tempo real.",
      "Notificações sobre atividades dos usuários.",
      "Gerenciamento de imagens e mídias."
    ],

    architecture:
      "O frontend utiliza Next.js e TypeScript, com gerenciamento de dependências por Node.js/npm. O backend utiliza Java e Spring Boot, com arquitetura REST organizada em controllers, services, repositories, models e DTOs. O backend também possui configuração para Docker. O repositório inclui documentação de produto e experiência do usuário, além de configuração de qualidade de código com ESLint.",

    technologies: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Java",
      "Spring Boot",
      "API REST",
      "WebSockets",
      "Maven",
      "Docker",
      "Cloudinary"
    ],

    contribution:
      "Desenvolvi o frontend da aplicação de forma independente e também contribuí com partes do backend. Minha participação envolveu a construção das interfaces web e a implementação de funcionalidades da aplicação.",

    contributionTechnologies: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Integração com API"
    ],

    repository: "https://github.com/Erne1984/Legato-Frontend",

    repositoryLinks: [
      {
        label: "Frontend Web",
        url: "https://github.com/Erne1984/Legato-Frontend",
        description: "Repositório da aplicação web."
      },
      {
        label: "Backend",
        url: "https://github.com/Erne1984/Legato-Backend",
        description: "API Java/Spring Boot. Repositório mantido por Ernesto."
      }
    ],

    live: "https://legato-frontend.vercel.app/",

    screenshots: [
      {
        src: "images/legato-web_page1.png",
        alt: "Página inicial do Legato Web",
        caption: "Interface principal da plataforma"
      },
      {
        src: "images/legato-web_page2.png",
        alt: "Segunda tela do Legato Web",
        caption: "Funcionalidades da plataforma"
      }
    ]
  },

  // =========================================================
  // PROJETO 03 — PORTAL BRUXA ACADÊMICA
  // =========================================================
  "bruxa": {
    code: "PROJECT / 003",
    semester: "SEMESTRE 03",
    title: "Portal Bruxa Acadêmica",

    description:
      "Portal de conteúdo voltado a temas esotéricos, incluindo tarologia, numerologia, astrologia, magia, cursos e artigos.",

    details:
      "O Portal Bruxa Acadêmica reúne conteúdos informativos e recursos relacionados ao universo esotérico. A aplicação contempla uma área de artigos, conteúdos educacionais e ferramentas relacionadas a astrologia e numerologia. O backend disponibiliza recursos para gerenciamento de usuários, artigos, cursos e arquivos enviados à plataforma.",

    features: [
      "Cadastro e autenticação de usuários.",
      "Criação, leitura e gerenciamento de artigos.",
      "Gerenciamento de cursos e conteúdos educacionais.",
      "Recursos relacionados à astrologia.",
      "Funcionalidades de numerologia.",
      "Upload de imagens de perfil e outros arquivos.",
      "Armazenamento de mídias na nuvem.",
      "Serviço de envio de e-mails."
    ],

    architecture:
      "O backend é desenvolvido em JavaScript com Node.js e Express.js. O MongoDB é utilizado para persistência de dados, com modelos para representar as entidades da aplicação. A estrutura inclui controllers, models, configurações e middlewares. O Cloudinary é utilizado para armazenamento de mídias, enquanto variáveis de ambiente ajudam a manter as configurações da aplicação separadas do código.",

    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "API HTTP",
      "Cloudinary",
      "Axios",
      "dotenv",
      "bcryptjs"
    ],

    contribution:
      "Atuei no desenvolvimento do frontend, com foco na página inicial e na página de escrita de artigos. Minha contribuição esteve relacionada à construção das interfaces, à organização visual do conteúdo e à experiência de navegação.",

    contributionTechnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Desenvolvimento de interfaces"
    ],

    repository:
      "https://github.com/victor-trindade-santos/portal-bruxa-academica",

    repositoryLinks: [
      {
        label: "Projeto Portal Bruxa Acadêmica",
        url: "https://github.com/victor-trindade-santos/portal-bruxa-academica",
        description: "Repositório do projeto, incluindo o backend."
      }
    ],

    live: "https://portal-bruxa-academica.vercel.app/",

    screenshots: [
      {
        src: "images/portal-bruxa-academica_page1.png",
        alt: "Página inicial do Portal Bruxa Acadêmica",
        caption: "Página inicial do portal"
      },
      {
        src: "images/portal-bruxa-academica_page2.png",
        alt: "Página de escrita de artigos do Portal Bruxa Acadêmica",
        caption: "Interface de escrita de artigos"
      }
    ]
  },

  // =========================================================
  // PROJETO 02 — AGROSTOCK
  // =========================================================
  "agrostock": {
    code: "PROJECT / 002",
    semester: "SEMESTRE 02",
    title: "AgroStock",

    description:
      "Sistema web de gerenciamento agrícola para centralizar informações sobre estoque, insumos, colheitas, fornecedores, compradores e vendas.",

    details:
      "O AgroStock foi desenvolvido como Projeto Integrador acadêmico com foco na organização das operações de um negócio rural. O sistema reúne funcionalidades de gestão de usuários, controle de insumos agrícolas, registro de colheitas, gerenciamento de fornecedores e compradores e acompanhamento de vendas. Um dashboard complementa a aplicação com informações para apoiar o acompanhamento das atividades.",

    features: [
      "Cadastro, login e gerenciamento de usuários.",
      "Fluxo de recuperação de senha com envio de e-mails.",
      "Registro e acompanhamento de colheitas.",
      "Cadastro e controle de insumos agrícolas.",
      "Organização dos tipos de insumos e colheitas.",
      "Cadastro de fornecedores e compradores.",
      "Gerenciamento de informações de endereço.",
      "Registro e acompanhamento de vendas.",
      "Dashboard com resumos gerenciais.",
      "Disponibilização de recursos estáticos e upload de arquivos."
    ],

    architecture:
      "O sistema utiliza a arquitetura MVC (Model-View-Controller), separando models, views e controllers. A camada de rotas organiza os endpoints, enquanto o Node.js executa a aplicação no servidor. O Handlebars é utilizado para renderizar as páginas HTML a partir de templates, incluindo um layout principal compartilhado. O projeto também possui módulos auxiliares para envio de e-mails e diretórios para arquivos estáticos e uploads.",

    technologies: [
      "Node.js",
      "JavaScript",
      "Handlebars",
      "MVC",
      "Rotas HTTP",
      "Banco de dados",
      "HTML",
      "CSS"
    ],

    contribution:
      "Fiquei responsável pela parte de estoque do sistema, trabalhando na implementação das funcionalidades relacionadas ao gerenciamento de insumos e informações dessa área com Node.js.",

    contributionTechnologies: [
      "Node.js",
      "JavaScript",
      "Handlebars",
      "MVC"
    ],

    repository:
      "https://github.com/victor-trindade-santos/PI-2Semestre-AgroStock",

    repositoryLinks: [
      {
        label: "Código-fonte AgroStock",
        url: "https://github.com/victor-trindade-santos/PI-2Semestre-AgroStock",
        description: "Repositório do projeto acadêmico."
      }
    ],

  

    screenshots: [
      {
        src: "images/agrostock_page1.png",
        alt: "Tela do sistema AgroStock",
        caption: "Interface do sistema de gestão agrícola"
      },
      {
        src: "images/agrostock_page2.png",
        alt: "Outra tela do sistema AgroStock",
        caption: "Funcionalidades de gerenciamento"
      }
    ]
  },

  // =========================================================
  // PROJETO 01 — SÊNIOR CONECTA
  // =========================================================
  "senior-conecta": {
    code: "PROJECT / 001",
    semester: "SEMESTRE 01",
    title: "Sênior Conecta",

    description:
      "Aplicação web concebida para conectar empresas e trabalhadores por meio de uma plataforma com interfaces de cadastro para ambos os perfis.",

    details:
      "O Sênior Conecta é um projeto acadêmico voltado à aproximação entre empresas e trabalhadores. A estrutura disponibiliza interfaces de cadastro específicas para cada perfil e uma página de tratamento de erro para páginas não encontradas. O projeto também contempla documentação e modelagem de software, importantes para definir e representar o funcionamento da solução.",

    features: [
      "Interface de cadastro de empresas.",
      "Interface de cadastro de trabalhadores.",
      "Página personalizada para erros 404.",
      "Organização visual com fontes tipográficas customizadas.",
      "Documentação técnica e modelagem do projeto."
    ],

    architecture:
      "A estrutura identificada é focada no frontend e utiliza páginas HTML estáticas. O projeto inclui um diretório de fontes tipográficas locais para personalizar a identidade visual. O ambiente de desenvolvimento utiliza Visual Studio Code com Live Server configurado para executar a aplicação localmente na porta 5501. Não foram identificados, nas informações fornecidas, frameworks ou bibliotecas de frontend.",

    technologies: [
      "HTML",
      "Desenvolvimento web",
      "UML",
      "Modelagem de software",
      "Documentação técnica",
      "Fontes tipográficas customizadas",
      "Visual Studio Code",
      "Live Server"
    ],

    contribution:
      "Minha participação foi concentrada principalmente na documentação do projeto e na elaboração de diagramas de engenharia de software, contribuindo para representar os requisitos, a estrutura e o funcionamento esperado da solução.",

    contributionTechnologies: [
      "UML",
      "Modelagem de software",
      "Documentação técnica"
    ],

    repository:
      "https://github.com/rafaelassoaress/Projeto-Senior-Conecta",

    repositoryLinks: [
      {
        label: "Código-fonte",
        url: "https://github.com/rafaelassoaress/Projeto-Senior-Conecta",
        description: "Repositório do projeto acadêmico."
      }
    ],

    live:
      "https://projeto-senior-conecta.vercel.app/",

    screenshots: [
      {
        src: "images/senior_conecta_page1.png",
        alt: "Página do projeto Sênior Conecta",
        caption: "Interface da aplicação"
      },
      {
        src: "images/senior_conecta_page2.png",
        alt: "Outra tela do Sênior Conecta",
        caption: "Tela complementar da aplicação"
      }
    ]
  }
};


// =========================================================
// CARREGAMENTO DO PROJETO
// =========================================================

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = projects[projectId];

const byId = (id) => document.getElementById(id);


function addListItems(containerId, items = []) {
  const container = byId(containerId);

  if (!container) return;

  container.replaceChildren();

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}


function addTags(containerId, items = []) {
  const container = byId(containerId);

  if (!container) return;

  container.replaceChildren();

  items.forEach((item) => {
    const tag = document.createElement("span");
    tag.textContent = item;
    container.appendChild(tag);
  });
}


function setText(id, value = "") {
  const element = byId(id);

  if (element) {
    element.textContent = value;
  }
}


function renderFeatures(items = []) {
  const container = byId("project-features");

  if (!container) return;

  container.replaceChildren();

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });

  const section = byId("project-features-section");

  if (section) {
    section.hidden = items.length === 0;
  }
}


function renderRepositoryLinks(project) {
  const container = byId("project-repositories");
  const primaryLink = byId("project-repository");

  const links = project.repositoryLinks?.length
    ? project.repositoryLinks
    : project.repository
      ? [{
          label: "Código-fonte",
          url: project.repository,
          description: "Acessar o repositório do projeto."
        }]
      : [];

  // Compatibilidade com o HTML antigo:
  // se não existir o novo container, utiliza o link original.
  if (!container) {
    if (primaryLink) {
      if (links.length > 0) {
        primaryLink.href = links[0].url;
        primaryLink.textContent = links[0].label;
        primaryLink.target = "_blank";
        primaryLink.rel = "noopener noreferrer";
        primaryLink.hidden = false;
      } else {
        primaryLink.hidden = true;
      }
    }

    return;
  }

  container.replaceChildren();

  links.forEach((repo) => {
    const item = document.createElement("div");
    item.className = "repository-item";

    const link = document.createElement("a");
    link.href = repo.url;
    link.textContent = `${repo.label} ↗`;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const description = document.createElement("p");
    description.textContent = repo.description || "";

    item.append(link, description);
    container.appendChild(item);
  });

  container.hidden = links.length === 0;

  if (primaryLink) {
    primaryLink.hidden = true;
  }
}


function renderProject(project) {
  document.title = `${project.title} | Victor Trindade Santos`;

  setText("project-semester", project.semester);
  setText("project-code", project.code);
  setText("project-title", project.title);
  setText("project-description", project.description);
  setText("project-details", project.details);
  setText("project-architecture", project.architecture);
  setText("project-contribution", project.contribution);

  addTags("project-tags", project.technologies);
  addListItems("project-technologies", project.technologies);
  addTags("contribution-tags", project.contributionTechnologies);

  renderFeatures(project.features);
  renderRepositoryLinks(project);

  const liveButton = document.getElementById("project-live");

if (liveButton) {
  const liveUrl =
    typeof project.live === "string"
      ? project.live.trim()
      : "";

  let validLiveUrl = false;

  try {
    const parsedUrl = new URL(liveUrl);
    validLiveUrl =
      ["http:", "https:"].includes(parsedUrl.protocol) &&
      parsedUrl.hostname.length > 0;
  } catch {
    validLiveUrl = false;
  }

  liveButton.hidden = !validLiveUrl;

  if (validLiveUrl) {
    liveButton.href = liveUrl;
  } else {
    liveButton.removeAttribute("href");
  }
}

  const gallery = byId("project-gallery");
  const galleryEmpty = byId("gallery-empty");

  if (!gallery) return;

  gallery.replaceChildren();
  gallery.hidden = false;

  if (galleryEmpty) {
    galleryEmpty.hidden = true;
  }

  project.screenshots.forEach((screenshot) => {
    const figure = document.createElement("figure");
    figure.className = "ascii-frame project-screenshot";

    const image = document.createElement("img");
    image.src = screenshot.src;
    image.alt = screenshot.alt;
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = screenshot.caption;

    image.addEventListener("error", () => {
      figure.remove();

      if (gallery.children.length === 0) {
        gallery.hidden = true;

        if (galleryEmpty) {
          galleryEmpty.hidden = false;
        }
      }
    });

    figure.append(image, caption);
    gallery.appendChild(figure);
  });
}


function showProjectNotFound() {
  document.title = "Projeto não encontrado | Victor Trindade Santos";

  setText("project-semester", "PROJETO NÃO ENCONTRADO");
  setText("project-title", "Projeto indisponível");
  setText(
    "project-description",
    "Não foi possível identificar o projeto solicitado. Volte à página principal e selecione um dos cards."
  );

  [
    "project-code",
    "project-details",
    "project-architecture",
    "project-contribution"
  ].forEach((id) => setText(id, ""));

  [
    "project-repository",
    "project-repositories",
    "project-live",
    "project-gallery",
    "project-features-section"
  ].forEach((id) => {
    const element = byId(id);

    if (element) {
      element.hidden = true;
    }
  });

  const galleryEmpty = byId("gallery-empty");

  if (galleryEmpty) {
    galleryEmpty.hidden = true;
  }

  [
    "project-tags",
    "project-technologies",
    "contribution-tags",
    "project-features"
  ].forEach((id) => {
    const element = byId(id);

    if (element) {
      element.replaceChildren();
    }
  });
}


if (project) {
  renderProject(project);
} else {
  showProjectNotFound();
}