// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      ES5 MAP CALLBACK

// --------------------------------------------------------------

function double(arr){
    return arr.map(function(val){
        return val*2
    })
}

// ----------------------------------------------------------------------------------------------------------------

//      ES2015 ARROW FUNCTIONS SHORTHAND

// --------------------------------------------------------------

const dubArrow=(arr)=>arr.map((val)=>val*2);

// ----------------------------------------------------------------------------------------------------------------

function squareAndFindEvens(numArr){
    var squares=numArr.map(function(num){
        return num**2;
    })
    var evens=squares.filter(function(square){
        return square%2===0;
    })
    return evens;
}

const safeArrow=(numArr)=>numArr.map((num)=>num**2).filter((square)=>square%2===0);