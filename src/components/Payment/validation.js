export default function validation(body) {
  const {
    cardNumber,
    name,
    validThru,
    cvc
  } = body;

  let cardType = cardNumber.substring(0, 2);

  function validCase(cardType) {
    const cases =  {
      30: (cardNumber.replace(/[^\d]+/g, "").length === 14) && 
      (typeof(name) === "string" && name.length >= 4) && 
      (validThru.replace(/[^\d]+/g, "").substring(0, 2) <= 12 &&
      validThru.replace(/[^\d]+/g, "").substring(2) >= 22) && 
      (cvc.replace(/[^\d]+/g, "").length === 3),
      34: (cardNumber.replace(/[^\d]+/g, "").length === 15) && 
      (typeof(name) === "string" && name.length >= 4) && 
      (validThru.replace(/[^\d]+/g, "").substring(0, 2) <= 12 &&
      validThru.replace(/[^\d]+/g, "").substring(2) >= 22) && 
      (cvc.replace(/[^\d]+/g, "").length === 4),
      36: (cardNumber.replace(/[^\d]+/g, "").length === 14) && 
      (typeof(name) === "string" && name.length >= 4) && 
      (validThru.replace(/[^\d]+/g, "").substring(0, 2) <= 12 &&
      validThru.replace(/[^\d]+/g, "").substring(2) >= 22) && 
      (cvc.replace(/[^\d]+/g, "").length === 3),
      37: (cardNumber.replace(/[^\d]+/g, "").length === 15) && 
      (typeof(name) === "string" && name.length >= 4) && 
      (validThru.replace(/[^\d]+/g, "").substring(0, 2) <= 12 &&
      validThru.replace(/[^\d]+/g, "").substring(2) >= 22) && 
      (cvc.replace(/[^\d]+/g, "").length === 4),
      38: (cardNumber.replace(/[^\d]+/g, "").length === 14) && 
      (typeof(name) === "string" && name.length >= 4) && 
      (validThru.replace(/[^\d]+/g, "").substring(0, 2) <= 12 &&
      validThru.replace(/[^\d]+/g, "").substring(2) >= 22) && 
      (cvc.replace(/[^\d]+/g, "").length === 3),
      default: (cardNumber.replace(/[^\d]+/g, "").length === 16) && 
      (typeof(name) === "string" && name.length >= 4) && 
      (validThru.replace(/[^\d]+/g, "").substring(0, 2) <= 12 &&
      validThru.replace(/[^\d]+/g, "").substring(2) >= 22) &&  
      (cvc.replace(/[^\d]+/g, "").length === 3),
    };
    return cases[cardType] || cases.default;
  }

  if(validCase(cardType)) {
    return true;
  } else {
    return false;
  }
}
