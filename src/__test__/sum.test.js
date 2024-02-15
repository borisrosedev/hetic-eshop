import { sum } from "../utils/sum";
import { expect, test, describe, vi } from "vitest";

describe.todo('Others suits to be done')
describe.only('Sum Suite', () => {
    test.skip('adds 1 + 2 to equel 3', () => {
        expect(sum(1,2)).toBe(3)
    })
    test('adds -2 +  2 to equel 0', () => {
        expect(sum((-2),2)).toBe(0)
    })
})

