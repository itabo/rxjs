import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<string> = {
    next: value => console.log(`[next]: (${value})`),
    error: error => console.error('[error]: ', error),
    complete: () => console.info('[completed]')
}

const interval$ = new Observable<number>(
    subs => {

       const intervalId = setInterval(() => subs.next(Math.random()), 3000);

       //Cuando se completa el observable, se ejecuta la func. de retorno.
       return () => {
           clearInterval(intervalId);
       }
    }
);

function run() {

    /*   
        Subject():
        1- Es un agrupador de subscripciones. Permite emitir el mismo valor a todas las subscriptions.
        2- Casteos múltiples.
        3- También es un observer.
        4- next(), error(), complete()
    */

    /* Las subscripciónes reciben el mismo valor random si nos subscribimos al subject */
    const subject$ = new Subject<number>();
    interval$.subscribe(subject$);
    const subs1 = subject$.subscribe(value => console.log('subs1: ', value));
    const subs2 = subject$.subscribe(value => console.log('subs2: ', value));

    /* Cada subscripción recibe un valor random diferente si nos subscribimos al observable */
    // const subs1 = interval$.subscribe(value => console.log('subs1: ', value));
    // const subs2 = interval$.subscribe(value => console.log('subs2: ', value));

    //TODO Limpiar las subscripciones.
   

};

export { run as run_03 };






