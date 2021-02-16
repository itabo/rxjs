/*

-   fromEvent<T>(target: FromEventTarget<T>, eventName: string, options?: EventListenerOptions 
    | ((...args: any[]) => T), resultSelector?: ((...args: any[]) => T)): Observable<T>
-   Creates an Observable that emits events of a specific type coming from the given event target. 

-   The fromEvent operator takes an “element” and an event name as parameters, and it then listens for 
    events of that name taking place on that element. It returns an Observable that emits those events. 
    An “element” may be a simple DOM element, or a NodeList, jQuery element, Zepto Element, 
    Angular element, Ember.js element, or EventEmitter.

    This operator also takes an optional third parameter: a function that accepts the arguments 
    from the event handler as parameters and returns an item to be emitted by the resulting Observable 
    in place of the event.
 */