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

const main = async () => {

    let selectedOption = '';
    do {

        selectedOption =
            await showInquirerMenu();
        //await showMenu();
        //console.log(selectedOption);

        switch (selectedOption) {
            case '1':
                showSampleSection(selectedOption);
                console.log('sample_01()');
                showSampleSection(selectedOption, true);
                //sample_01();
                break;
            case '2':
                showSampleSection(selectedOption);
                console.log('sample_02()');
                showSampleSection(selectedOption, true);
                //await sample_02(true);
                break;
            case '3':
                showSampleSection(selectedOption);
                //await sample_03();
                console.log('sample_03()');
                showSampleSection(selectedOption, true);
                break;
            default:
                break;
        }


        if (selectedOption !== '0') await pauseInquirer();

    } while (selectedOption !== '0');

    console.log('\nThanks for watching :) !\n'.green);
};

main();

//#endregion

