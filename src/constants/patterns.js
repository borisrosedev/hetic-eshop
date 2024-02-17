const PATTERNS = {
  password: "[a-zA-Z0-9\-!?]{10,12}",
  email: "[a-z]{2,20}[@]{1}[a-z]{2,7}[.]{1}[a-z]{2,6}",
  name: "[a-zA-Z\- ]{3,20}",
};

export default PATTERNS;
