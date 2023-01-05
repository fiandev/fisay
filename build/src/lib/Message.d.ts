declare class Message {
    generate(text: string, color: string, option?: string): any;
    console(text: string): void;
    danger(text: string): void;
    info(text: string): void;
    warning(text: string): void;
    success(text: string): void;
}
declare const _default: Message;
export = _default;
