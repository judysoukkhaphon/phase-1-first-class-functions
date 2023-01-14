function receivesAFunction (func) {
   func();
}

function returnsANamedFunction() {
    const namedFunction = function() {
        
    }
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function(){

    }
}