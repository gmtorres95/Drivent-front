import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";

export default function CreditCardInfoInput({ mask, onChange, name, onFocus, placeholder }) {
  return (
    <InputMask
      mask={mask}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      onFocus={onFocus}
    >
      {() => <TextField
        variant="outlined"
        mask={mask}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        onFocus={onFocus}
      />}
    </InputMask>
  );
}
