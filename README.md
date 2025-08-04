# 🐞 Debug em Node.js com TypeScript no VS Code

Este repositório demonstra como configurar e utilizar o **debugger** do Visual Studio Code para projetos em **Node.js com TypeScript**.

## 📁 Estrutura do Projeto

```bash
Debug-node/
├── src/
│   └── index.ts        # Arquivo principal com código a ser depurado
├── dist/               # Arquivos compilados em JavaScript (gerado automaticamente)
├── .vscode/
│   └── launch.json     # Configuração do debugger
├── tsconfig.json       # Configurações do TypeScript
├── package.json        # Dependências e scripts do projeto
```

## 🧰 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [VS Code](https://code.visualstudio.com/)
- Extensão do VS Code: **ESLint** (opcional, mas recomendada)
- TypeScript (instalado globalmente ou via `devDependencies`)

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Carloscb124/Debug-node
cd Debug-node
npm install
```

## ⚙️ Configuração do TypeScript

O arquivo `tsconfig.json` garante que os arquivos `.ts` sejam transpilados corretamente para `.js` no diretório `dist`.

```json
{
  "compilerOptions": {
    "target": "es2015",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## 🐞 Configuração do Debug no VS Code

No diretório `.vscode/`, o arquivo `launch.json` define a configuração para o VS Code iniciar o processo de debug.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Iniciar Debug com TypeScript",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/dist/index.js",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

💡 **Dica**: Certifique-se de que o TypeScript compile antes de iniciar o debug, ou configure um `task` automático.

## ▶️ Rodando o Projeto

1. Compile os arquivos TypeScript:

```bash
npx tsc
```

2. Inicie o debug no VS Code pressionando `F5` ou selecionando `Iniciar Debug com TypeScript` na aba de execução.

## 🚀 Scripts Úteis

```bash
npm run build    # Compila os arquivos TypeScript
npm start        # Executa o projeto compilado via Node.js
```

## 🧠 Dica Extra

Você pode adicionar `breakpoints` nos arquivos `.ts` diretamente, e o VS Code irá mapear corretamente para os arquivos `.js` graças ao `sourceMap`, se ativado no `tsconfig.json`.

```json
"sourceMap": true
```

## 📚 Referências

- [Debug Node.js no VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/)
