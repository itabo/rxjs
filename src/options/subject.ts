/*
 (EN)
 Subject():
    1- It is a group of subscriptions. Allows to issue the same value to all subscriptions.
    2- Multiple castings.
    3- It's also an Observer.
    4- Actions: next(), error(), complete().
    
    - COLD vs HOT:  
    
    A “hot” Observable may begin emitting items as soon as it is created, 
    and so any observer who later subscribes to that Observable may start observing the 
    sequence somewhere in the middle. 
    
    A “cold” Observable, on the other hand, waits until an observer subscribes to it before 
    it begins to emit items, and so such an observer is guaranteed to see the whole sequence 
    from the beginning.

    *source: http://reactivex.io/documentation/observable.html

(ES)
Subject():
    1- Es un agrupador de subscripciones. Permite emitir el mismo valor a todas las subscriptions.
    2- Casteos múltiples.
    3- También es un Observer.
    4- Acciones: next(), error(), complete().
    
    - FRIO vs CALIENTE:  
    
    Un Observable "caliente" puede comenzar a emitir elementos tan pronto como se crea,
     y así cualquier observador que luego se suscriba a ese Observable puede comenzar a observar
     secuencia en algún lugar en el medio.
    
    Un Observable "frío", por otro lado, espera hasta que un observador se suscribe antes
    comienza a emitir elementos, por lo que se garantiza que tal observador verá la secuencia completa
    desde el principio.

    *source: http://reactivex.io/documentation/observable.html
*/

import { Observable, Observer, Subject } from 'rxjs';

const _sims = 1500;
const _stms = 5000;

const observer: Observer<number> = {
    next: value => console.log(`Listen the next(): ${value}`),
    error: error => console.error('Catch error(): ', error),
    complete: () => console.info('completed()')
}

const interval$ = new Observable<number>(
    subs => {

        const intervalId = setInterval(() => {
            console.info('--> setInterval emit');
            subs.next(Math.random());
        }, _sims);

        // When unsubscribe() or complete().
        return () => {
            clearInterval(intervalId);
            console.info('--> setInterval() down');
        }
    }
);

function run(): Promise<void> {

    return new Promise<void>((resolve, reject) => {
        /* Subscriptions receive the same random value if we subscribe to the subject. */
        const subject$ = new Subject<number>();
        const subjectSubscription = interval$.subscribe(subject$);

        const subs1 = subject$.subscribe(observer);
        const subs2 = subject$.subscribe(observer);

        setTimeout(() => {

            console.info('--> subject injecting value');
            subject$.next(10);

            console.info('--> subject complete()');
            subject$.complete();

            subjectSubscription.unsubscribe();
            console.info('--> subjectSubscription unsubscribed()');

            resolve();

        }, _stms);
    });


};

export { run as sample_03 };






