import 'colors';
import inquirer from 'inquirer';
import { PREFIX, SUFIX } from './helpers/pre-sufix.helper';



const showInquirerMenu = async (menu) => {

    console.clear();

    console.log(`${PREFIX} Menu ${SUFIX}\n`.green);

    const { selection } = await inquirer.prompt(menu);

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
