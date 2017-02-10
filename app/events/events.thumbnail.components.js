"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var EventsThumbnailComponent = (function () {
    function EventsThumbnailComponent() {
        this.eventClick = new core_1.EventEmitter();
    }
    EventsThumbnailComponent.prototype.handleClick = function () {
        this.eventClick.emit('foo');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], EventsThumbnailComponent.prototype, "event", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EventsThumbnailComponent.prototype, "eventClick", void 0);
    EventsThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'events-thumbnail',
            template: "\n    <div>\n        <h1>Upcoming Angular 2 Events</h1>\n        <hr>\n        <h4>{{event.name}}</h4>\n        <button class=\"btn btn-primary\" (click)=\"handleClick()\">Submit</button>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], EventsThumbnailComponent);
    return EventsThumbnailComponent;
}());
exports.EventsThumbnailComponent = EventsThumbnailComponent;
//# sourceMappingURL=events.thumbnail.components.js.map