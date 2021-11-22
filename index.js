function receivesAFunction(callback) {
    callback();
}

function callback() {
    return "hi";
}

function returnsANamedFunction() {
    return function aNamedFunction() {
        return "hi";
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        return "hi";
    };
}