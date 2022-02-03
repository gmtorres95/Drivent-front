import { useState, useContext } from "react";
import { toast } from "react-toastify";

import AuthLayout from "../../layouts/Auth";

import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import Link from "../../components/Link";
import { Row, Title, Label } from "../../components/Auth";

import EventInfoContext from "../../contexts/EventInfoContext";
import UserContext from "../../contexts/UserContext";

import useApi from "../../hooks/useApi";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingSignIn, setLoadingSignIn] = useState(false);

  const { auth } = useApi();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);
  
  function submit(event) {
    event.preventDefault();
    if (!email || !password) {
      return toast("Preencha os campos corretamente!");
    }
    setLoadingSignIn(true);
    auth.signIn(email, password)
      .then(response => {
        setLoadingSignIn(false);
        setUserData(response.data);
      }).catch(error => {
        setLoadingSignIn(false);
        if (error.response.status === 401) {
          return toast("Email e/ou Senha incorreto(s)!");
        }
        if (error.response.status === 422) {
          return toast("Email e/ou Senha incorreto(s)!");
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
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input 
            label="E-mail" 
            type="text" 
            fullWidth 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            disabled={loadingSignIn}
          />
          <Input 
            label="Senha" 
            type="password" 
            fullWidth 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            disabled={loadingSignIn}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Entrar</Button>
        </form>
      </Row>
      <Row>
        <Link to={loadingSignIn || "/enroll"}>Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
