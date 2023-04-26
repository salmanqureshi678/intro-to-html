Task = 1


let zakatPercentage = 0.025;
let userInput = prompt('Enter your amount');

let result = zakatPercentage * userInput;
alert("Your Zakat value is " + Number.parseInt(result));




Task = 2






let gandum = '320';
let Jo = '600';
let khajoor = '2000';
let kishmish = '2600';
let familyMembers = prompt('Enter family members');
let convert = Number(familyMembers);

let fitrahMethod = prompt('Enter fitrah method, type 1 for gandum , 2 for jo , 3 for khajoor and 4 for kishmish');
let convert2 = Number(fitrahMethod);


if (convert2 == 1) {
    alert('Your Fitrah amount is Rs.' + (convert * gandum));
}
else if (convert2 == 2) {
    alert('Your Fitrah amount is Rs.' + (convert * Jo));

}
else if (convert2 == 3) {
    alert('Your Fitrah amount is Rs.' + (convert * khajoor));

}
else if (convert2 == 4) {
    alert('Your Fitrah amount is Rs.' + (convert * kishmish));

}
else {
    alert('The value is invalid');
}





// Task 03




var a = prompt("Guess the number?")
a = Number.parseInt(a)
// Converting a string into a number
console.log(typeof a)
if (a == 7) {
    alert("Congratulations")
}
else {
    alert("Try again")
}






//Task 4






var sentence = prompt("Enter your name")
console.log(
    sentence[1].toUpperCase(3) + sentence.slice(2).toLowerCase(6)
)






// Task 05






var arr = []
var a = prompt("Enter Your Name")
var b = prompt("Enter Your Contact Number")
b = Number.parseInt(b)
arr.push(a, b)
console.log(arr)

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}







//Task 06
var product = ["Juices", "Lays", "Cold Drinks", "Chocolates", "Biscuits", "Chips", "Cakes"]

var deletedValues = product.splice(2, 3
    (console.log(productconsole.log(deletedValuesconsole.log(product.length)))))






//Task 7




var a = prompt("Hey whats your nationality")
if (a == "Pakistani") {

    var b = prompt("Hey whats your age")
    if (b >= 18) {

        var c = prompt("What is your gender")
        if (c == "Female") {
            var d = prompt("are you married")
            if (d == "Yes") {
                alert("You are eligible for vote")
            }
            else {
                alert("You are not eligible for vote")
            }
        }

        if (c == "Male") {
            alert("You are eligible for vote")
        }

    }

    else {
        alert("You are not eligible for vote")
    }
}

else {
    alert("You are not eligible for vote")
}






//Task 08





var arr = ["Fakhar Zaman", "Saim Ayub", "M Haris", "Zaman Khan", "Ihsanullah", "Shaheen Afridi", "Haris Rauf", "Babar Azam", "M Rizwan", "Shadab Khan", "Imad Wasim", "Iftikhar Ahmed", "Naseem Shah", "M Nawaz", "M Wasim"]
var newArr = arr.slice(4, 15)
console.log(newArr)