const mynum = process.argv[2];
const number = parseInt(mynum)
if (isNaN(number)){
    console.log("Not a number")
}else{
    console.log ("My number: " + mynum);
}