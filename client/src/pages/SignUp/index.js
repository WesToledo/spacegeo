import React, { useState } from "react";
import { Formik } from "formik";
import { Link, withRouter } from "react-router-dom";

import { Container, FormCard, Form, Grid } from "tabler-react";

import api from "~/services/api";
import useStore from "~/store";

import logoImg from "~/assets/img/tabler.png";
import ModalAcceptTerms from "./UseTermModal";
import PrivacityTermModal from "./PrivacityTermModal";

function SignUpPage(props) {
  const [textButton, setTextButton] = useState({ text: "Criar conta" });

  const [openUseTermModal, setOpenUseTermModal] = useState(false);
  const [openPrivacityModal, setOpenPrivacityModal] = useState(false);

  const [sentToServer, setSentToServer] = useState(false);

  const [form, setForm] = useState({});

  const { addUser } = useStore();

  var stringsForm = {
    title: "Criar conta",
    emailLabel: "Login",
    emailPlaceholder: "Insira o login",
    passwordLabel: "Senha",
    passwordPlaceholder: "Senha",
  };

  async function handleSubmitServer() {
    try {
      const response = await api.post("/user/create", form);
      addUser({ ...response.data.user, token: response.data.token });
      if (response.data.user.type == "teacher") props.history.push("/topicos");
      else props.history.push("/vincular-turma");
    } catch (err) {
      console.log(err.response.data.error);
      setTextButton({ text: "Criar conta" });
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
      render={({
        values,
        errors,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
      }) => (
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
                            requi
                            type="text"
                            placeholder="Digite seu nome completo"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values && values.name}
                            error={errors && errors.name}
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
                            value={values && values.email}
                            error={errors && errors.email}
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
                            value={values && values.birthday}
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
                            placeholder="Informe qual instituição de ensino faz parte"
                            name="institution"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values && values.institution}
                            error={errors && errors.institution}
                          />
                        </Form.Group>
                      </Grid.Col>
                    </Grid.Row>

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
            setSentToServer={setSentToServer}
            handleSubmit={handleSubmitServer}
          />
        </div>
      )}
    />
  );
}

export default withRouter(SignUpPage);
