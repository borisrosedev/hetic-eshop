import checker from "../utils/checker";
import { describe, it, expect } from "vitest";
describe.only("Checker Suite", () => {
  describe("checker as a function", () => {
    it("checker should be defined", () => {
      expect(checker).toBeDefined();
    });
    it("checker should result in a boolean no matter what", () => {
      expect(checker(null)).toBeTypeOf("boolean");
    });
  });

  describe("checker params with type = password", () => {
    it("with first param : caroline should result in false", () => {
      expect(checker("caroline", "password")).toBe(false);
    });

    it("with first param : 20alexandra20 should result in true", () => {
      expect(checker("20alexandra20", "password")).toBe(true);
    });
  });

  describe("checker params with type = email", () => {
    it("with first param : boris@gmail.com should result in true", () => {
      expect(checker("boris@gmail.com", "email")).toBe(true);
    });
  });
});
