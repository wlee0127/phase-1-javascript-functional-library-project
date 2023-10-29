

function myEach(collection, callback) {
    if (typeof collection === 'object') {
        debugger;
        let arr = Object.entries(collection);
        debugger;
            for (let i=0; i<=arr.length-1; i++) {
                debugger;
                callback(arr[i][1]);
            }
        return collection;
    }else {
        let arr = [...collection];
        for (let i=0; i<=arr.length-1; i++) {
            callback(arr[i]);
        }
        return collection;
    }
}

function myMap(collection, callback) {
    if (typeof collection === 'object') {
        debugger;
        let arr = Object.entries(collection);
        debugger;
            for (let i=0; i<=arr.length-1; i++) {
                debugger;
                arr[i] = callback(arr[i][1]);
            }
            return arr;
        }else {
            let arr = [...collection];
            for (let i=0; i<=arr.length-1; i++) {
                arr[i] = callback(arr[i]);
            }
            return arr;
        }
}

function myReduce(collection, callback, acc) {
    let accumulator = acc;
    let result = 0;
    let i = 0;
    let arr = Object.entries(collection);

    if (typeof acc === 'undefined') {
        accumulator = arr[0][1];
        i = 1;
    }else if (acc === undefined) {
        accumulator = collection[0][1];
        i = 1;
    } else {
        accumulator = acc;
    }
    for (; i<=arr.length-1; i++) {
        result = callback(accumulator,arr[i][1],arr);
        accumulator = result;
    }  
    return result;
}

function myFind(collection, predicate) {
    let arr = Object.entries(collection);
    let boo = undefined;
    const predicateFunc = predicate;
    for (let i=0; i<=arr.length-1; i++) {
        if(predicateFunc(arr[i][1])) {
            return arr[i][1];
        }else {
            continue;
        }
    }
    return boo;
}

function myFilter(collection, predicate) {
    let arr = Object.entries(collection);
    let resultingArray = [];
    let boo = undefined;
    const predicateFunc = predicate;
    for (let i=0; i<=arr.length-1; i++) {
        if(predicateFunc(arr[i][1])) {
            resultingArray.push(arr[i][1]);
        }else {
            continue;
        }
    }
    return resultingArray;
}

function mySize(collection) {
    let arr = Object.entries(collection);
    return arr.length;
}

function myFirst(array, n) {
    let resultLength = 0;
        if (typeof n === 'undefined') {
            resultLength = 1;
        }else if (n === undefined) {
            resultLength = 1;
        } else {
            resultLength = n;
        }
    let result = array.slice(0,resultLength);
    debugger;
        if(result.length === 1) {
            result = result[0];
        }else {}
    return result;
}

function myLast(array, n) {
    let resultLength = -1;
        if (typeof n === 'undefined') {
            resultLength = -1;
        }else if (n === undefined) {
            resultLength = -1;
        } else {
            resultLength = -1*n;
        }
    let result = array.slice(resultLength);
        if(result.length === 1) {
            result = result[0];
        }else {}
    return result;
}

function myKeys(object) {
    let resultArr = [];
        for (let key in object) {
            debugger;
            resultArr.push(key);
            debugger;
        }
    return resultArr;  
}

function myValues(object) {
    let resultArr = [];
    for (let key in object) {
        debugger;
        resultArr.push(object[key]);
        debugger;
    }
return resultArr;  
}
/*const callback = (acc, val, collection) => (acc + (val * 3));
const testArr = [1, 2, 3, 4];
//const testArr = {one: 1, two: 2, three: 3, four: 4};
myReduce(testArr, callback)*/
/*
myMap(testArr, callback)

function callback(x) {
    console.log((x * 3))
}*/

