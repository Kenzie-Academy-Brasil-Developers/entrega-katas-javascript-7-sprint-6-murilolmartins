# Refazendo Katas 7 com Prototype

Na entrega 18 tivemos que recriar alguns métodos, e lá recomendamos usar uma sintaxe específica para facilitar nos testes. 

E a forma de nos redimirmos por ter te imposto uma forma padrão de fazer uma entrega, é te dando um desafio muito interessante: refazer o Katas 7 utilizando o Prototype.

Mas o que tem de interessante no prototype?

```js
Array.prototype.meuNovoMetodo = function() {
    return this // Este "this" refere-se ao array no qual está 
                // sendo executado o método. Portanto, ele tem 
                // as propriedades this.length, this[0], this[1]...this[n]
};

let myArr = ["maçã", "uva", "pera"];
let myGrades = [10, 10, 10, 10, 10];

myArr.meuNovoMetodo() // Deve retornar ["maçã", "uva", "pera"];
myGrades.meuNovoMetodo() // Deve retornar [10, 10, 10, 10, 10];
```

Percebe? No exemplo acima acabou de ser criado um novo __método de Array__ (pelo menos no seu código).

IMPORTANTE: No exemplo acima eu criei o método __Array.prototype.meuNovoMetodo()__, então ele é acessível por TODAS as instâncias de Array. Note que tenho dois arrays diferentes e o meu método é acessível nos dois.

O que você fez antes foi criar funções que se comportam como os métodos de Array.

Agora o desafio é, de fato, criar o seu próprio método de array. Seu Array.prototype.newForEach, Array.prototype.newFill, e assim por diante.

```js
function myCallback(value) {
    return `${value} é muito bom!`
}

let myArr = ["maçã", "uva", "pera"];

let retornoMap = myArr.map(myCallback);
let retornoNewMap = myArr.newMap(myCallback);

retornoMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
retornoNewMap // Deve retornar ["maçã é muito bom!", "uva é muito bom!", "pera é muito bom!"];
myArr // Deve retornar ["maçã", "uva", "pera"];
```

__Note que possuem o mesmo retorno e o array original não foi modificado, conforme a documentação do Array.prototype.map()__


