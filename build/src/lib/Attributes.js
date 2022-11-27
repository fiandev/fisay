"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor() {
        this.attributes = [];
    }
    push(attr) {
        var _a, _b;
        if ((_a = this.attributes) === null || _a === void 0 ? void 0 : _a.includes(attr))
            return false;
        (_b = this.attributes) === null || _b === void 0 ? void 0 : _b.push(attr);
    }
    add(attr) {
        attr.forEach(v => this.push(v));
    }
    getAttributes() {
        return this.attributes;
    }
}
exports.default = default_1;
