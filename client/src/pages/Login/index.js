import React, { useState } from "react";
import { Formik } from "formik";
import { Link, withRouter } from "react-router-dom";

import GoogleLogin from "react-google-login";
// or

import api from "~/services/api";
import useStore from "~/store";

import { StandaloneFormPage, FormCard, FormTextInput } from "tabler-react";
import logoImg from "~/assets/img/logo_novo.png";

function LoginPage(props) {
  const [textButton, setTextButton] = useState({ text: "Entrar" });

  const { addUser } = useStore();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  var stringsForm = {
    title: "",
    emailLabel: "Email",
    emailPlaceholder: "Insira o email",
    passwordLabel: "Senha",
    passwordPlaceholder: "Senha",
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  function handleOnChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    setTextButton({ text: "Carregando..." });

    console.log(values);

    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      addUser({ ...response.data.user, token: response.data.token });

      if (response.data.user.type === "teacher") {
        props.history.push("/topicos");
      }

      if (response.data.user.linked) {
        props.history.push("/topicos");
      } else {
        props.history.push("/vincular-turma");
      }
    } catch (err) {
      console.log(err);
      setTextButton({ text: "Entrar" });
    }
  }

  const handleLogin = async (googleData) => {
    const res = await api.post("/login", {
      token: googleData.tokenId,
      type: "google_api",
    });

    console.log(res.data);
  };

  return (
    <>
      <StandaloneFormPage imageURL={logoImg}>
        <FormCard
          title={stringsForm.title}
          buttonText={textButton.text}
          onSubmit={handleSubmit}
        >
          <FormTextInput
            onChange={handleOnChange}
            name="email"
            label={stringsForm.emailLabel}
            placeholder={stringsForm.emailPlaceholder}
            value={values && values.email}
          />
          <FormTextInput
            onChange={handleOnChange}
            name="password"
            label={stringsForm.passwordLabel}
            type="password"
            placeholder={stringsForm.passwordLabel}
            value={values && values.password}
          />
          <GoogleLogin
            clientId="887032542043-b0ojvgrlv7hd7ol0n45bs9svvdubab07.apps.googleusercontent.com"
            buttonText="Criar Conta pelo Google"
            onSuccess={handleLogin}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <p>
            Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </FormCard>
      </StandaloneFormPage>
    </>
  );
}

export default withRouter(LoginPage);
