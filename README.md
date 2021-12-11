# API-Bolao-Brasileirao

API para jogos de apostas do campeonato brasileiro série A.

## Requisitos:

- Fluxo de gestão do usuário
- Criação do campeonato, contendo todas as rodadas, partidas e times.
- Fluxo de atualização de resultados das partidas já finalizadas. Este fluxo, assim como o anterior, poderá ser pelo usuário, através da comunicação com a API do bolão, ou de forma automática, utilizando uma API terceira. A modalidade de uso fica a seu critério decidir.
- Fluxo de apostas (criação, visualização e edição) dos participantes do bolão. Atenção: Apostas deverão ser aceitas somente até o instante do início do primeiro jogo da Rodada
- Visualização das apostas. Um usuário pode apenas ver as próprias apostas.
- Ranking dos apostadores

## Instalação

```bash
git clone https://github.com/Caldeira/API-Bolao-Brasileirao.git
cd API-Bolao-Brasileirao/
cp .env.example .env
# neste ponto, sugere-se preencher seu novo arquivo .env com as configurações do seu projeto
npm install
```

Atenção ao quarto comando da lista de comandos acima. Nele, você está criando seu arquivo de variáveis de ambiente. Preencha todas as variáveis com os dados adequados. Para os campos de `secret`, sugiro:

- o campo `SECRET`, preencha com uma chave aleatória bem grande. Sugiro uma chave com 256 caracteres, gerada em sites como [este](https://passwordsgenerator.net/).
- o campo `AUTH_SECRET`, preencha com uma chave aleatória. Sugiro uma chave com 64 caracteres, gerada da mesma forma que a chave anterior.
  > Muita atenção com este arquivo, pois ele não deverá ser versionado, pois ele possui informações sensíveis do projeto.

### build

Comando para criação do bundle de produção. Este pacote será produzido na pasta `/dist`, na raiz deste projeto.

```bash
npm run build
```

### start

Comando utilizado para iniciar o projeto resultante do `build`. Ou seja, este deverá executar a aplicação em modo produção. **Importante notar que ele somente executa o bundle produzido pelo build. A atualização deste pacote requer que o comando de build seja executado.**

```bash
npm start
```

### dev

Comando utilizado para iniciar o projeto em modo de desenvolvimento

```bash
npm run dev
```

### test

Executa os testes de unidade do projeto. Existem três variações do comando, conforme descritas abaixo:

```bash
# Executa em modo single run, sem análise de cobertura
npm test

# executa em modo "live", acompanhando as mudanças do código. Muito útil em modo de desenvolvimento
npm run test:watch

# executa em modo "cobertura". Executa apenas uma vez, e gera um relatório de cobertura em testes de unidade do seu projeto
npm run test:coverage
```

### typeorm

Este comando é um atalho para o typeorm, que está instalado localmente, neste projeto. Como estamos usando o typeorm em projeto typescript, é necessário criar uma configuração de ambiente, conforme descrito [aqui](https://stackoverflow.com/a/61119284/3135441). Todos os comandos relativos ao typeorm deverão ser chamados com este atalho, e os modificadores do typeorm precedidos com `--`.
Ex.:

```bash
npm run typeorm -- migration:generate -n CreateManyCampeonatosToManyUsuarios
npm run typeorm -- migration:run
```

## Pacotes

Os principais pacotes utilizados nesse projeto são:

- typescript
- axios
- dotenv
- jsonwebtoken
- typeorm
- typedi

A tecnologia de armazenamento de dados utilizado será o mysql ou mariadb.

## Estrutura do projeto

Este projeto foi estruturado para trabalhar com as camadas `routers`, `controllers`, `services`, `clients`, `repositories` e `models`. Cada uma destas estruturas conta com uma pasta, dentro de `src`. As comunicações destas camadas são feitas via interfaces, descritas na pasta de `@types`, nas subpastas específicas para cada estrutura.

## License

[MIT](https://choosealicense.com/licenses/mit/)
