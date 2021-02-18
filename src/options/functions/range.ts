
/** Notes
 * 
 * See also {@link https://devdocs.io/rxjs/api/index/function/range}
 * range(start: number = 0, count?: number, scheduler?: SchedulerLike): Observable<number>
 * Creates an Observable that emits a sequence of numbers within a specified range.
 * 
 * Emits synchronously the range: start -> count. 
 * It's Completed after the last emission. 
 * 
*/

import { range, asyncScheduler } from 'rxjs';

function run(isAsync: boolean): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        const $obs = isAsync ? range(1, 100, asyncScheduler) : range(1, 100);

        const $subsciption = $obs.subscribe(
            next => console.log(`Listen the next()`, next),
            error => console.error('Catch error(): ', error),
            () => console.info('completed()')
        );

        resolve();
    });
}

export { run as sample_06 };