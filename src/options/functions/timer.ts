
/** Notes
 * 
 * See also {@link https://devdocs.io/rxjs/api/index/function/timer}
 * timer(dueTime: number | Date = 0, periodOrScheduler?: number | SchedulerLike, scheduler?: SchedulerLike): Observable<number>
 * Creates an Observable that starts emitting after an dueTime and emits ever increasing numbers after each period of time thereafter.
 * 
 * Emits asynchronously 0 after dueTime. You can use operators like map() to convert values.
 * It's Completed after the last emission. 
 * 
*/

import { timer } from 'rxjs';

const initAfter = 3000;


function run(): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        console.log(`Waiting... ${initAfter / 1000} sec. to start...`);


        /**
         * Basic
         */
        const $obs = timer(initAfter);

        /**
         * Similar to interval. Init after dueTime and emit every periodOrScheduler.         
         */
        //const $obs = timer(initAfter, 2000);

        /**
         * Init at specific DateTime.
         */
        // const specificDateTime = new Date();
        // specificDateTime.setSeconds(specificDateTime.getSeconds() + 10);
        // const $obs = timer(specificDateTime);

        const $subsciption = $obs.subscribe(
            next => console.log(`Listen the next()`, next),
            error => console.error('Catch error(): ', error),
            () => {
                console.info('completed()');
                resolve();
            }
        );


    });
}

export { run as sample_07 };