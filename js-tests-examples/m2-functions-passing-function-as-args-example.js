function greetPeople(person)
{
console.log("Executing the callback function");
console.log('Hello ' + person);
}

function onboard(name, callback) //callback = greetPeople
{
console.log("Executing the logic inside the onboarding function");
callback(name); // greetPeople(name);
}

onboard('John', greetPeople);
