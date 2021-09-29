import React, { useState } from "react";
import { Formik } from "formik";
import { Link, withRouter } from "react-router-dom";

import api from "~/services/api";
import useStore from "~/store";

import { StandaloneFormPage, FormCard, FormTextInput } from "tabler-react";
import logoImg from "~/assets/img/tabler.png";

function ClassBondPage(props) {
  const [textButton, setTextButton] = useState({ text: "Entrar" });
  const { user, linkUser, addClasse } = useStore();

  var stringsForm = {
    title: "Juntar-se a turma",
    keyLabel: "Código da turma",
    keyPlaceholder: "Insira o código",
  };

  return (
    <Formik
      initialValues={{
        key: "",
      }}
      onSubmit={async (values, { setValues, setErrors }) => {
        const { key } = values;
        setTextButton({ text: "Carregando..." });

        try {
          const { data } = await api.put("/class/join", {
            key,
            _id: user._id,
          });

          linkUser();
          addClasse(data.classe._id);

          props.history.push("/topicos");
        } catch (err) {
          setTextButton({ text: "Entrar" });
          setErrors({ key: err.response.data.error });
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
              name="key"
              label={stringsForm.keyLabel}
              placeholder={stringsForm.keyPlaceholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values && values.key}
              error={errors && errors.key}
            />
          </FormCard>
        </StandaloneFormPage>
      )}
    />
  );
}

export default withRouter(ClassBondPage);
