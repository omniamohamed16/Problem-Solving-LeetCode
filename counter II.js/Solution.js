var createCounter = function(init) {
    val = init
    return{
   increment : function(){return val = val+1},
   decrement : function(){return val = val - 1},
   reset : function(){return val = init},}
 
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */