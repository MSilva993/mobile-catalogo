# Catálogo Mobile

Aplicativo desenvolvido em **React Native** com **Expo** para catálogo de produtos.  
Permite navegação entre categorias masculinas e femininas, exibição de produtos e detalhes individuais.

---

## Tecnologias utilizadas

- React Native
- Expo
- Expo Router
- Axios (requisições HTTP)
- React Native Vector Icons (ícones)
- Expo Linear Gradient (gradientes visuais)
- React Navigation (navegação)

---

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js (versão LTS recomendada)
- npm ou yarn
- Expo CLI
  ```bash
  npm install -g expo-cli
  ```

### Extensão de ícones da Expo

expo install @expo/vector-icons

### Como executar o projeto

Clone o repositório:

git clone https://github.com/MSilva993/mobile-catalogo.git
cd catalogo-mobile

### Instale as dependências:

npm install

### Execute o projeto com Expo:

npx expo start

### Abra no navegador (modo web).

Todos os testes e a apresentação foram realizados via web, não utilizamos emulador ou celular.

---

### Parte 3 — Funcionalidades e Estrutura

## Funcionalidades principais

- Login: tela inicial para autenticação do usuário
- Navegação por gênero: alternar entre produtos masculinos e femininos
- Categorias: botões de categoria com scroll horizontal (Bolsas, Vestidos, Joias, Sapatos, Relógios)
- Listagem de produtos: exibição em grade com imagem, descrição e preço
- Detalhes do produto: tela dedicada mostrando informações completas
- Logout: botão para sair da conta e retornar à tela de login

---

## Estrutura de pastas

catalogo-mobile/
├── app/
│ ├── login/
│ │ ├── index.tsx
│ │ └── styles.ts
│ ├── tabs/
│ │ ├── \_layout.tsx
│ │ ├── feminino.tsx
│ │ ├── masculino.tsx
│ │ ├── detalhes.tsx
│ │ └── index.tsx
│ ├── index.tsx
│ └── styles.ts
├── assets/
│ └── (imagens e ícones do projeto)
├── constants/
│ └── (configurações globais, se houver)
├── src/
│ ├── components/
│ │ ├── CategoryTabs/
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ ├── GenderTabs/
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ ├── HeaderLogout/
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ ├── HeaderTabs/
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ └── ProductCard/
│ │ ├── index.tsx
│ │ └── styles.ts
│ ├── screens/
│ │ ├── detalhes/
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ ├── feminino/
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ ├── login/
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ ├── masculino/
│ │ │ ├── index.tsx
│ │ │ └── styles.ts
│ │ └── index.tsx
│ ├── services/
│ │ └── api.ts
│ └── styles.ts
├── .gitignore
├── AGENTS.md
├── package.json
└── README.md
