# Portfólio — Victor Trindade Santos

Site estático responsivo para hospedagem no GitHub Pages. Construído com HTML semântico, CSS e JavaScript puro; o fundo animado utiliza Canvas 2D e caracteres ASCII, sem dependência de Three.js.

## Arquivos
- `index.html`: conteúdo, navegação, currículo e cards dos projetos.
- `styles.css`: identidade visual monocromática, bordas ASCII e responsividade.
- `script.js`: animação do canvas e modais de detalhes dos projetos.

## Visualizar localmente
Abra `index.html` no navegador. Para uma experiência mais consistente, use uma extensão de servidor local (por exemplo, Live Server no VS Code).

## Publicar no GitHub Pages
1. Crie um repositório no GitHub, por exemplo `portfolio`.
2. Envie `index.html`, `styles.css`, `script.js` e este README para a raiz do repositório.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**, escolha `main` e a pasta `/ (root)`, e salve.
5. Aguarde a publicação e abra a URL exibida pelo GitHub Pages.

## Antes da entrega acadêmica
- Troque o placeholder ASCII pela fotografia real.
- O nível de inglês informado é B2.
- Substitua os placeholders de screenshot por capturas reais. O JavaScript tem `imagePaths` em cada projeto para apontar a imagens locais, por exemplo `assets/legato-home.png`; crie a pasta `assets` e ajuste os caminhos.
- Revise as descrições das participações individuais e confirme as tecnologias efetivamente utilizadas em cada projeto.
- Os cursos de extensão foram omitidos porque não havia informações suficientes para apresentá-los corretamente.
- Revise as datas e a descrição profissional antes da publicação.

## Acessibilidade e movimento
O modal usa o elemento nativo `<dialog>`, os controles têm foco visível e a animação respeita `prefers-reduced-motion`.
