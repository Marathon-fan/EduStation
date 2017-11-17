import { observeOn } from 'rxjs/operator/observeOn';
import { queue } from 'rxjs/scheduler/queue';
/**
 * @template T
 * @param {?} obs
 * @return {?}
 */
export function wrapWithZone(obs) {
    return observeOn.call(obs, new ZoneScheduler(Zone.current));
}
var ZoneScheduler = (function () {
    /**
     * @param {?} zone
     */
    function ZoneScheduler(zone) {
        this.zone = zone;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    ZoneScheduler.prototype.schedule = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (this.zone.run(function () { return queue.schedule.apply(queue, args); }));
    };
    return ZoneScheduler;
}());
export { ZoneScheduler };
function ZoneScheduler_tsickle_Closure_declarations() {
    /** @type {?} */
    ZoneScheduler.prototype.zone;
}
//# sourceMappingURL=utils.js.map