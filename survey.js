const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

rl.question("What's your name?", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.",
        (answer4) => {
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (answer5) => {
              rl.close();
            }
          );
        }
      );
    });
  });
});
