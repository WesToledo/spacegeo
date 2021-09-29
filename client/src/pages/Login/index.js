import React, { useState } from "react";
import { Formik } from "formik";
import { Link, withRouter } from "react-router-dom";

import api from "~/services/api";
import useStore from "~/store";

import { StandaloneFormPage, FormCard, FormTextInput } from "tabler-react";
import logoImg from "~/assets/img/tabler.png";

function LoginPage(props) {
  const [textButton, setTextButton] = useState({ text: "Entrar" });

  const { addUser } = useStore();

  var stringsForm = {
    title: "",
    emailLabel: "Email",
    emailPlaceholder: "Insira o email",
    passwordLabel: "Senha",
    passwordPlaceholder: "Senha",
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values, { setValues, setErrors }) => {
        const { email, password } = values;
        setTextButton({ text: "Carregando..." });

        try {
          const response = await api.post("/login", {
            email,
            password,
          });
          console.log("USER->", response.data);

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
          setTextButton({ text: "Entrar" });
          setErrors({ email: "Erro ao tentar logar" + err.message });
        }
      }}
      render={({
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <StandaloneFormPage imageURL={logoImg}>
          <FormCard
            title={stringsForm.title}
            buttonText={textButton.text}
            onSubmit={handleSubmit}
          >
            <FormTextInput
              name="email"
              label={stringsForm.emailLabel}
              placeholder={stringsForm.emailPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values && values.email}
              error={errors && errors.email}
            />
            <FormTextInput
              name="password"
              label={stringsForm.passwordLabel}
              type="password"
              placeholder={stringsForm.passwordLabel}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values && values.password}
              error={errors && errors.password}
            />
            <p>
              Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </FormCard>
        </StandaloneFormPage>
      )}
    />
  );
}

export default withRouter(LoginPage);
