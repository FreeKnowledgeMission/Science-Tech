// What is a regex? A regular expression allows you to search and/or replace numbers, strings, 
//Examples of when would you use regex? Search/replace, creating usernames, user input. 

/*
//Example 1 - Easy - find a string
let exampleString = "Hello, Universe!";
let exampleRegex = /Hello,/;
let output = exampleRegex.test(exampleString); 
console.log(output)


//Example 2 - Medium - Check for conditions
// Check password for at least 5 characters and at least one number

let secret = "abcefg2";
let secretCheck = /(\w{5})(\d)/;
let output = secretCheck.test(secret); 
console.log(output);


\w      word character i.e. letters, digit, underscore
{5}     number of characters i.e. at least 3
()      and
\d      digit i.e. 0-9

//Example 3 - Difficult - Restrict Possible Usernames
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
let output = userCheck.test(username);
console.log(output);
/*

^ - beginning of pattern
[a-z] - first character is a letter
[0-9][0-9]+ - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input
*/