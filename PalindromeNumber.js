

function isPalindromeNumber(number)
{
    // var s = String(number);
    // var sNew ;
    // // var sn = String(number);
    //
    //     for (var i = 0; i < s.length / 2 ; i++) {
    //         var c = s.charAt(s.length - 1 -i);
    //      sNew = s.replace(s.charAt(s.length -1 -i),s.charAt(i) );
    //       sNew = sNew.replace(s.charAt(i),c);
    //     }
    //
    //     return parseInt(sNew)=== parseInt( number);



    var str = number.toString();


    for(var i = 0 ; i < str.length ; i++)
    {
        if(str.charAt(i) !==str.charAt(str.length-1-i))
        {
            return false;
        }
    }
    return true;

}

console.log(isPalindromeNumber(13434));