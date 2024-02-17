import PATTERNS from "../constants/patterns";
export default function (somethingToCheck, type) {
  let result = false;
  let newRegExp = "";
  if (type == "password") {
    newRegExp = new RegExp(PATTERNS.password, "g");
    result = newRegExp.test(somethingToCheck)
  }
  if(type == 'email'){
    newRegExp = new RegExp(PATTERNS.email, "g");
    result = newRegExp.test(somethingToCheck)
  }

  if(type == 'name'){
    newRegExp = new RegExp(PATTERNS.name, "g");
    result = newRegExp.test(somethingToCheck)
  }
  
  return result;
}
