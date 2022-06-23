# Estrutura Básica

###### 1. História e estrutura básica

###### 2. Semântica

###### 3. Principais Elementos

### 1. História e estrutura básica

HTMP - criado em 1991;

Entendendo um elemento HTML.

Tudo que está dentro de um arquivo HTML é um elemento.

![image-20220622195303528](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220622195303528.png)

Temos uma tag de abertura "<"

Então dizemos que tipo de elemento é esse, podendo ter ou não algum tributo. Depois temos o conteúdo, para depois fechar o elemento.

O elemento html é bem pequeno.

A primeira linha do documento deve ser o -<-!DOCTYPE html>

Apesar de parecer um elemento HTML, ele apenas diz ao navegador que o documento é um HTML5. Os elementos HTML vêm logo abaixo.



-<-html>

é a raiz. todos os demais elementos devem estar dentro dela.

Nela nós informamos ao navegador qual é o idioma desse documento, através do atributo lang. Para o portugues usamos pt-BR.

-<-head>

Essa tag contém os elementos que serão lidos pelo navegador, como os metadados. e o título da pagina com a tag title.

-<-body>

é onde colocamos todo o conteúdo visível ao usuário: Textos, imagens, vídeos.



### 2. Semântica

Elemento padrão do HTML era a DIV, onde era construído o conteúdo.

A semântica permite descrever mais precisamente o nosso conteúdo, com vários elementos para ressignificar as divs.

**-<-section>** 

representa uma seção genérica quando não houver outro elemento específico para isso.

**-<-header>**

Cabeçalho da página ou de uma seção da página. Normalmente contém logotipos, menus e campos de busca.

**-<-article>**

Representa um conteúdo independente e de maior relevância dentro da página.

**-<-aside>**

Seleção que engloba conteúdos ou parte dele, pois ele é aceito dentro de vários elementos, como article, section e até mesmo body.

**-<-h1>-<-h6>**

São os hashtags, marcam a importância dos títulos.



#### Prática

Adicionar uma seção de post e um post, além de cabeçalho do site pessoal.



#### Como usar textos e links em HTML

Além dos -<-h1>, pode-se usar -<-p> e -<-/p> para textos maiores e mais densos, como se fosse um parágrafo.

Suporta texto, mas não apenas isso, podemos colocar imagens e vídeos também.



#### Tags para links

Outro tag importante é o -<-a> -<-/a>

-<-a href="linkedin.com bla bla bla"> pode apontar para links de sites e até email. 

Para fazer referência a um e-mail tem que colocar uma referência, mailto:

--<-a href="linkedin.com/in/bernardoutsch">Linkedin</a>

--<-a href="mailto:bernardoutsch@gmail.com">e-mail</a>

Outra forma é usar o target

--<-a target="_blank">Link</a>

Vai mostrar como este link vai ser aberto. Ou seja, usando esta marcação _blank indica que a página será aberta em uma nova guia em branco.



#### Prática

Colocar um texto na postagem e alguns links dentro dela.

Colocado como texto a música Envolver da Anitta, incluindo um link para a letra da música no site do Vagalume, abrindo em uma nova guia em branco.

Colocado o contato no rodapé com com link escrito "Fale conosco", para direcionar ao cliente de e-mail.



#### Adicionando imagem ao site

Elemento -<-img>

Tem tags source que é digitada como src e alt

Source é obrigatório. É o caminho de onde está a foto, pode ser no site ou em outro site.

Alt é altamente recomendado para aumentar a acessibilidade. Mostra a descrição da foto explicando para os usuários o que aquilo significa.

##### Prática

Adicionado uma imagem ao site de um Pickup de DJ. Só que ficou muito grande e até essa parte do curso não foi ensinado como dimensionar essa foto.



#### Como organizar listas com o HTML

-<-ul> representa itens onde a ordem dos itens não é importante

-<-ol> representa itens onde a ordem dos itens é importante

##### Prática

Colocar uma lista de contatos, que já havia sido colocada, mas agora está em formado de lista ul.



