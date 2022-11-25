//Ej1: Try creating one of each type of comment.
// Comentario en una sola linea

/* Comentario 
    en
    varias
    lineas
*/

//Ej2: Use the var keyword to create a variable called myName.
    var myName;

//Ej3: Assign the value 7 to variable a.
    var a;
    a = 7;

//Ej4: Assign the contents of a to variable b.
    var a;
    a = 7;
    var b;

    b = a;

//Ej5: Define a variable a with var and initialize it to a value of 9.
    var a = 9;

//Ej6: Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.
    var myFirstName = "Juan";
    var myLastName = "Romero";

//Ej7: Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.
    // Only change code below this line
    var a = 5;
    var b = 10;
    var c = "I am a";
    // Only change code above this line
    a = a + 1;
    b = b + 5;
    c = c + " String!";

//Ej8: Modify the existing declarations and assignments so their names use camelCase. Do not create any new variables.
    // Variable declarations
    var studlyCapVar;
    var properCamelCase;
    var titleCaseOver;

    // Variable assignments
    studlyCapVar = 10;
    properCamelCase = "A String";
    titleCaseOver = 9000;

//Ej9: Update the code so it only uses the let keyword.
    let catName = "Oliver";
    let catSound = "Meow!";

/*Ej10: Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. 
        Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables.*/
    const FCC = "freeCodeCamp"; // Change this line
    let fact = "is cool!"; // Change this line
    fact = "is awesome!";
    console.log(FCC, fact); // Change this line

//Ej11: Change the 0 so that sum will equal 20.
    const sum = 10 + 10;

//Ej12: Change the 0 so the difference is 12.
    const difference = 45 - 33;

//Ej13: Change the 0 so that product will equal 80.
    const product = 8 * 10;

//Ej14: Change the 0 so that the quotient is equal to 2.
    const quotient = 66 / 33;

//Ej15: Change the code to use the ++ operator on myVar.
    let myVar = 87;
    // Only change code below this line
    myVar++;

//Ej16: Change the code to use the -- operator on myVar. 
    //Acá le cambié el nombre a la variable para que no tire conflicto con la de arriba
    let myVar2 = 11;
    // Only change code below this line
    myVar2--;

//Ej17: Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
    const ourDecimal = 5.7;
    // Only change code below this line
    const myDecimal = 7.5;

//Ej18: Change the 0.0 so that product will equal 5.0.
    const product2 = 2.0 * 2.5;

//Ej19: Change the 0.0 so that quotient will equal to 2.2.
    const quotient2 = 4.4 / 2.0; // Change this line

//Ej20: Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
    const remainder = 11 % 3;

//Ej21: Convert the assignments for a, b, and c to use the += operator.
    let a = 3;
    let b = 17;
    let c = 12;
    // Only change code below this line
    a += 12;
    b += 9;
    c += 7;

//Ej22: Convert the assignments for a, b, and c to use the -= operator.
    let a = 11;
    let b = 9;
    let c = 3;
    // Only change code below this line
    a -= 6;
    b -= 15;
    c -= 1;

//Ej23: Convert the assignments for a, b, and c to use the *= operator.
    let a = 5;
    let b = 12;
    let c = 4.6;
    // Only change code below this line
    a *= 5;
    b *= 3;
    c *= 10;

//Ej24: Convert the assignments for a, b, and c to use the /= operator.
    let a = 48;
    let b = 108;
    let c = 33;
    // Only change code below this line
    a /= 12;
    b /= 4;
    c /= 11;

//Ej25: Use backslashes to assign a string to the myStr variable so that if you were to print it to the console.
    const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/*Ej26: Change the provided string to a string with single quotes at the beginning and end and no escape characters.
        Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.*/
    const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

/*Ej27: Assign the following three lines of text into the single variable myStr using escape sequences.
        You will need to use escape sequences to insert special characters correctly. 
        You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.*/
    const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//Ej28: Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.
    const myStr4 = "This is the start."+" This is the end."; // Change this line

/*Ej29: Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. 
        Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. 
        Start by assigning the first string to myStr, then add on the second string.*/
    let myStr5 = "This is the first sentence. ";
    myStr5 += "This is the second sentence.";

//Ej30: Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!
    // Only change code below this line
    const myName = "Juan Romero";
    const myStr6 = "My name is " +myName+ " and I am well";

//Ej31: Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
    // Change code below this line
    let someAdjective = "amazing";
    let myStr7 = "Learning to code is ";
    myStr7 += someAdjective;

//Ej32: Use the .length property to set lastNameLength to the number of characters in lastName.
    // Setup
    let lastNameLength = 0;
    const lastName = "Lovelace";
    // Only change code below this line
    lastNameLength = lastName.length;
    console.log(lastNameLength);

//Ej33: Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
    // Setup
    let firstLetterOfLastName = "";
    const lastName2 = "Lovelace";

    // Only change code below this line
    firstLetterOfLastName = lastName2[0]; // Change this line

//Ej34: Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.
    // Setup
    let myStr8 = "Jello World";
    // Only change code below this line
    myStr8 = "Hello World"; // Change this line
    // Only change code above this line

//Ej35: Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.
    // Setup
    const lastName3 = "Lovelace";
    // Only change code below this line
    const thirdLetterOfLastName = lastName3[2]; // Change this line

//Ej36: Use bracket notation to find the last character in the lastName variable.
    // Setup
    const lastName4 = "Lovelace";
    // Only change code below this line
    const lastLetterOfLastName = lastName4[lastName4.length-1]; // Change this line

//Ej37: Use bracket notation to find the second-to-last character in the lastName string.
    // Setup
    const lastName5 = "Lovelace";
    // Only change code below this line
    const secondToLastLetterOfLastName = lastName5[lastName5.length - 2]; // Change this line

/*Ej38: In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
        You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. 
        You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.
        You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.*/
    const myNoun = "dog";
    const myAdjective = "big";
    const myVerb = "ran";
    const myAdverb = "quickly";
    // Only change code below this line
    const wordBlanks = "I saw a " + myNoun + " and it was so " + myAdjective + " that scared me and I start to " + myVerb + " very " +myAdverb; // Change this line
    console.log(wordBlanks)
    // Only change code above this line

//Ej39: Modify the new array myArray so that it contains both a string and a number (in that order).
    // Only change code below this line
    const myArray = ["hello", 7];

//Ej40: Create a nested array called myArray.
    // Only change code below this line
    const myArray2 = [["Messi", 10], ["Cristiano", 7]];

