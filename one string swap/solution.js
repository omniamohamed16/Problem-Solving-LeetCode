var areAlmostEqual = function(s1, s2) {
    string1 = s1.split("")
    string2 = s2.split("")
    count = 0
    result =""
    // check if all elements are equal
    if(string1 === string2){return true}
    for (let i = 0; i < string1.length; i++) {
      if(string1[i] !== string2[i]){
      count++
      }
    }
    return count <= 2
    };
