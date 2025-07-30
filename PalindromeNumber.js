

function isPalindromeNumber(number)
{



    var str = number.toString();


    for(var i = 0 ; i <  str.length / 2  ; i++)
    {
        if(str.charAt(i) !==str.charAt(str.length-1-i))
        {
            return false;
        }
    }
    return true;

}

console.log(isPalindromeNumber(121));