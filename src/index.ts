import { showInquirerMenu, pauseInquirer } from './app-inquirer';
import { PREFIX, SUFIX } from './helpers/pre-sufix.helper';
import { showMenu, pause } from './menu';
import { sample_01 } from './options/01-observable';
import { sample_02 } from './options/02-unsubscribe-add';
import { sample_03 } from './options/03-subject';

//#region Main

const showSampleSection = (option: string, end: boolean = false) => {
    console.log(`\n${PREFIX} Option ${option} sample ${end ? 'end' : 'init'}. ${SUFIX}\n`.green);
}

const showSample = async (option: string, sample: () => Promise<void>) => {
    console.log(`\n${PREFIX} Option ${option} sample init ${SUFIX}\n`.green);
    await sample();
    console.log(`\n${PREFIX} Option ${option} sample end ${SUFIX}\n`.green);
}

const main = async () => {

    let selectedOption = '';
    do {

        selectedOption =
            await showInquirerMenu();
        
        switch (selectedOption) {
            case '1':
                await showSample(selectedOption, sample_01);
                break;
            case '2':
                await showSample(selectedOption, sample_02);
                break;
            case '3':
                await showSample(selectedOption, sample_03);
            default:
                break;
        }


        if (selectedOption !== '0') await pauseInquirer();

    } while (selectedOption !== '0');

    console.clear();
    console.log('\nThanks for watching :) !\n'.green);
};

main();

//#endregion

