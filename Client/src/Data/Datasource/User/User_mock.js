const users = [
  {
    firstName: "Abhinov",
    lastName: "Mishra",
    email: "test1@gmail.com",
    password: "password",
    role: "ADMIN",
    profilePic: null
  },
  {
    firstName: "Aditya",
    lastName: "Gund",
    email: "test2@gmail.com",
    password: "password",
    role: "MANAGER",
    profilePic: null
  },
];

function login(email, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let data = false;
      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          data = users[i];
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

export async function searchUserByEmail(match)
{
  return new Promise((resolve) => {
    setTimeout(() => {
      const arr = users.filter(({email}) => email.substring(0,match.length) === match);
      resolve({data: arr});
    }, 3000);
  })
}

export { login, signup };
