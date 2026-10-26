# EBS Energia Solar – site institucional

Site estático (HTML + CSS + JS), sem build. Abra `index.html` ou publique a pasta em qualquer hospedagem (Vercel, Netlify, Hostinger...).

## Estrutura
```
index.html            página única (HTML + dados estruturados de SEO)
css/
  base.css            variáveis (cores/fonte), reset e botões
  header.css          topbar e cabeçalho
  hero.css            hero, cards de destaque, faixa de números
  sections.css        sobre, soluções, On/Off grid, painel escuro, como funciona
  components.css      simulador, galeria, pagamento, avaliação/cidades, FAQ
  contact-footer.css  contato, rodapé, botão WhatsApp
  responsive.css      animação de entrada e breakpoints (carregar por último)
js/
  menu.js  tabs.js  accordion.js  simulator.js  gallery.js  reveal.js  main.js
img/                  fotos (hero.jpg já incluída)
favicon.svg  og-image.png  robots.txt  sitemap.xml
```
Para mudar cores/fonte: `css/base.css` (`:root`). Para mudar o WhatsApp: `js/simulator.js` e os links `wa.me` do `index.html`.

## Antes de publicar
1. Troque o domínio `https://www.ebsenergiasolar.com.br/` (canonical, og:url, og:image, JSON-LD, sitemap.xml, robots.txt) pelo domínio real.
2. Adicione fotos reais na pasta `img/` (o site já procura estes nomes; sem a foto, aparece um fundo ilustrado):
   - `hero.jpg` (fundo do topo, 1600x900+), `fachada.jpg` (sobre), `loja.jpg` (como funciona), `sistema.jpg` (On/Off grid)
   - `residencial.jpg`, `comercial.jpg`, `rural.jpg`, `usina-solo.jpg` (cards de soluções, proporção 4:3)
   - `projeto-1.jpg` ... `projeto-8.jpg` (galeria "Projetos": a seção só aparece se pelo menos 3 fotos existirem)
3. Confirme com o cliente: dias/horário de funcionamento, financiamento (condições) e cidades atendidas.
4. Registre o site no Google Search Console e coloque o link no Perfil da Empresa no Google.

## Dados usados (fontes públicas)
- Google Perfil: Av. Luís Eduardo Magalhães, 823 – Gusmão, Eunápolis-BA, 45821-000 (ao lado da Motral), (73) 99916-0076, nota 5,0 (3 avaliações), fecha 17h30
- Instagram @ebsenergiasolar: revenda credenciada Intelbras; destaques: Instalações, Bomba solar, Lei 14.300, Off Grid
- Facebook Ebenezer Energia Solar: "reduzir conta em até 98%", opções de financiamento, projetos no Extremo Sul da Bahia
