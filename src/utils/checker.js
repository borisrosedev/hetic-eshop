import patterns from "../constants/patterns";
export default function (somethingToCheck, type) {
  let result = false;
  if (type == "password") {
    const newRegExp = new RegExp(patterns.password, "g");
    result = newRegExp.test(somethingToCheck);
  }
  return result;
}
