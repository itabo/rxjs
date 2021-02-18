
/** Notes
 * 
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asapScheduler} scheduler. 
 * 
*/

import { asyncScheduler } from 'rxjs';

const delay = 3000;
const stopAfter = 15000;

function run(): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        console.log(`${delay / 1000} sec. delayed...`);

        const subs$ = asyncScheduler.schedule(function task(state) {

            console.log('state: ', state);

            this.schedule(state + 1, 1000); // `this` references currently executing Action,
            // which we reschedule with new state and delay
        }, delay, 2);


        asyncScheduler.schedule(() => {
            subs$.unsubscribe();
            console.log('unsubscribed()');            
            resolve();
        }, stopAfter);
    });
}


export { run as sample_09 };