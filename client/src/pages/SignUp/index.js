import React, { useState } from "react";
import { Formik } from "formik";
import { Link, withRouter } from "react-router-dom";

import { Container, FormCard, Form, Grid } from "tabler-react";

import api from "~/services/api";
import useStore from "~/store";

import logoImg from "~/assets/img/logo_novo.png";
import ModalAcceptTerms from "./UseTermModal";
import PrivacityTermModal from "./PrivacityTermModal";

function SignUpPage(props) {
  const [textButton, setTextButton] = useState({ text: "Criar conta" });
  const [errorMessage, setErrorMessage] = useState("");

  const [openUseTermModal, setOpenUseTermModal] = useState(false);
  const [openPrivacityModal, setOpenPrivacityModal] = useState(false);

  const [form, setForm] = useState({});

  const { addUser, user } = useStore();

  var stringsForm = {
    title: "Criar conta",
    emailLabel: "Login",
    emailPlaceholder: "Insira o login",
    passwordLabel: "Senha",
    passwordPlaceholder: "Senha",
  };

  async function handleSubmitServer() {
    try {
      const response = await api.post("/user/create", {
        ...form,
        login_with: "default_form",
        user_terms_accepted: true,
      });

      addUser({ ...response.data.user, token: response.data.token });

      if (response.data.user.type == "teacher") props.history.push("/topicos");
      else props.history.push("/vincular-turma");
    } catch (err) {
      setErrorMessage(err.response.data.error);
      setTextButton({ text: "Criar conta" });
    }
  }
  async function handleGoogleSubmit() {
    try {
      const response = await api.put("/finish-create", {
        ...form,
        email: user.email,
      });

      addUser({ ...response.data.user, token: response.data.token });

      if (response.data.user.type == "teacher") props.history.push("/topicos");
      else props.history.push("/vincular-turma");
    } catch (err) {
      console.log(err);
      setTextButton({ text: "Criar conta" });
      setErrorMessage(err.response.data.error);
      return;
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        birthday: "",
        institution: "",
        type: "student",
        password: "",
        confirm_password: "",
      }}
      onSubmit={async (values, { setValues, setErrors }) => {
        setTextButton({ text: "Carregando..." });

        const { password, confirm_password } = values;

        if (password !== confirm_password) {
          setErrors({ confirm_password: "Senhas não coincidentes" });
          setTextButton({ text: "Criar conta" });
          return;
        }

        setForm({
          ...values,
          type: values.type,
          linked: values.type == "teacher",
        });

        setOpenUseTermModal(true);
      }}
      render={({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <div className="page">
          <div className="page-single">
            <Container>
              <div className="text-center mb-6">
                <div>
                  <img src={logoImg} className="h-6"></img>
                </div>
              </div>
              <Grid.Row className="justify-content-center">
                <Grid.Col lg={8} sm={12} xs={12}>
                  <FormCard
                    title={stringsForm.title}
                    buttonText={textButton.text}
                    onSubmit={handleSubmit}
                  >
                    <Grid.Row>
                      <Grid.Col md={6} sm={12} xs={12}>
                        <Form.Group>
                          <Form.Label>Nome completo</Form.Label>
                          <Form.Input
                            required
                            type="text"
                            placeholder="Digite seu nome completo"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={user.login_with == "google_api"}
                            value={
                              user.login_with == "google_api"
                                ? user.name
                                : values.name
                            }
                            error={errors.name}
                          />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col sm={12} xs={12} md={6}>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Input
                            required
                            type="email"
                            placeholder="Digite seu email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={user.login_with == "google_api"}
                            value={
                              user.login_with == "google_api"
                                ? user.email
                                : values.email
                            }
                            error={errorMessage && errorMessage}
                          />
                        </Form.Group>
                      </Grid.Col>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Col sm={12} xs={12} md={4}>
                        <Form.Group label="Data de Nascimento">
                          <Form.MaskedInput
                            name="birthday"
                            placeholder="Qual sua data de nascimento ?"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.birthday}
                            error={errors && errors.birthday}
                            mask={[
                              /\d/,
                              /\d/,
                              "/",
                              /\d/,
                              /\d/,
                              "/",
                              /\d/,
                              /\d/,
                              /\d/,
                              /\d/,
                            ]}
                          />
                        </Form.Group>
                      </Grid.Col>
                      <Grid.Col sm={12} xs={12} md={6}>
                        <Form.Group label="Eu sou">
                          <Form.Radio
                            isInline
                            label="Aluno"
                            name="type"
                            value="student"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values && values.type === "student"}
                            error={errors && errors.type}
                          />
                          <Form.Radio
                            isInline
                            label="Professor"
                            name="type"
                            value="teacher"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values && values.type === "teacher"}
                            error={errors && errors.type}
                          />
                        </Form.Group>
                      </Grid.Col>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Col md={12} sm={12} xs={12}>
                        <Form.Group>
                          <Form.Label>Instituição</Form.Label>
                          <Form.Input
                            required
                            type="text"
                            placeholder="Informe qual instituição de ensino você faz parte"
                            name="institution"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values && values.institution}
                            error={errors && errors.institution}
                          />
                        </Form.Group>
                      </Grid.Col>
                    </Grid.Row>

                    {user.login_with != "google_api" && (
                      <>
                        <Grid.Row>
                          <Grid.Col md={6} sm={12} xs={12}>
                            <Form.Group>
                              <Form.Label>Senha</Form.Label>
                              <Form.Input
                                required
                                type="password"
                                placeholder="Digite a senha"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values && values.password}
                                error={errors && errors.password}
                              />
                            </Form.Group>
                          </Grid.Col>
                        </Grid.Row>

                        <Grid.Row>
                          <Grid.Col md={6}>
                            <Form.Group>
                              <Form.Label>Confirmar senha</Form.Label>
                              <Form.Input
                                required
                                type="password"
                                placeholder="Digite novamente a senha"
                                name="confirm_password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values && values.confirm_password}
                                error={errors && errors.confirm_password}
                              />
                            </Form.Group>
                          </Grid.Col>
                        </Grid.Row>
                      </>
                    )}
                  </FormCard>
                </Grid.Col>
              </Grid.Row>
            </Container>
          </div>
          <ModalAcceptTerms
            open={openUseTermModal}
            setOpen={setOpenUseTermModal}
            openNextModal={() => setOpenPrivacityModal(true)}
          />
          <PrivacityTermModal
            open={openPrivacityModal}
            setOpen={setOpenPrivacityModal}
            handleSubmit={handleSubmitServer}
            handleGoogleSubmit={handleGoogleSubmit}
            user={user}
          />
        </div>
      )}
    />
  );
}

export default withRouter(SignUpPage);
