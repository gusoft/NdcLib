export class Ndc {

    private readonly ndc: string[];
    private readonly ndcTest = new RegExp('^([0-9]{4}-[0-9]{4}-[0-9]{2}|[0-9]{5}-[0-9]{3}-[0-9]{2}|[0-9]{5}-[0-9]{4}-[0-9]{1})$');

    constructor(rawNdc: string) {

        this.testNDC(rawNdc);
        this.ndc = rawNdc.split("-");
    }

    private testNDC(ndc: string): void {

        if (!this.ndcTest.test(ndc)) {
            throw new Error(`Invalid NDC. Format must be 4444-4444-22, 55555-333-22, 555555-4444-1.`);
        }
    }
 
    /**
     * Returns the NDC as a string, with hyphens. With padded with zeros or unpadded.
     * @param  {boolean} [padded=false] whether or not to pad the NDC with zeros eg. `01234-5678-90`
     * @returns {string} a hyphenated NDC eg. `1234-5678-90`
     */
    public hyphenated(padded: boolean = false) {

        if (padded) {
            return [
                this.ndc[0].padStart(5, "0"),
                this.ndc[1].padStart(4, "0"),
                this.ndc[2].padStart(2, "0"),
            ].join("-");
        }

        return this.ndc.join("-");

    }

    /**
     * Returns the NDC as a string, without hyphens. With padded with zeros or unpadded.
     * @param  {boolean} [padded=false] whether or not to pad the NDC with zeros eg. `01234567890`
     * @returns {string} an unhyphenated NDC eg. `1234567890`
     */
    public unhyphenated(padded: boolean = false) {

        if (padded) {
            return [
                this.ndc[0].padStart(5, "0"),
                this.ndc[1].padStart(4, "0"),
                this.ndc[2].padStart(2, "0"),
            ].join("");
        }

        return this.ndc.join("");
    
    }
}
