"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(text) {
        let isBreakPoint = this.isBreakPoint(text);
        let isNormalScope = this.isNormalScope(text);
        if (isBreakPoint) {
            let [captures, breakpoint, attrs] = isBreakPoint;
            if (!globalThis.memory[breakpoint])
                globalThis.memory[breakpoint] = [];
            this.push(breakpoint, attrs.split(" "));
        }
        if (isNormalScope) {
            if (!globalThis.memory["normal"])
                globalThis.memory["normal"] = [];
            this.push("normal", text.split(" "));
        }
    }
    isBreakPoint(text) {
        return text.match(/(\w+):\s?((\w|\-|\s)+)/);
    }
    isNormalScope(text) {
        return !/(\w+):\s?((\w|\-|\s)+)/.test(text);
    }
    push(key, items) {
        for (let item of items) {
            if (!globalThis.memory[key].includes(item))
                globalThis.memory[key].push(item);
        }
    }
}
exports.default = default_1;
