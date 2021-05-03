function ex1(count, value) {
    let newArray = [];
    for (let i = 0; i < count; i++) {
        newArray.push(value);
    }
    return newArray;
}

function ex2(values) {
    let newArray = [];
    for (let i = values.length; i > 0; i--) {
        newArray.push(values[i - 1]);
    }
    return newArray;
}

function ex3(values) {
    let newArray = [];
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== false
            && values[i] !== undefined
            && values[i] !== ""
            && values[i] !== 0
            && values[i] !== null) {
            newArray.push(values[i])
        }
    }
    return newArray;
}

function ex4(values) {
    const newObj = {};
    for (let i = 0; i < values.length; i++) {
        newObj[values[i][0]] = values[i][1]
    }
    return newObj;
}

function ex5(arrayValues, value1, value2) {
    let newArray = [];
    for (let i = 0; i < arrayValues.length; i++) {
        if (arrayValues[i] !== value1
            && arrayValues[i] !== value2) {
            newArray.push(arrayValues[i])
        }
    }
    return newArray;
}

function ex6(values) {
    let newArray = [];
    for (let i = 0; i < values.length; i++) {
        let isequal = false
        for (let j = 0; j < newArray.length; j++) {
            if (newArray[j] === values[i]) {
                isequal = true
            }
        }
        if (!isequal) {
            newArray.push(values[i])

        }
    }
    return newArray;
}

function ex7(value1, value2) {
    if (value1.length !== value2.length) {
        return false
    }
    for (let i = 0; i < value1.length; i++) {
        if (value1[i] !== value2[i]) {
            return false

        }
    }
    return true;
}

function ex9(values, quantity) {
    let count = 1;
    let firstArray = [];
    let auxArray = [];

    for (let i = 0; i < values.length; i++) {
        if (count === quantity) {
            firstArray.push(auxArray);
            auxArray = [];
            auxArray.push(values[i]);
            count = 1;
        } else {
            auxArray.push(values[i]);
            count++;
        }

    }

    return firstArray;
}

function ex10(values, values2) {
    let newArray = [];
    for (let i = 0; i < values.length; i++) {
        for(let j=0; j<values2.length; j++){
            if(values[i]===values2[j]){
                newArray.push(values[i]);
            }
        }
    }
    return newArray;
}


console.log(ex1(3, 'a'));
console.log(ex2([1,2,3,4]));
console.log(ex3([1,2, '', undefined]));
console.log(ex4([["c",2],["d",4]]));
console.log(ex5([5,4,3,2,5],5,3));
console.log(ex6([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]));
console.log(ex7([1, 2, 3, 4], [1, 2, 3, 4, 5,]));
console.log(ex9([1, 2, 3, 4, 5], 2));
console.log(ex10([6, 8], [8, 9]));


