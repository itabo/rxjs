/**
 * Note: Avoid memory leaks:
  * - return function on Observables.
  * - unsubscribe() of subscriptions.
 */
import { Observable, Observer } from 'rxjs';

const _sims = 2000;
const _stms = 8000;
const _st2ms= 10000;

const observer: Observer<number> = {
    next: value => console.log(`Listen the next(): ${value}`),
    error: error => console.error('Catch error(): ', error),
    complete: () => console.info('completed()')
}

const interval$ = new Observable<number>(
    subs => {

        let counter = 0;

        const intervalId =
            setInterval(() => {
                counter++;
                console.info('--> setInterval() emitting');
                subs.next(counter);
            }, _sims);

        /*  
            Note: Once the subscriber is completed, the observer's complete() method is 
            executed and terminated but the subscribers are not unsubscribed.
            You have to call unsuscribe() anyway.
        */
        setTimeout(() => subs.complete(), _stms);


        // When unsubscribe() or complete().
        //IE. We want to stop emmiting when unsubscribe() or complete().
        return () => {
            clearInterval(intervalId);
            console.info('--> setInterval() down');
        }
    }
);

function run(useTierDown: boolean = false): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        const subs1 = interval$.subscribe(observer);
        const subs2 = interval$.subscribe(observer);
        const subs3 = interval$.subscribe(observer);

        if (useTierDown){
            // (+1) Improvement: Used to nest multiple subscribers.
            subs1.add(subs2).add(subs3);
        }

        setTimeout(() => {
            
            subs1.unsubscribe();

            if (!useTierDown) {
                subs2.unsubscribe();
                subs3.unsubscribe();
            }

            console.info('--> subscriptions unsubscribed');
            
            resolve();

        }, _st2ms)
    });
};

export { run as sample_02 };






