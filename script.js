
function myCallback(value) {
    console.log(`${value} é muito bom!`)
};

let myArr = ["maçã", "uva", "pera"];

function newForEach(array,callback) {
    for(let index = 0; index < array.length; index++) {
        callback(array[index],index,array)
    }
}

function newMap(array,callback) {
    let newarray = []
    for(let index = 0; index < array.length; index++) {
        newarray.push(callback(array[index],index,array))    
    }
    return newarray
}

function newFilter(array,callback) {
    let newarray = []
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index],index,array)) {
            newarray.push(array[index])  
        }
    }
    return newarray
}

function newFind(array,callback) {
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index],index,array)) {
            return array[index]  
        }
    }
} 

function newFindIndex(array,callback) {
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index],index,array)) {
            return index 
        }
    }
    return -1
}

function newReduce(array,callback,acumulador) {
    for(let index = 1; index < array.length; index++) {
        callback(acumulador,array[index],index,array)
    }
    return acumulador
}

function some(array,callback) {
    for(let index = 0; index < array.length; index++) {
        if(callback(array[index],index,array)) {
            return true 
        }
    }
    return false
}

function newEvery(array,callback) {
    for(let index = 0; index < array.length; index++) {
        if(!callback(array[index],index,array)) {
            return false
        }
    }
    return true

}

function newFill(array,valor,inicio,fim) {
    for(inicio; inicio < fim; inicio++) {
        array[inicio] = valor
    }
}

function newIncludes(array,elemento,posiçãoinicial) {
    for(posiçãoinicial; posiçãoinicial < array.length; posiçãoinicial++) {
        if(array[posiçãoinicial] === elemento) {
            return true
        }
    }
    return false
}

function newIndexOf(array,elemento,pontoInicial) {
    for(pontoInicial; pontoInicial < array.length; pontoInicial++) {
        if(array[pontoInicial] === elemento) {
            return pontoInicial
        }
    }
    return -1
}

function newConcat(array,...TheArgs) {
    let newarray = [...array]
    for(let i = 0; i < TheArgs.length; i++){
        if(TheArgs[i].length === undefined){
            newarray.push(TheArgs[i])
        }
        else {
            for(let j = 0; j < TheArgs[i].length; j++) {
                newarray.push(TheArgs[i][j])
            }
        }
        
    }
    return newarray
}

function newJoin(array,separador) {
    let newstr = ""
    for(let i = 0; i < array.length -1; i++) {
        newstr += array[i] + separador
    }
    newstr += array[array.length - 1]
    return newstr
}

