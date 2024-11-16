function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}


let year = prompt("Entrez une année pour vérifier si elle est bissextile : ");
year = parseInt(year);  
if (isLeapYear(year)) {
    alert(year + " est une année bissextile.");
} else {
    alert(year + " n'est pas une année bissextile.");
}
function ticketPrice(age) {
    if (age <= 12) {
        return 10;  
    } else if (age >= 13 && age <= 17) {
        return 15;  
    } else {
        return 20;  
    }
}

 let age = prompt("Entrez votre âge pour connaître le prix du billet de cinéma : ");
age = parseInt(age);  
let price = ticketPrice(age);
alert("Le prix du billet est de " + price + " $.");





function weatherAdvice(temperature, isRaining) {
    if (temperature < 10) {
        if (isRaining) {
            return "Il fait froid et il pleut. Portez un manteau chaud et un parapluie.";
        } else {
            return "Il fait froid, portez un manteau chaud.";
        }
    } else if (temperature >= 10 && temperature <= 20) {
        if (isRaining) {
            return "Il fait frais et il pleut. Portez une veste légère et un parapluie.";
        } else {
            return "Il fait frais, portez une veste légère.";
        }
    } else {
        if (isRaining) {
            return "Il fait chaud mais il pleut. Portez des vêtements légers et un parapluie.";
        } else {
            return "Il fait chaud, portez des vêtements légers.";
        }
    }
}

let temperature = prompt("Entrez la température actuelle (en °C) : ");
temperature = parseInt(temperature);  
let isRaining = prompt("Est-ce qu'il pleut ? (oui/non) ").toLowerCase() === "oui";
let advice = weatherAdvice(temperature, isRaining);
alert(advice);


function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n = prompt("Entrez un nombre n pour obtenir le n-ième nombre de Fibonacci : ");
n = parseInt(n); 
alert("Le " + n + "-ème nombre de Fibonacci est : " + fibonacci(n));


function isPalindrome(str) {
     let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

     function checkPalindrome(s, start, end) {
        if (start >= end) {
            return true;
        }
        if (s[start] !== s[end]) {
            return false;
        }
        return checkPalindrome(s, start + 1, end - 1);
    }

    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}

 let inputString = prompt("Entrez une chaîne pour vérifier si elle est un palindrome : ");
if (isPalindrome(inputString)) {
    alert("La chaîne est un palindrome.");
} else {
    alert("La chaîne n'est pas un palindrome.");
}


function power(base, exponent) {
    if (exponent === 0) {
        return 1;   
    } else {
        return base * power(base, exponent - 1);
    }
}

let base = prompt("Entrez la base : ");
let exponent = prompt("Entrez l'exposant : ");
base = parseInt(base);   
exponent = parseInt(exponent);   
alert(base + " élevé à la puissance " + exponent + " est : " + power(base, exponent));


