//// [enumExtend.ts]
enum A {
    a, b, c
}

enum B {
    ...A,
    d, e, f
}

const Aa = A.a;
const Ab = A.b;
const Ac = A.c;
const Ba = B.a;
const Bb = B.b;
const Bc = B.c;
const Bd = B.d;
const Be = B.e;
const Bf = B.f;


//// [enumExtend.js]
var A;
(function (A) {
    A[A["a"] = 0] = "a";
    A[A["b"] = 1] = "b";
    A[A["c"] = 2] = "c";
})(A || (A = {}));
var B;
(function (B) {
    B[B["A"] = 0] = "A";
    B[B["d"] = 1] = "d";
    B[B["e"] = 2] = "e";
    B[B["f"] = 3] = "f";
})(B || (B = {}));
var Aa = A.a;
var Ab = A.b;
var Ac = A.c;
var Ba = B.a;
var Bb = B.b;
var Bc = B.c;
var Bd = B.d;
var Be = B.e;
var Bf = B.f;
