import checker from "../utils/checker";
import { describe, it, expect } from "vitest";
describe.only("Checker Suite", () => {

  it("checker should be defined", () => {
    expect(checker).toBeDefined();
  })

  it("checker should result in a boolean no matter what", () => {
    expect(checker(null)).toBeTypeOf("boolean")
  })
  it("testing alexandress and type = password should result in true", () => {
    expect(checker('alexandress', 'password')).toBe(true);
  });

  it("testing alexandre and type = password should result in false", () => {
    expect(checker('alexandre', 'password')).not.toBe(true);
  })
});
