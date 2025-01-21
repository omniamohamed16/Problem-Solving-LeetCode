var once = function(fn) {
    calls=1
    result=[];
    return function(...args){
     newcall=  calls++
      if (newcall>1)  {return undefined} else {return fn(...args)} 
    }
};


/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
