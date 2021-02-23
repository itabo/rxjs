
/** Notes
 * 
 * See also {@link https://devdocs.io/rxjs/api/index/function/interval}
 * interval(period: 0 = 0, scheduler: SchedulerLike = async): Observable<number>
 * Creates an Observable that emits sequential numbers every specified interval of time, on a specified SchedulerLike.
 * 
 * Emits asynchronously 0 after dueTime. You can use operators like map() to convert values.
 * It's Completed after the last emission. 
 * 
*/

import { interval, timer } from 'rxjs';

const initAfter = 1000;
const stopAfter = 10000;

function run(): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        console.log(`Waiting... ${initAfter / 1000} sec. to start...`);

        const $obs = interval(initAfter);

        const subsciption$ = $obs.subscribe(
            next => console.log(`Listen the next()`, next),
            error => console.error('Catch error(): ', error),
            () => console.info('completed()')
        );

        timer(stopAfter).subscribe(value => {
            subsciption$.unsubscribe();
            resolve();
        });


    });
}


export { run as sample_08 };