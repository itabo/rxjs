/* Notes

-   of<T>(...args: Array<T | SchedulerLike>): Observable<T>
-   Converts the arguments to an observable sequence.

-   Emits synchronously one by one the arguments. 
    It's Completed after the last emission. 
*/

import { of } from 'rxjs';

interface Data {
    name: string, age: number
}

function run(): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        //const $obs = of<any>(...[1, 2, 3], 'anything', 'other string', true, { name: 'John', age: 42 });
        const $obs = of<number>(...[1, 2, 3], 9 , 8, 7, 6, 5, 4);
        //const $obs = of<boolean>(true, false);
        //const $obs = of<Data>({ name: 'John', age: 23 }, { name: 'Katy', age: 38 });

        const $subsciption = $obs.subscribe(
            next => console.log(`Listen the next(): ${JSON.stringify(next)}`),
            error => console.error('Catch error(): ', error),
            () => console.info('completed()')
        );

        resolve();
    });
}

export { run as sample_04 };