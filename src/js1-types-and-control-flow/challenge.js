/* This challenge is designed to test you knowledge of Types and Control Flow (If and Switch Statements) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that programmatically concatenates two strings together with a space in between them.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
const firstName = "John";
const lastName = "Smith";

export const createFullName = () => {
<<<<<<< Updated upstream
    return firstName + " " + lastName;
=======
  // Write your code here
  const result=firstName+" "+lastName;
  return result;
>>>>>>> Stashed changes
};

/**
 * A function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
const largeNumber1 = 100;
const largeNumber2 = 200;

export const findLargestNumber = () => {
<<<<<<< Updated upstream
    if (largeNumber1 > largeNumber2) {
        return largeNumber1;
    } else {
        return largeNumber2;
    }
=======
  // Write your code here
  if (largeNumber1>=largeNumber2)
  return largeNumber1;
  else if(largeNumber2>largeNumber1)
  return largeNumber2;
>>>>>>> Stashed changes
};

/**
 * A function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */
const addNumber1 = 12;
const addNumber2 = 24;

export const addNumbers = () => {
<<<<<<< Updated upstream
    return addNumber1 + addNumber2;
=======
  // Write your code here
  return addNumber1+addNumber2;
>>>>>>> Stashed changes
};

/* Intermediate Challenges */

/**
 * A function to programmatically find the length of a string.
 * This means if the string was different it would still find the length.
 *
 * @returns {number} the length of the string
 */
const password = "thisIsMyVeryLongPassword123456789";

export const findLengthOfPassword = () => {
<<<<<<< Updated upstream
    let passwordLength = password.length;
    return passwordLength;
=======
  // Write your code here
  return password.length;
>>>>>>> Stashed changes
};

/**
 * A function that programmatically tells you what the type of the variable is.
 * This variable was still one of the accepted types it would still output a string.
 * If the variable is a string output "This is a string"
 * If the variable is a number output "This is a number"
 * If the variable is a boolean output "This is a boolean"
 * If the variable is not any of those types output "I don't know what this thing is"
 *
 * @returns {string} This is a string
 */
const thing = "I am a thing";

export const findType = () => {
<<<<<<< Updated upstream
    if (
        typeof thing === "string" ||
        typeof thing === "number" ||
        typeof thing === "boolean"
    ) {
        return `This is a ${typeof thing}`;
    } else {
        return "I don't know what this thing is";
    }
    // const thingType = typeof thing;
    //  if (thingType === "string") {
    //      return "This is a string";
    //  } else if (thingType === "number") {
    //      return "This is a number";
    //  } else if (thingType === "boolean") {
    //      return "This is a boolean";
    //  } else {
    //      return "I don't know what this thing is";
    //  }
=======
  // Write your code here
  // return typeof thing;
  if(typeof thing!="string" && typeof thing!="number"&& typeof thing!="boolean"){
    return "I don't know what this thing is"
  }
  else
  return `This is a ${typeof thing}`;
>>>>>>> Stashed changes
};

/**
 * A function to programmatically decide if a name is suitable for a name tag.
 * This means it must still work even if the name is different and return something if name provided is incorrect.
 * Name tag rules are: The name must be less than or equal to 8 characters and begin with a capital letter.
 *
 * @returns {boolean} true || false
 */
const nameTagOption = "Timothy";

export const getIsValidOnNameTag = () => {
<<<<<<< Updated upstream
    //    return nameTagOption.length <= 8 && nameTagOption.toUpperCase ? true : false;
    const firstLetterOfName = nameTagOption.substring(0, 1);
    const isValidName =
        nameTagOption.length <= 8 &&
        firstLetterOfName === firstLetterOfName.toUpperCase();

    return isValidName;
    // console.log(firstLetterOfName === firstLetterOfName.toUpperCase());

    // if (nameTagOption.length <= 8 && nameTagOption.toUpperCase) {
    //     return true;
    // } else {
    //     return false;
    // }
=======
  // Write your code here
  let reg=new RegExp('^[A-Z]{1}[A-z]{0,7}');
  let bool= nameTagOption.match(reg)? true:false
  return bool;
>>>>>>> Stashed changes
};

/* Advanced Challenges */

/**
 * A function that programmatically converts a number stored as a string to a number type.
 * This means if the string was different it would still convert it to a number.
 *
 * @returns {number} The number converted from the string "32.87" -> 32.87
 */
const stringToConvert = "14.45";

export const convertStringToNumber = () => {
<<<<<<< Updated upstream
    return Number(stringToConvert);
    // retur parseFloat(stringToConvert)
=======
  // Write your code here
  let num=parseFloat(stringToConvert);
  return num;
>>>>>>> Stashed changes
};

/**
 * A function that uses regex to programmatically test if a string contains uppercase letters.
 * This means if the string was different it would still accurately return true or false.
 *
 * !!NOTE!! You should use regex to solve this problem!
 *
 * @returns {boolean} true || false
 */
const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

export const getHasUppercaseLetters = () => {
<<<<<<< Updated upstream
    let upperCaseLetters = stringWithUppercaseLetters.match(/([A-Z])/);
    // return /[A-Z]/.test(stringWithUppercaseLetters);
    if (upperCaseLetters) {
        return true;
    } else {
        return false;
    }
=======
  // Write your code here
  let regex=new RegExp('[A-Z]');
  let bool=stringWithUppercaseLetters.match(regex)?true:false;
  return bool;
>>>>>>> Stashed changes
};

/* Expert Challenge */

/**
 * A function that programmatically converts a string written in PascalCase to a string written in snake_case (lowercase with underscores).
 * This means if the PascalCase string changes then the function should still convert it.
 *
 * @returns {string} i_want_to_be_snake_case
 */
const pascalCaseVariableName = "IWantToBeSnakeCase";

export const convertPascalCaseToSnakeCase = () => {
<<<<<<< Updated upstream
    let splitString = pascalCaseVariableName.split(/(?=[A-Z])/);
    console.log(splitString);
    return splitString.join("_").toLowerCase();

    // return pascalCaseVariableName
    //     .match(/[A-Z][a-z]*/g)
    //     .join("_")
    //     .toLowerCase();
=======
  // Write your code here

  return pascalCaseVariableName.match(/[A-Z][a-z]*/g).join("_").toLowerCase();
  // let reg=new RegExp("[A-Z]");
  // let match;
  // let arr=[];
  // let lower;
  // // return match;
  // // return arr;
  // for(let i=0; i<pascalCaseVariableName.length;i++){
    
  //   match=pascalCaseVariableName[i].match(reg);
  //   if(match){
  //     // match=match.toLowerCase();
  //     match.replace("a");
  //     arr.push(match);
  //   }
    
  //   // arr=arr[i].replace(arr[i].toLowerCase());
  // }
  // return arr;
>>>>>>> Stashed changes
};
