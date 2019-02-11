/* R-1.8 Write a short Java method that counts the number of vowels in a given character
string. */



const vowels = (s) => {
    let count = 0;
    for(let i = 0; i < s.length; i++) {
        switch(s.charAt(i)) {
            case 'a': case 'A': 
            case 'e': case 'E':
            case 'i': case 'o':
            case 'O': case 'u':
            case 'U': 
            count++;
                break;
        }
    }
    return count;
}

console.log(vowels("Fernando"));