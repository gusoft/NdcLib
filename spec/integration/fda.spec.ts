import { Ndc } from '../../src';
import fs from 'fs';
import path from 'path';
const readline = require('readline');
const lineReader = require('line-reader');

jest.setTimeout(300000);

describe("FDA Test", () => {
    
    test("Can parse and return hyphenated on all NDCs", (done) => {

        const testFile = path.join(__dirname, "ndcs.csv");

        const readInterface = readline.createInterface({
            input: fs.createReadStream(testFile),
            console: false
        });

        readInterface.on('line', function(line: string) {
            const ndc = new Ndc(line);
            expect(ndc.hyphenated()).toEqual(line);
        });

        readInterface.on('close', done);
    });
});