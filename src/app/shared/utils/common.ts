import { Subscription } from 'rxjs';


/**
 * Dato un array, ne restituisce un elemento a caso
 */
export function randomItemFromArray<T>(value: Array<T>): T {
    return value[Math.floor(Math.random() * value.length)];
}

/**
 * Disiscrive una sottoscrizione se esiste
 */
export function safeUnsubscribe(subscription: Subscription): void {
    if (subscription) {
        subscription.unsubscribe();
    }
}
