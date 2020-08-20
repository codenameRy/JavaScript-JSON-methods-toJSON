//Challenge #1 - Turn the object into JSON and back

// Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};

let newUser = JSON.parse(JSON.stringify(user))
alert(newUser)

//Challenge #2 - Exclude backreferences

//Write replacer function to stringify everything, but remove properties that reference meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{name: "John"}, {name: "Alice"}],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;
}));