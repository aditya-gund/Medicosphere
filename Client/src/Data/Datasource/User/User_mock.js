const users = [
  {
    firstName: "abhinov",
    lastName: "mishra",
    email: "test1@gmail.com",
    password: "password",
  },
  {
    firstName: "aditya",
    lastName: "gund",
    email: "test2@gmail.com",
    password: "password",
  },
];

function login(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let data = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          data = true;
          break;
        }
      }
      resolve({ data: data });
    }, 2000);
  });
}

async function signup(firstName, lastName, email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let data = true;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          data = false;
          break; //if user already exists with same email dont let them sign up
        }
      }
      resolve({ data }); //return the new user created if signup successful
    }, 2000);
  });
}

export { login, signup };
