# Quadriatlon Muito Louco

"Quadriatlon Muito Louco" é um jogo de competição desenvolvido com Node.js e TypeScript. O jogo oferece quatro modalidades desafiadoras: Corrida, Natação, Escalada e Bicicleta. Os jogadores enfrentam desafios, utilizam itens e participam de encontros para progredir.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Execução](#execução)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição do Projeto

O "Quadriatlon Muito Louco" é um jogo texto onde o jogador compete em quatro modalidades diferentes. Cada modalidade tem seu próprio conjunto de desafios e itens que podem ser utilizados para melhorar o desempenho do competidor. O progresso do jogador é medido em níveis, e o jogo inclui encontros que podem afetar a evolução do competidor.
O jogados possui uma energia que a cada nivel vai diminuindo.
Será que você consegue!

O jogo foi desenvolvido como atividade final do Bootcamp da Italents - Fundamentos de Back-end Development
Video de explicação: https://youtu.be/wYhqouihnt8
 
## Funcionalidades

- **Modalidades**: Inclui Corrida, Natação, Escalada e Bicicleta.
- **Itens**: Itens que afetam o desempenho em cada modalidade.
- **Encontros**: Desafios ou eventos que ocorrem durante a modalidade.
- **Histórias**: Histórias associadas a cada modalidade.
- **Efeitos dos Itens**: Efeitos específicos dos itens em cada modalidade.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **prompts**: Biblioteca para entrada de dados do usuário.
- **ansi-colors**: Biblioteca para adicionar cores ao texto no terminal.

## Instalação

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/andcmatias/quadriatlon-muito-louco.git
   cd quadriatlon-muito-louco
   ```

2. **Instale as Dependências**
   Para instalar as dependências do projeto, execute:
   ```bash
   npm install
   ```
3. **Compile o Projeto**
   Para compilar o TypeScript para JavaScript, use o comando:
   ```bash
   npm run build
   ```

## Execução
Deve possuir instalado a versão do nodejs 20.14.0 ou superior.

Para executar o projeto, você pode escolher entre os seguintes modos:

- **Modo de Desenvolvimento**

  Para iniciar o projeto em modo de desenvolvimento, use o comando:

  ```bash
  npm run dev
  ```

- **Modo de Produção**
  Primeiro compile o TypeScript e depois execute o código compilado:

```bash
 npm run build
 npm start
```

## Estrutura do Projeto

### Diretório `src/`

Contém o código-fonte do projeto.

- **`index.ts`**: Arquivo principal que inicia o jogo e gerencia a lógica principal.
- **`competidor/`**: Define a lógica e os dados dos competidores.

  - **`index.ts`**: Contém a classe `Competidor` que representa um competidor no jogo e gerencia suas ações e estados.

- **`encontros/`**: Define os encontros e histórias associadas.

  - **`index.ts`**: Contém a interface `IEncontro` e as histórias associadas a cada modalidade.

- **`itens/`**: Define os itens e seus efeitos.

  - **`index.ts`**: Contém a lista de itens e seus efeitos específicos.

- **`modalidades/`**: Define as modalidades e imagens associadas.

  - **`index.ts`**: Contém a enumeração das modalidades e as imagens ASCII associadas a cada uma.

- **`utils/`**: Contém funções utilitárias para o projeto.
  - **`formatarTempo.ts`**: Função para formatar o tempo em minutos para o formato `HH:MM`.
  - **`geraNumeroAleatorio.ts`**: Função para gerar um número aleatório entre dois valores.
  - **`nomeJogo.ts`**: Define o nome do jogo com cores no terminal.
  - **`perguntar.ts`**: Função para fazer uma pergunta ao usuário e obter uma resposta boolean.
  - **`selecionarItem.ts`**: Função para permitir ao usuário selecionar um item de uma lista de itens.

### Diretório `dist/`

Contém os arquivos JavaScript compilados.

### Arquivo `config.env`

Arquivo de configuração de ambiente que contém variáveis de configuração.

### Arquivo `package.json`

Gerenciador de pacotes e scripts do projeto.

### Arquivo `tsconfig.json`

Configurações do TypeScript.

## Contribuição

```markdown
Se você deseja contribuir para o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações (`git checkout -b minha-feature`).
3. Faça as alterações necessárias e faça commit (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.
```

## Licença

```markdown
Este projeto é licenciado sob a [Licença ISC](LICENSE).
```
