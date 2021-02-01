import { Observable, Observer } from 'rxjs';

const obs$ = new Observable<string>(subscriber => {

    /** next: Emite un valor para los subscribers */
    subscriber.next('Emito 1');
    subscriber.next('Emito 2');
    subscriber.next('Emito 3');


    //#region error(): 
    /*  
        lanza un error y lo pasa a completado.
    */

    // const a = undefined;
    // a.nombre = 'Esto no funciona';

    //subscriber.error({ msg: 'Forzamos error' });

    //#endregion

    //#region complete(): 
    /*  
        Deja de emitir. 
        Cualquier emision posterior no será emitida
    */
    subscriber.complete();

    //#endregion

    subscriber.next('Emito 4');
    subscriber.next('Emito 5');

});

function run() {

    /*
        Un Observable sin subscripciones no emite valores. 
        El subsciber (suscriptor) necesita notificarle por lo menos a un subscriber (abonado).
     */
    /* Forma 1.*/
    //obs$.subscribe(console.log);

    /* Forma 2.*/
    /* Definimos las 3 funciones directamente en la subscripción  */
    // obs$.subscribe(
    //     value => console.log(`Recibimos el next(${value})`),
    //     error => console.error('Capturamos el error: ', error),
    //     () => console.info('Observable completado')
    // );

    /* Forma 3.*/
    /* +1 Se define un observer (interfaz) con las 3 funciones necesarias  */
    const observer: Observer<string> = {
        next: value => console.log(`Recibimos el next(${value})`),
        error: error => console.error('Capturamos el error: ', error),
        complete: () => console.info('Observable completado')
    }
    obs$.subscribe(observer);
};

export { run as sample_01 };






