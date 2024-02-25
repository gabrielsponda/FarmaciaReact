# Sistema de Farmácia - Avaliação Prática

Este repositório contém o projeto de um sistema de farmácia desenvolvido como parte de uma avaliação prática. O projeto foi desenvolvido em React e aborda a criação de um frontend para uma aplicação de farmácia, permitindo a manipulação de dados de produtos categorizados.

## Descrição do Projeto

O projeto foi desenvolvido seguindo uma série de requisitos específicos, com o objetivo de criar uma aplicação frontend que interaja com um backend previamente estabelecido, acessível via Swagger em deploy. O sistema permite a gestão de produtos e categorias, oferecendo funcionalidades de CRUD (Create, Read, Update, Delete) para ambas as entidades.

## Funcionalidades Implementadas

- **Modelagem de Categoria e Produto**: Criação dos modelos de dados para categoria e produto, com os devidos relacionamentos.
- **Componentes de Interface**: Desenvolvimento dos componentes de home, navBar e footer, com atenção especial ao alinhamento, posicionamento e design responsivo.
- **Serviço de Gestão de Dados**: Implementação do serviço com métodos de GetAll, Post, Put e Delete, conectando-se ao backend em deploy.
- **Páginas de Gestão de Categoria**: Criação de páginas para visualização (GetAll) e manipulação (Post/Put/Delete) de categorias.
- **Testes de Funcionalidades**: Validação das funcionalidades de CRUD para categorias, bem como a correta configuração e funcionamento das rotas do React Router.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TailwindCSS**: Utilizado para estilização e design responsivo dos componentes.
- **Axios**: Biblioteca utilizada para realizar requisições HTTP ao backend.
- **React Router**: Biblioteca para gestão de rotas dentro da aplicação.

## Estrutura do Projeto

O desenvolvimento do projeto seguiu uma abordagem iterativa, com a criação de branches específicas para cada fase da avaliação:

- `Home-navbar-footer`: Contém os componentes de interface inicial.
- `CRUD-categoria`: Inclui a implementação das funcionalidades de CRUD para a entidade Categoria.
- `rotas-conclusao-do-projeto`: Finaliza o projeto com a validação das rotas e ajustes finais.

## Conclusão

Este projeto foi desenvolvido como uma avaliação prática, focando em demonstrar habilidades em React, gestão de estados com hooks, estilização com TailwindCSS, consumo de APIs com Axios e navegação com React Router. A implementação seguiu rigorosamente os requisitos propostos, visando criar uma aplicação funcional e bem estruturada para a gestão de uma farmácia.

Caso haja dúvidas ou necessidade de suporte adicional, os instrutores da turma estão disponíveis para contato via Discord.
