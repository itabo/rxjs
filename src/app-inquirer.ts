import 'colors';
import inquirer from 'inquirer';
import { PREFIX, SUFIX } from './helpers/pre-sufix.helper';

const meuOptions = [
    {
        type: 'list',
        name: 'selection',
        message: 'What sample do you want?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} - Observable`
            },
            {
                value: '2',
                name: `${'2.'.green} - Unsubscribe Add`
            },
            {
                value: '3',
                name: `${'3.'.green} - Subject`
            },
            {
                value: '4',
                name: `${'4.'.green} - xxxx`
            },
            {
                value: '5',
                name: `${'5.'.green} - xxxx`
            },
            {
                value: '6',
                name: `${'6.'.green} - xxxx`
            },
            {
                value: '0',
                name: `${'0.'.green} - xxxx`
            },
        ]
    }
];

const showInquirerMenu = async () => {

    console.clear();

    console.log(`${PREFIX} Menu ${SUFIX}\n`.green);

    const { selection } = await inquirer.prompt(meuOptions);

    return selection;
}

const pauseInquirer = async () => {

    await inquirer.prompt(
        {
            type: 'input',
            name: 'enter',
            message: 'Press Enter to continue'.green
        }
    );
}

export {
    showInquirerMenu,
    pauseInquirer
}
