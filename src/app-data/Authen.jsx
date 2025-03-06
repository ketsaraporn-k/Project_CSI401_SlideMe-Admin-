const users = [
  {
    user: "superadmin",
    pass: "passsuperadmin",
    role: "superadmin",
    token: "superadmin",
  },
  {
    user: "admin",
    pass: "pass",
    role: "admin",
    token: "admin",
  },
];

export function verifyUser(user, pass) {
  const userFound = users.find((u) => u.user === user && u.pass === pass);
  return userFound ? { role: userFound.role, token: userFound.token } : null;
}
