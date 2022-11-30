declare const _default: {
    pkg: {
        name: string;
        version: string;
        description: string;
        main: string;
        private: boolean;
        repository: string;
        bugs: string;
        homepage: string;
        scripts: {
            build: string;
            test: string;
            test2: string;
            dev: string;
        };
        bin: {
            fisay: string;
        };
        directories: {
            src: string;
        };
        keywords: string[];
        author: string;
        license: string;
        dependencies: {
            chalk: string;
            cheerio: string;
            commander: string;
            "fs-extra": string;
            "fs-readdir-recursive": string;
            "node-watch": string;
        };
        devDependencies: {
            "@types/node": string;
            "@types/require-all": string;
            nodemon: string;
            "require-all": string;
        };
    };
    scripts: any;
};
export = _default;
