import { Observable, Observer } from 'rxjs';

const obs$ = new Observable<string>(subscriber => {

    //#region next(): Broadcast begins...

    subscriber.next('--> observable emmit 1');
    subscriber.next('--> observable emmit 2');
    subscriber.next('--> observable emmit 3');

    //#endregion

    //#region error(): The Observer will catch it and execute the error function.  

    //Uncomment to throw an error
    //const a = undefined;
    //a.nombre = 'this is not good :)';


    ////Uncomment to throw an error (2)
    //subscriber.error({ msg: 'forced error' }); 

    //#endregion

    //#region complete(): The flow is completed and no further broadcast will be captured. 
    subscriber.complete();

    //#endregion

    // After completion, nothing will be issued.
    subscriber.next('--> this will not be issued');
    subscriber.next('--> this will not be issued');
    //...

});

function run(): Promise<void> {

    return new Promise<void>((resolve, reject) => {
        /*
            NOTE: An Observable without subscriptions does not emit values. 
            The subscriber needs to notify at least one subscriber.
        */
         
        //#region 1. We can define the operations in line of the subscription.  
        
        // obs$.subscribe(
        //     value => console.log(`Listen the next(): ${value}`),
        //     error => console.error('Catch error(): ', error),
        //     () => console.info('On completed()')
        // );

        //#endregion

        //#region 2. (+1) We can define an observer and pass it to the subscription. 
        
        const observer: Observer<string> = {
            next: value => console.log(`Listen the next(): ${value}`),
            error: error => console.error('Catch error(): ', error),
            complete: () => console.info('completed()')
        }
        obs$.subscribe(observer);

        //#endregion
        
        //Promise resolved()
        resolve();

    });
};

export { run as sample_01 };






