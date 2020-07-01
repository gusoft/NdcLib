import { NdcProduct } from './../../src/ndcProduct';
import { NdcPackage } from '../../src';

describe("Ndc", () => {
    test("Can parse raw ndcs", () => {

        const cases = [
            "1111-9999-99",
            "22222-999-99",
            "33333-9999-9",
        ];

        const results = [
            "1111-9999-99",
            "22222-999-99",
            "33333-9999-9",
        ];

        for (let i = 0; i < cases.length; i++) {
            const testCase = cases[i];
            const expectedResult = results[i];
            const ndc = new NdcPackage(testCase);
            expect(ndc.hyphenated()).toStrictEqual(expectedResult);
        }
    });

    test("Can spot invalid raw ndcs", () => {

        const cases = [
            "1111-99999-99",
            "222222-999-99",
            "333333-9999-9",
            "777779999999",
            "7777799999",
        ];

        for (let i = 0; i < cases.length; i++) {
            const testCase = cases[i];
            const ndc = () => new NdcPackage(testCase);
            expect(ndc).toThrowError("Invalid NDC.");
        }
    });

    test("Can produce hyphenated", () => {

        const cases = [
            "1111-9999-99",
            "22222-999-99",
            "33333-9999-9",
        ];

        const results = [
            "1111-9999-99",
            "22222-999-99",
            "33333-9999-9",
        ];

        for (let i = 0; i < cases.length; i++) {
            const testCase = cases[i];
            const expectedResult = results[i];
            const ndc = new NdcPackage(testCase);
            expect(ndc.hyphenated()).toStrictEqual(expectedResult);
        }
    });

    test("Can produce hyphenated (padded)", () => {

        const cases = [
            "1111-9999-99",
            "22222-999-99",
            "33333-9999-9",         
        ];

        const results = [
            "01111-9999-99",
            "22222-0999-99",
            "33333-9999-09",
        ];

        for (let i = 0; i < cases.length; i++) {
            const testCase = cases[i];
            const expectedResult = results[i];
            const ndc = new NdcPackage(testCase);
            expect(ndc.hyphenated(true)).toEqual(expectedResult);
        }
    });

    test("Can convert from package to product", () => {

        const cases = [
            "1111-9999-99",
            "22222-999-99",
            "33333-9999-9",         
        ];

        const results = [
            "1111-9999",
            "22222-999",
            "33333-9999",
        ];

        for (let i = 0; i < cases.length; i++) {
            const testCase = cases[i];
            const expectedResult = results[i];
            const ndc = new NdcPackage(testCase);
            expect(ndc.product().hyphenated()).toEqual(expectedResult);
        }
    });

    test("Can parse raw product ndcs", () => {

        const cases = [
            "1111-9999",
            "22222-999",
            "33333-9999",
        ];

        const results = [
            "1111-9999",
            "22222-999",
            "33333-9999",
        ];

        for (let i = 0; i < cases.length; i++) {
            const testCase = cases[i];
            const expectedResult = results[i];
            const ndc = new NdcProduct(testCase);
            expect(ndc.hyphenated()).toStrictEqual(expectedResult);
        }
    });

    test("Can spot invalid raw product ndcs", () => {

        const cases = [
            "1111-99999",
            "222222-999",
            "333333-9999",
            "777779999999",
            "7777799999",
        ];

        for (let i = 0; i < cases.length; i++) {
            const testCase = cases[i];
            const ndc = () => new NdcProduct(testCase);
            expect(ndc).toThrowError("Invalid Product NDC.");
        }
    });

});