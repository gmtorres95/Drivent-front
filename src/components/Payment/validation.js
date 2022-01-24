export default function validation(body) {
  const {
    cardNumber,
    name,
    validThru,
    cvc
  } = body;
  
  if (
    (cardNumber.replace(/[^\d]+/g, "").length === 16) && 
      (typeof(name) === "string" && 
      name.length >= 4) && 
      (validThru.replace(/[^\d]+/g, "").length === 4) && 
      (cvc.replace(/[^\d]+/g, "").length === 3)
  ) {
    return true;
  }

  return false;
}
