# <p align = "center"> WebScraper API </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-dimitripontocss-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/dimitripontocss/projeto22-ReSantuario-back?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição

Esse é o código de web scraping utilizados para obter informações sobre produtos do site https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops, e o código pode ser consumido através de uma api para facilitar seu uso.

---

## :computer: Tecnologias utilizadas

- REST APIs
- Node.js
- Puppeteer

---

## :rocket: Rotas

```yml
GET /lenovo
- Rota para pegar as informações dos produtos Lenovo
```

```yml
GET /search/:Params
- Rota usada para pesquisar diversos produtos através dos query params
- Passar um parâmetro no link com o nome do produto à ser pesquisado
```

---

## 🏁 Rodando a aplicação

Para roda é necessário ter Node.js e npm instalados na sua máquina.

Primeiro, clone o repositório:

```
git clone https://github.com/dimitripontocss/WebScraper
```

Depois rode o seguinte comando para instalar as dependências:

```
npm install
```

Agora rode esse comando e pronto pode usar sem preocupação!

```
npm run dev
```
