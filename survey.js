const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

const user = {}

rl.question('Whats your name? Nicknames are also acceptable :) ', (answer) => {
  // TODO: Log the answer in a database
  user.name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    user.activity = answer

    rl.question("What do you listen to while doing that? ", (answer) => {
      user.music = answer

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        user.meal = answer

        rl.question("Which sport is your absolute favourite?) ", (answer) => {
          user.sport = answer

          rl.question("What is your superpower? In a few words, tell us what you are amazing at!) ", (answer) => {
            user.superpower = answer

            console.log(
              `I am ${user.name} & I love to play ${user.activity} while listening to ${user.music}. I like ${user.meal} and ${user.sport} is my favorite sport. My secret super power is ${user.superpower}!!`);
            rl.close();
          })
        })
      })
    })
  })
})
