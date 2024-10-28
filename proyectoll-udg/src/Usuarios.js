// src/Usuarios.js

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Usuarios.css"; // Importa el archivo CSS

const Usuarios = () => {
  const [file, setFile] = useState(null);

  // Opciones para el select de motivo de préstamo
  const motivosPrestamo = [
    "Gastos personales",
    "Educación",
    "Negocio",
    "Salud",
    "Compra de vehículo",
    "Vivienda",
    "Otro"
  ];

  // Esquema de validación con Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    email: Yup.string().email("Email inválido").required("El email es obligatorio"),
    password: Yup.string().min(6, "La contraseña debe tener al menos 6 caracteres").required("La contraseña es obligatoria"),
    domicilio: Yup.string().required("El domicilio es obligatorio"),
    colonia: Yup.string().required("La colonia es obligatoria"),
    codigoPostal: Yup.string().matches(/^[0-9]{5}$/, "Debe ser un código postal válido").required("El código postal es obligatorio"),
    ciudad: Yup.string().required("La ciudad es obligatoria"),
    pais: Yup.string().required("El país es obligatorio"),
    edad: Yup.number().min(18, "Debes ser mayor de 18 años").required("La edad es obligatoria"),
    fechaNacimiento: Yup.date().required("La fecha de nacimiento es obligatoria"),
    telefono: Yup.string().matches(/^[0-9]{10}$/, "Debe ser un teléfono válido de 10 dígitos").required("El teléfono es obligatorio"),
    telefonoFamiliar: Yup.string().matches(/^[0-9]{10}$/, "Debe ser un teléfono válido de 10 dígitos").required("El teléfono de un familiar es obligatorio"),
    motivoPrestamo: Yup.string().required("El motivo del préstamo es obligatorio"),
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => formData.append(key, value));
    formData.append("file", file);

    console.log("Datos enviados:", values, file);
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <Formik
        initialValues={{
          name: "", email: "", password: "", domicilio: "", colonia: "", codigoPostal: "", ciudad: "", pais: "", edad: "", fechaNacimiento: "", telefono: "", telefonoFamiliar: "", motivoPrestamo: ""
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Nombre:</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="email">Correo:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="password">Contraseña:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="domicilio">Domicilio:</label>
              <Field type="text" name="domicilio" />
              <ErrorMessage name="domicilio" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="colonia">Colonia:</label>
              <Field type="text" name="colonia" />
              <ErrorMessage name="colonia" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="codigoPostal">Código Postal:</label>
              <Field type="text" name="codigoPostal" />
              <ErrorMessage name="codigoPostal" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="ciudad">Ciudad:</label>
              <Field type="text" name="ciudad" />
              <ErrorMessage name="ciudad" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="pais">País:</label>
              <Field type="text" name="pais" />
              <ErrorMessage name="pais" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="edad">Edad:</label>
              <Field type="number" name="edad" />
              <ErrorMessage name="edad" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
              <Field type="date" name="fechaNacimiento" />
              <ErrorMessage name="fechaNacimiento" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="telefono">Teléfono:</label>
              <Field type="text" name="telefono" />
              <ErrorMessage name="telefono" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="telefonoFamiliar">Teléfono de algún familiar:</label>
              <Field type="text" name="telefonoFamiliar" />
              <ErrorMessage name="telefonoFamiliar" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="motivoPrestamo">Motivo del Préstamo:</label>
              <Field as="select" name="motivoPrestamo">
                <option value="">Selecciona un motivo</option>
                {motivosPrestamo.map((motivo, index) => (
                  <option key={index} value={motivo}>{motivo}</option>
                ))}
              </Field>
              <ErrorMessage name="motivoPrestamo" component="div" className="error-message" />
            </div>

            <div>
              <label htmlFor="file">Subir documentos:</label>
              <input type="file" onChange={handleFileChange} />
              {file && <p className="archivo-seleccionado">Archivo seleccionado: {file.name}</p>}
            </div>

            <button type="submit">Registrarse</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Usuarios;
