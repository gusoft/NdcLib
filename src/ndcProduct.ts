
export class NdcProduct {

    private readonly ndc: string[];
    private readonly ndcTest = new RegExp('^([0-9]{4}-[0-9]{4}|[0-9]{5}-[0-9]{3}|[0-9]{5}-[0-9]{4})$');

    constructor(rawProductNdc: string) {
        this.testNDC(rawProductNdc);

        this.ndc = rawProductNdc.split("-");
    }

    private testNDC(ndc: string): void {
        if (!this.ndcTest.test(ndc)) {
            throw new Error(`Invalid Product NDC. Format must be 4444-4444, 55555-333, 55555-4444.`);
        }
    }

      /**
     * Returns the NDC as a string, with hyphens. With padded with zeros or unpadded.
     * @param  {boolean} [padded=false] whether or not to pad the NDC with zeros eg. `01234-5678`
     * @returns {string} a hyphenated NDC eg. `1234-5678`
     */
    public hyphenated(padded: boolean = false) {

        if (padded) {
            return [
                this.ndc[0].padStart(5, "0"),
                this.ndc[1].padStart(4, "0"),
            ].join("-");
        }

        return this.ndc.join("-");

    }


    /**
     * Returns the NDC as a string, without hyphens. With padded with zeros or unpadded.
     * @param  {boolean} [padded=false] whether or not to pad the NDC with zeros eg. `012345678`
     * @returns {string} an unhyphenated NDC eg. `12345678`
     */
    public unhyphenated(padded: boolean = false) {

        if (padded) {
            return [
                this.ndc[0].padStart(5, "0"),
                this.ndc[1].padStart(4, "0"),
            ].join("");
        }

        return this.ndc.join("");

    }

    public toString(): string {
        return this.hyphenated();
    }

}