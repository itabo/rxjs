/*
 *  Subject():
        1- Es un agrupador de subscripciones. Permite emitir el mismo valor a todas las subscriptions.
        2- Casteos múltiples.
        3- También es un observer.
        4- next(), error(), complete()
    
    - COLD Observable: Cuando la data es producida por un Observable en si mismo
    - HOT Observable: Cuando la data es producida fuera un Observable.
 */

import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
    next: value => console.log(`[next]: (${value})`),
    error: error => console.error('[error]: ', error),
    complete: () => console.info('[completed]')
}

const interval$ = new Observable<number>(
    subs => {

        const intervalId = setInterval(() => {
            console.info(':setInterval emit');
            subs.next(Math.random());
        }, 1500);

        //Cuando se completa el observable | se llama al unsubscribe, se ejecuta la func. de retorno.
        return () => {
            clearInterval(intervalId);
            console.info(':setInterval down');
        }
    }
);

function run(): Promise<void> {

    return new Promise<void>((resolve, reject) => {
        /* Las subscripciónes reciben el mismo valor random si nos subscribimos al subject */
        const subject$ = new Subject<number>();
        const subjectSubscription = interval$.subscribe(subject$);

        const subs1 = subject$.subscribe(observer);
        const subs2 = subject$.subscribe(observer);

        /* Cada subscripción recibe un valor random diferente si nos subscribimos al observable */
        // const subs1 = interval$.subscribe(value => console.log('subs1: ', value));
        // const subs2 = interval$.subscribe(value => console.log('subs2: ', value));

        setTimeout(() => {

            console.info(':subject injecting value');
            subject$.next(10);

            subject$.complete();
            console.info(':subject completed');

            subjectSubscription.unsubscribe();
            console.info(':subjectSubscription unsubscribed');

            resolve();

        }, 5000);
    });


};

export { run as sample_03 };






