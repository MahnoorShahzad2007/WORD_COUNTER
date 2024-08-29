#! usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";
// Function to get the length of a word
function getWordLength(word) {
    return word.length;
}
// Prompt user for input
inquirer
    .prompt([
    {
        type: 'input',
        name: 'word',
        message: 'Please enter a word:',
    }
])
    .then(answers => {
    const input = answers.word;
    const length = getWordLength(input);
    // Display the result
    console.log(chalk.green(`The length of the word "${input}" is ${length} characters.`));
})
    .catch(error => {
    console.error(chalk.bgRedBright('An error occurred:'), error);
});
