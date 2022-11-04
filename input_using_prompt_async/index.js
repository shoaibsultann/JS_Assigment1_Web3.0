const prompt = require("prompt-async");

async function main() {
  // Available only with `prompt-async`!
  // Start the prompt.
  prompt.start();

  const { name, fatherNamr, number, email } = await prompt.get([
    "name",
    "fatherName",
    "number",
    "email",
  ]);

  console.log(
    ` Hi My name is ${name} ! \n My Father name is ${fatherNamr} \n Contact me on ${number}! \n noIf you want my email, here it is ${email} `
  );
}

main();
