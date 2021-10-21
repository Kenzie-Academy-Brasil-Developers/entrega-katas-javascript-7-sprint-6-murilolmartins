# Katas de JavasScript 7 - Callbacks

Para iniciar, faça o clone deste repositório.

Nesta entrega, você irá exercitar a criação e o uso das funções callback, e irá se familiarizar com o modo no qual os métodos incorporados do JavaScript funcionam nos bastidores.

O JavaScript fornece vários "métodos de iteração" baseados no mesmo tipo de padrão de callback que você viu no caso do forEach() na aula sobre Funções Callback. Essencialmente, eles são loops prontos, com alguns comportamentos adicionados para ter um pouco de variação do padrão.

Há várias formas de recriar as funções. Como o foco é a lógica, use esta para facilitar 
nos testes:

```js
function nomeDaFuncao(array, callback) {
    // conteúdo da função
}
```

Não se preocupe caso tenha visto formas de criar com _prototype_ ;) Depois você poderá voltar e refazer. 

## Sua Tarefa [36 pontos]

Sua tarefa será reproduzir o comportamento desses métodos de Array com suas funções callback, incluindo os parametros opcionais e _sem usar as versões incorporadas do JavaScript_:

1. [forEach()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
3. [map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. [filter()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro) 
4. [find()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
5. [findIndex()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
6. [reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
7. [some()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
8. [every()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
9. [fill()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
10. [includes()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/contains)
11. [indexOf()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
12. [concat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
13. [join()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

### EXTRA [6 pontos]

1. [slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
2. [flat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
3. [flatMap()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

Dê os seguintes nomes a cada uma das funções: newForEach, newMap, newFilter, newFind, newFindIndex, newReduce, newSome, newEvery, newFill, newIncludes, newIndexOf, newConcat, newJoin. Sua implementação de cada um dos métodos de iteração acima deve resultar nos _mesmos argumentos e valores de retorno_.

IMPORTANTE: Para propósitos de teste/avaliação, é importante que você dê o nome do repositório de 'katas7', e que o nome das funções seja igual ao padrão mencionado acima.

## Por exemplo:

```js
function myCallback(value) {
    return `${value} é muito bom!`
};

let myArr = ["maçã", "uva", "pera"];

let retornoMap = myArr.map(myCallback);
let retornoNewMap = newMap(myArr, myCallback);

retornoMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
retornoNewMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
myArr // Deve retornar ["maçã", "uva", "pera"];
```

__Note que possuem o mesmo retorno e o array original não foi modificado, conforme a documentação do Array.prototype.map()__.


# Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/katas7) e envie o link do seu repositório nos comentários. Após ser a correção, seu projeto deverá ficar privado.
