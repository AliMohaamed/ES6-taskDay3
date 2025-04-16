let person = {
    name: "ali",
    age: 20,
    salary: 100,
    isActive: true,
  };
  
  person[Symbol.iterator] = createIteratorObject;
  
  function createIteratorObject() {
    let index = 0;
    let data = Object.entries({ ...person });
  
    return {
      next: function () {
        if (index < data.length) {
          let [key, value] = data[index++];
          return { value: [key, value], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
  
  for (const [key, value] of person) {
    console.log(key, value);
  }
  