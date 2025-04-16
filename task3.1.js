const allowedProps = ["name", "address", "age"];

const handler = {
  set(obj, prop, value) {
    if (!allowedProps.includes(prop)) {
      console.log(`Property '${prop}' is not allowed.`);
      return false;
    }

    if (prop === "name") {
      if (typeof value !== "string" || value.length !== 7) {
        console.log("name must be a string of 7 characters.");
        return false;
      }
    }

    if (prop === "address") {
      if (typeof value !== "string") {
        console.log("address must be a string value.");
        return false;
      }
    }

    if (prop === "age") {
      if (typeof value !== "number" || value < 25 || value > 60) {
        console.log("age must be a numerical value between 25 and 60.");
        return false;
      }
    }

    obj[prop] = value;
    console.log(`${prop} set to '${value}'`);
    return true;
  }
};

const user = new Proxy({}, handler);

// Test Cases:
user.name = "JohnDoe"; 
user.name = "Ali";  
user.address = "Cairo"; 
user.address = 123;        
user.age = 30; 
user.age = 70; 
user.email = "test@mail";

console.log(user);
