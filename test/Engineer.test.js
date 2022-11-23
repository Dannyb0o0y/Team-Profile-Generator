const Engineer = require("../lib/Developer");

test("Can create a github.", () => {
  const testGithub = "JamesLJenks";
  const employeeInstance = new Engineer(
    "James",
    2,
    "jamesljenks@gmail.com",
    testGithub
  );
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "JamesLJenks";
  const employeeInstance = new Engineer(
    "James",
    2,
    "jamesljenks@gmail.com",
    testGithub
  );
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "James",
    2,
    "jamesljenks@gmail.com",
    "JamesLJenks"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
