// set 자료구조로 쉽게 표현할 수 있는 집합
// set 대신, 직접 하나하나 구현해보기 

let arrA = [1, 2, 3, 4, 3, 2];
let arrB = [1, 6, 7, 6];
// let arrA = ['tag', 'head', 'body','section', 'body', 'html', 'attribute'];
// let arrB = ['class', 'attribute', 'class', 'id', 'query'];


// 집합만들기 
function createSet(array) {
    let set = [];
    for (let elem of array) {
        if (!set.includes(elem)) {
            set.push(elem);
        }
    }
    return set;
}

// 합집합 
function sum(arrA, arrB) {
    let res = arrA.slice();
    for (let i in arrB) {
        if (!arrA.includes(arrB[i])) {
            res.push(arrB[i]);
        }
    }
    return res;
}

// 교집합
function intersect(arrA, arrB) {
    let res = [];
    for (let i in arrA) {
        for (let j in arrB) {
            if (arrA[i] === arrB[j]) {
                res.push(arrA[i]);
            }
        }
    }
    return res;
}

// 차집합
function difference(target, arr) {
    let res = target.slice();
    for (let elem of arr) {
        if (res.includes(elem)) {
            res.splice(res.indexOf(elem), 1);
        }
    }
    return res;
}


// 테스트 
let A = createSet(arrA);
let B = createSet(arrB);

let result = []; // 집합 연산 결과값 담을 배열
result.push(sum(A, B));
result.push(intersect(A, B));
result.push(difference(A, B));

// console.log(result);
