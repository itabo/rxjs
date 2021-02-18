import { showInquirerMenu, pauseInquirer } from './app-inquirer';
import { PREFIX, SUFIX } from './helpers/pre-sufix.helper';
import { sample_01 } from './options/01-observable';
import { sample_02 } from './options/02-unsubscribe-add';
import { sample_03 } from './options/03-subject';
import { sample_04 } from './options/functions/04-of';
import { sample_05 } from './options/functions/05-fromEvent';
import { sample_06 } from './options/functions/06-range';

const menu = [
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
                value: '0',
                name: `${'0.'.green} - EXIT`
            },
        ]
    }
];

type SampleFunction = (a?: any) => Promise<void>;

//#region Main

const showSampleSection = (option: string, end: boolean = false) => {
    console.log(`\n${PREFIX} Option ${option} sample ${end ? 'end' : 'init'}. ${SUFIX}\n`.green);
}

// const showSample = async (option: string, sample: SampleFunction) => {
//     console.log(`\n${PREFIX} Option ${option} sample init ${SUFIX}\n`.green);
//     await sample();
//     console.log(`\n${PREFIX} Option ${option} sample end ${SUFIX}\n`.green);
// }

const main = async () => {

    let selectedOption = '';
    do {

        selectedOption =
            await showInquirerMenu(menu);

        console.log(`\n${PREFIX} Option ${selectedOption} sample init ${SUFIX}\n`.green);

        switch (selectedOption) {
            case '1':
                //await showSample(selectedOption, sample_01);
                await sample_01();
                break;
            case '2':
                // await showSample(selectedOption, sample_02);
                await sample_02();
                break;
            case '3':
                //await showSample(selectedOption, sample_03);
                await sample_03();
                break;
            case '4':
                // await showSample(selectedOption, sample_04);
                await sample_04();
                break;
            case '5':
                // await showSample(selectedOption, sample_05);
                await sample_05();
                break;
            case '6':
                // await showSample(selectedOption, sample_06(true));
                
                const sub_menu_6 = [
                    {
                        type: 'list',
                        name: 'selection',
                        message: 'Do you want sync or async?',
                        choices: [
                            {
                                value: 'async',
                                name: `${'a.'.green} - Async`
                            },
                            {
                                value: 'sync',
                                name: `${'b.'.green} - Sync`
                            }
                        ]
                    }
                ];
                
                const answer_6 = await showInquirerMenu(sub_menu_6);
                const isAsync: boolean = answer_6 === 'async';                
                await sample_06(isAsync);
                break;
            default:
                break;
        }

        console.log(`\n${PREFIX} Option ${selectedOption} sample end ${SUFIX}\n`.green);


        if (selectedOption !== '0') await pauseInquirer();

    } while (selectedOption !== '0');

    console.clear();
    console.log('\nThanks for watching :) !\n'.green);
};

main();

//#endregion

