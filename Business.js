let rand = Math.random()
let First, Second, Third;

if (rand<0.33) {
    First = "Crazy";
}
else if( rand<0.66 && rand>=0.33){
    First = "Amazing";
}
else{
    First = "Fire";
}

rand = Math.random()
if (rand<0.33) {
    Second = "Engine";
}
else if( rand<0.66 && rand>=0.33){
    Second = "Foods";
}
else{
    Second = "Garments";
}

rand = Math.random()
if (rand<0.33) {
    Third = "Bros";
}
else if( rand<0.66 && rand>=0.33){
    Third = "Limited";
}
else{
    Third = "Hub";
}

console.log(`${First} ${Second} ${Third}`);