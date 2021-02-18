<p align="center">
  <a href="" rel="noopener">
 <img width=900px src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa8e70079-33a8-4fbe-80b8-30fcecdd47a9%2FSimulador_-_Inicio_-_Web.png?table=block&id=7f98fc0b-44e5-4f65-a19c-ce10542bf37c&width=3840&cache=v2" alt="Backend para aplicação VUTTR"></a>
</p>

<h3 align="center">Green Acesso</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center"> Projeto contruído com conhecimentos ReactJS e Typescript.
   <br>
</p>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Iniciando](#getting_started)
- [Testes](#tests)
- [Uso](#usage)
- [Construído utilizando](#built_using)
- [Authors](#authors)

## 🧐 Sobre <a name = "about"></a>

Link de apresentação da aplicação, [aqui](https://youtu.be/3eR5tTskKn0).

### 🎈 Frontend

Front-end utilizando Next.js pela primeira vez, uma experiência de grande aprendizado, já tinha antes estudado um pouco Gatsby. Fiz uma task-list com cards especificando o que eu teria que fazer, me ajudou muito. Assim, divido os problemas maiores em menores e as suas resoluções ficam mais claras.

Grande parte do desafio para mim foi lidar com os estados no Nextjs, pois cada vez que uma nova página é 'buildada' ela perde os estados dos componentes mesmo que esses estados estejam utilizando o hook do React de ContextAPI, então para sanar esse problema, pesquisei e achei uma biblioteca da própria criadora do Nextjs, o SWR que é uma biblioteca React Hooks para busca remota de dados.

### 🎈 Backend

API e banco de dados para a aplicação de Simulador de fretes.

Aplicação com conceitos e metodologias aplicadas, tais como DDD, SOLID e TDD. O **DDD**(Domain Driven Design) é uma metodologia de desenvolvimento que pode ser utilizada para arquitetura do projeto. O que utilizei dessa metodologia, são os padrões, boas práticas e conceitos no backend. O **TDD**(Test Driven Development): é uma metodologia de desenvolvimento e pode ser utilizado junto com DDD. Pode ser aplicado tanto no Back quanto no Front. Essa metodologia tem a característica de criar testes antes de criar a funcionalidade em si. O **SOLID** é um acrônimo criado por Michael Feathers que representa os 5 princípios da programação orientada a objetos. Princípios esses que são SRP, OCP, LSP, ISP, DIP. Utilizei no projeto os principios SRP(Single Responsability Principle), LSP(Liskov Substitution Principle) e DIP(Dependency Inversion Principle).

A API está documentada, [nesse link](https://app.swaggerhub.com/apis/larabeatrizms/Simulador-de-fretes/1.0.0).

Criado com requisitos baseados no desafio da [SmartEnvios](https://www.notion.so/laragostack/Challenge-SmartDev-cedd1407785b49ceaf1a8283370f3956).

## 🏁 Iniciando <a name = "getting_started"></a>

### 🎈 Frontend

- Telas seguindo o protótipo e utilizando a API de cotação disponibilizada ao final do documento
- Validação de dados (email, CNPJ validar com Regex)
- Controlar de alguma forma o número cotações que aquele CNPJ já fez
- Guardar os dados do cliente na API (backend) que você construiu anteriormente 😉
- Limitar de alguma forma que o usuário consiga fazer apenas 3 cotações por CNPJ
- Cuidados especiais com otimização, SEO, entre outros;
- Interagir com a rota "intention" do backend, enviando os dados de CEP Origem, CEP Destino, Lead ao clicar no botão **Encontrar melhor frete.**
- Atualizar o registro no banco de dados caso o cliente preencha os dados no modal e clique em **Conhecer opções de Frete.**

### 🎈 Backend

- Aplicação contendo API simples, sem autenticação, que consiga fazer requisições à um banco de dados (MongoDB ou PostgreSQL) para persistência dos leads
- Testes
- A API deverá ser documentada
- Enviar um email para o usuário agradecendo o interesse pela plataforma.
- Enviar um email para o (sdr@smartenvios.com) repassando os dados do Lead
- Criar rota que será chamada ao clicar no botão **Encontrar melhor frete** persistindo em uma tabela de intenção (intention) - Uuid (gerado no front), CEP de Origem, CEP Destino, Lead (true or false)
- Essa rota poderá receber uma chamada para atualizar o lead de false para true, caso o cliente preencha os dados de contato para ver os resultados da cotação

### Rotas da Aplicação

- **`POST /lead`**: Rota para cadastrar uma novo lead.

- **`POST /intention`**: Rota para cadastrar uma nova intenção.

- **`PUT /intention/{id}`**: Rota fazer update no campo `lead` de uma intenção.

* **`GET /api-docs`**: Rota com toda a documentação da API.

### Requisitos

Ter instalado pelo menos um gerenciador de pacotes do Node, [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### Installing

Executar na raiz do projeto o seguinte comando para instalar as dependências `yarn install` ou `npm install`

Para executar a API localmente, deve ter um container com Postgress com o nome correto para que o typeorm possa se conectar ao seu banco de dados.

## 🎈 Frontend

## Uso <a name="usage"></a>

```sh
yarn dev
```

## 🔧 Executando os testes <a name = "tests"></a>

```sh
yarn test
```

### Sobre os testes

Para essa aplicação, implementei os seguintes testes:

- **`should be able to create a new lead`**

- **`should be able to create a new intention`**

- **`should be able to update a intention already created`**

- **`should not be able to update an intention that does not exist`**

## ⛏️ Construído utilizando <a name = "built_using"></a>

- [Typescript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

#### Frontend

- [Next](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)


## ✍️ Authors <a name = "authors"></a>

👤 **Junior Alves**

- Github: [@jjunior96](https://github.com/jjunior96)
- LinkedIn: [@Junior Alves](https://www.linkedin.com/in/junior-alves-b66a10127/)
