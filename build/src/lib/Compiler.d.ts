export default class {
    private input;
    private output;
    private __output__;
    constructor(input: string, output: string);
    run(): Promise<void>;
    private parseDirectory;
    private compile;
}
