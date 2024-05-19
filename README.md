BACKEND APP GYM FITNESS


Tecnologia usada para o desenvolvimento.

# NODE JS
# Express
# Nodemon
# Prisma ORM

#EXPRESS
 1 - O Express, ou Express.js, é um framework web minimalista e flexível para Node.js.
   Ele é usado para construir aplicações web e APIs, simplificando o desenvolvimento com um conjunto de funcionalidades robustas. 
   Express facilita o gerenciamento de rotas, manipulação de requisições e respostas HTTP, e integração com vários motores de template.
   É amplamente utilizado devido à sua simplicidade, desempenho e grande comunidade de desenvolvedores.

#NODEMON
2 - O Nodemon é uma ferramenta que ajuda no desenvolvimento de aplicações Node.js ao monitorar 
     automaticamente as mudanças nos arquivos do projeto e reiniciar o servidor sempre que essas mudanças são detectadas. 
     Isso elimina a necessidade de reiniciar manualmente o servidor a cada modificação, 
    acelerando o fluxo de trabalho e aumentando a produtividade dos desenvolvedores. Para usá-lo, 
    basta instalar o Nodemon globalmente ou como uma dependência de desenvolvimento e executá-lo em vez do comando node tradicional. 
    
#PRISMA ORM
3 - O Prisma é um ORM (Object-Relational Mapping) de próxima geração para Node.js e TypeScript. Ele facilita a interação com bancos de dados, permitindo aos desenvolvedores escrever consultas em um estilo mais intuitivo e de alto nível. Prisma oferece várias vantagens:

Modelagem de Dados: Utiliza um arquivo de esquema (schema.prisma) para definir modelos de dados, que são traduzidos automaticamente em tabelas de banco de dados.
Consultas Simples: Permite realizar operações de CRUD (Create, Read, Update, Delete) de maneira simples e eficiente com um cliente gerado automaticamente.
Tipos Seguros: Oferece suporte a TypeScript, garantindo a segurança de tipos e reduzindo erros comuns durante o desenvolvimento.
Migrations: Facilita a migração do banco de dados, sincronizando mudanças no esquema de dados com o banco de dados subjacente.
Prisma é compatível com vários bancos de dados, incluindo PostgreSQL, MySQL, SQLite, SQL Server e MongoDB (em pré-visualização). É uma ferramenta poderosa para desenvolvedores que desejam uma abordagem moderna e produtiva para gerenciar bancos de dados em suas aplicações Node.js.


Foi utilizado uma estrutura parecida com o MVC (Model, View e Controller) porém quando usamos o prisma eliminamos em parte a necessidade do model, já que temos o Prisma Client que faz essa comunicação com o arquivo schema.prisma onde estão nossas models ou tabelas.
 Também eliminamos nessa parte a utilização da View já que a parte de frontend fica com o aplicativo.

# GUIA DE UTILIZAÇÃO

- Ao fazer o git clone será necessário acessar a pagina da aplicação e no terminal executar o NPM INSTALL para instalar todas as dependencias.
Na raiz do projeto será necessário criar o arquivo .env pegar os dados que estão dentro de .env_ e colocar no .env para que a aplicação rode.

# REQUISITOS
- É necessário possuir o node instalado e também ter um servidor HTTP na maquina como o XAMPP OU WAMPSERVER para iniciar o servidor local.


Após realizar esses passos será necessário sincronizar o Prisma com o banco de dados.

executar o seguinte codigo no terminal npx prisma migrate dev.


Observação: É necessário que o seu servidor local esteja startado!



# EXECUTAR O PROJETO

- Para executar a aplicação após concluir os passos anteriores basta no terminal na raiz da aplicação executar o seuinte comando: npm run dev 

