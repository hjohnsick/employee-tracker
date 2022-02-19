const inquirer = require('inquirer');

const ascii = `%c
.-------------------------------------------------------------------------------.
|																				|
|																				|
|		________					    __										|
|	    |		|__  __  ___   _ ___   |  | ____    __     __   ____  ____		|
|		| ______| \'__ \` __ \| '__ \  |  |/    \  |  |   |  | /    \/    \     |
|		|	 |  |  |  |  |  | | |  ) | |  |                                     |
`;

console.log(ascii);
const prompts = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?"
        }
    ])
}