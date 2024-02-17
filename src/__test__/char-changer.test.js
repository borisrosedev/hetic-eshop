import charChanger from "../utils/char-changer";
import { describe, it, expect } from "vitest";

describe("Char Changer Suite", () => {
  describe("Function charChanger itself", () => {
    it("should be defined", () => {
      expect(charChanger).toBeDefined();
    });

    it("should be return a string if first param is a string and second lower ", () => {
      expect(charChanger("word", "lower")).toBeTypeOf("string");
    });
    it("should be return a string if first param is a string and second upper ", () => {
      expect(charChanger("word", "upper")).toBeTypeOf("string");
    });
  });

  describe("params testing", () => {
    it("should return HELLO is firstname param is hello and second upper", () => {
      expect(charChanger("hello", "upper")).toBe("HELLO");
    });

    it("should return hello is firstname param is HELLO and second lower", () => {
      expect(charChanger("HELLO", "lower")).toBe("hello");
    });
  });
});
