/**
 * Evitar fugas de memoria:
 *  - función de retorno en los Observable.
 *  - unsubscribe() de los subscriptions.
 */
import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: value => console.log(`[next]: (${value})`),
    error: error => console.error('[error]: ', error),
    complete: () => console.info('[completed]')
}

const interval$ = new Observable<number>(
    subs => {

        let counter = 0;

        const intervalId =
            setInterval(() => {
                counter++;
                console.info(':setInterval emit');
                subs.next(counter);
            }, 1500);

        /*  Una vez completado el subscriber, se ejecuta el complete() del observer y se termina.
            Nota: Por mas que se completa, los suscriptores no quedan desuscriptos. 
            Hay que llamar al unsuscribe() de todas maneras.
        */
        setTimeout(() => subs.complete(), 8000);


        // Se ejecuta cuando se hace el unsubscribe() o cuando se ejecuta el comlete().
        //Ej. Cuando me desuscriba, quiero que el setInterval() deje de emitir.
        return () => {
            clearInterval(intervalId);
            console.info(':setInterval down');
        }
    }
);

function run(useTierDown: boolean = false): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        const subs1 = interval$.subscribe(observer);
        const subs2 = interval$.subscribe(observer);
        const subs3 = interval$.subscribe(observer);

        if (useTierDown)
            // Mejora: Se utiliza para anidar varios subscribers.
            subs1.add(subs2).add(subs3);

        setTimeout(() => {
            subs1.unsubscribe();

            if (!useTierDown) {
                subs2.unsubscribe();
                subs3.unsubscribe();
            }

            console.info(':subscriptions unsubscribed');
            resolve();
        }, 10000)
    });
};

export { run as sample_02 };






