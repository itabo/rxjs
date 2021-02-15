import 'colors';
import { createInterface } from 'readline';

const showMenu = (): Promise<string> => {

    return new Promise<string>((resolve, reject) => {

        console.clear();
        console.log('=========> Menu \n'.green);
        console.log(`${'1.'.green} - Observable`);
        console.log(`${'2.'.green} - Unsubscribe Add`);
        console.log(`${'3.'.green} - Subject`);
        console.log(`${'0.'.green} - EXIT`);
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