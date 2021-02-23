import 'colors';
import { createInterface } from 'readline';

// interface Menu {
//     id: number;
//     name: string;
// }

type MenuType = {
    type: string;
    name: string;
    message: string;
    choices: {
        value: string;
        name: string;
    }[];
};

export const MENU: MenuType[] = [
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
                name: `${'4.'.green} - Of`
            },
            {
                value: '5',
                name: `${'5.'.green} - fromEvent`
            },
            {
                value: '6',
                name: `${'6.'.green} - range`
            },
            {
                value: '7',
                name: `${'7.'.green} - timer`
            },
            {
                value: '8',
                name: `${'8.'.green} - interval`
            },
            {
                value: '9',
                name: `${'9.'.green} - asyncScheduler`
            },
            {
                value: '0',
                name: `${'0.'.green} - EXIT`
            },
        ]
    }
];

// const menu: Menu[] = [
//     {
//         id: 1, 
//         name: 'Observable'
//     },
//     {
//         id: 2, 
//         name: 'Unsubscribe Add'
//     },
//     {
//         id: 3, 
//         name: 'Subject'
//     },
//     {
//         id: 4, 
//         name: 'of'
//     },
//     {
//         id: 5, 
//         name: 'fromEvent'
//     },
//     {
//         id: 6, 
//         name: 'range'
//     },
//     {
//         id: 7, 
//         name: 'timer'
//     },
//     {
//         id: 8, 
//         name: 'interval'
//     },
//     {
//         id: 9, 
//         name: 'asyncScheduler'
//     },
//     {
//         id: 0, 
//         name: 'EXIT'
//     },

// ]

const showMenu = (): Promise<string> => {

    return new Promise<string>((resolve, reject) => {

        console.clear();
        console.log('=========> Menu \n'.green);

        MENU[0].choices.forEach((value, index, array) => {
            console.log(`${value.value.toString().green} ${value.name}`);
        });

        console.log('');

        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('=========> Select option: '.green, (answer) => {
            rl.close();
            resolve(answer);
        });

    });

}

const pause = (): Promise<void> => {

    return new Promise<void>((resolve) => {

        const rlp = createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rlp.question('=========> Press ENTER to continue'.green, (answer) => {
            rlp.close();
            resolve();
        });
    });

}

export {
    showMenu,
    pause
}