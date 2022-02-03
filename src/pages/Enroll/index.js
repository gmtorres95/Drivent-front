import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import AuthLayout from "../../layouts/Auth";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Row, Title, Label } from "../../components/Auth";
import Link from "../../components/Link";

import EventInfoContext from "../../contexts/EventInfoContext";

import useApi from "../../hooks/useApi";

export default function Enroll() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loadingEnroll, setLoadingEnroll] = useState(false);

  const history = useHistory();

  const { user } = useApi();
  
  const { eventInfo } = useContext(EventInfoContext);

  function submit(event) {
    event.preventDefault();

    if (!email || !password) {
      return toast("Preencha os campos corretamente");
    }
    if (password !== confirmPassword) {
      return toast("As senhas devem ser iguais!");
    } 
    setLoadingEnroll(true);
    user.signUp(email, password)
      .then(response => {
        setLoadingEnroll(false);
        toast("Inscrito com sucesso! Por favor, faça login.");
        history.push("/sign-in");
      }).catch(error => {
        setLoadingEnroll(false);
        if(error?.response?.status !== 500) {
          return toast(error.response.data.message);
        }
        toast("Não foi possível conectar ao servidor!");
      });
  }

  return (
    <AuthLayout background={eventInfo.backgroundImage}>
      <Row>
        <img src={eventInfo.logoImage} alt="Event Logo" />
        <Title>{eventInfo.eventTitle}</Title>
      </Row>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submit}>
          <Input 
            label="E-mail" 
            type="text" fullWidth 
            value={email} onChange={e => setEmail(e.target.value)} 
            disabled={loadingEnroll}
          />
          <Input 
            label="Senha" 
            type="password" fullWidth 
            value={password} onChange={e => setPassword(e.target.value)} 
            disabled={loadingEnroll}
          />
          <Input 
            label="Repita sua senha" 
            type="password" fullWidth 
            value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} 
            disabled={loadingEnroll}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingEnroll}>Inscrever</Button>
        </form>
      </Row>
      <Row>
        <Link to={loadingEnroll || "/sign-in"}>Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
