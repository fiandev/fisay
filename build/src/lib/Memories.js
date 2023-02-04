"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(attrClass) {
        let attrs = attrClass.split(/\s/);
        for (let attr of attrs) {
            let isBreakPoint = this.isBreakPoint(attr);
            let isNormalScope = this.isNormalScope(attr);
            if (isBreakPoint) {
                let [captures, breakpoint, scopes] = isBreakPoint;
                if (!globalThis.memory[breakpoint])
                    globalThis.memory[breakpoint] = [];
                this.push(breakpoint, scopes.split(" "));
            }
            if (isNormalScope) {
                if (!globalThis.memory["normal"])
                    globalThis.memory["normal"] = [];
                this.push("normal", attr.split(" "));
            }
        }
    }
    isBreakPoint(text) {
        return text.match(/\s?(\w+):\s?((\w|\-|\S)+)/);
    }
    isNormalScope(text) {
        return !/\s?(\w+):\s?((\w|\-|\s)+)/.test(text);
    }
    push(key, items) {
        for (let item of items) {
            if (!globalThis.memory[key].includes(item))
                globalThis.memory[key].push(item);
        }
    }
}
exports.default = default_1;
