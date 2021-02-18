import 'colors';
import { createInterface } from 'readline';

interface Menu {
    id: number;
    name: string;
}

const menu: Menu[] = [
    {
        id: 1, 
        name: 'Observable'
    },
    {
        id: 2, 
        name: 'Unsubscribe Add'
    },
    {
        id: 3, 
        name: 'Subject'
    },
    {
        id: 4, 
        name: 'of'
    },
    {
        id: 5, 
        name: 'fromEvent'
    },
    {
        id: 6, 
        name: 'range'
    },
    {
        id: 7, 
        name: 'timer'
    },
    {
        id: 8, 
        name: 'interval'
    },
    {
        id: 0, 
        name: 'EXIT'
    },

]

const showMenu = (): Promise<string> => {

    return new Promise<string>((resolve, reject) => {

        console.clear();
        console.log('=========> Menu \n'.green);
        
        menu.forEach((value: Menu, index: number, array: Menu[]) => {
            console.log(`${value.id.toString().green} ${value.name}`);
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