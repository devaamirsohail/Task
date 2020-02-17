const criminals = new Map();

criminals.set("Paul White", "Roger Night, Peter Llong Jr.");
criminals.set("Roger Fedexer", "Rob Ford, Pete Lord, Roger McWire");
criminals.set("Paul White Jr.", null);
criminals.set("Red Fortress", "Roger Rabbit, Ross Winter");
criminals.set("Redford Fort", "Red Strong, Red Fort");

function interviewCriminals(input) {
  //We'll consider taking the input into uppercase
  const changedInput = input.toLowerCase();
  for (const [key, value] of criminals.entries()) {
    if (key.toLowerCase().includes(changedInput)) {
      const result = criminals.get(key);
      return `Name=${key}, Alias=${result}`;
    }
  }
  for (const [key, value] of criminals.entries()) {
    if (value) {
      if (value.toLowerCase().includes(changedInput)) {
        const result = criminals.get(key);
        return `Name=${key}, Alias=${result}`;
      }
    }
  }
  return `No match`;
}

console.log(interviewCriminals("roger"));
