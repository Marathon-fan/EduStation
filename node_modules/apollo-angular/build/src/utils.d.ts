import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
export declare function wrapWithZone<T>(obs: Observable<T>): Observable<T>;
export declare class ZoneScheduler {
    private zone;
    constructor(zone: Zone);
    schedule(...args: any[]): Subscription;
}
