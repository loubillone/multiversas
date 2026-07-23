import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FiSend } from "react-icons/fi";
import Swal from "sweetalert2";

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  reason: "",
  message: "",
};

const REASON_OPTIONS = [
  { value: "", label: "Seleccioná una opción" },
  { value: "constelacion-individual", label: "Constelación individual" },
  { value: "constelacion-grupal", label: "Constelación grupal" },
  { value: "asesoramiento", label: "Asesoramiento" },
  { value: "productos", label: "Productos de la tienda" },
  { value: "envios", label: "Envíos y entregas" },
  { value: "otra", label: "Otra consulta" },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Ingresá tu nombre y apellido.";
  }

  if (!values.email.trim()) {
    errors.email = "Ingresá tu correo electrónico.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Ingresá un correo electrónico válido.";
  }

  if (!values.reason) {
    errors.reason = "Seleccioná el motivo de tu consulta.";
  }

  if (!values.message.trim()) {
    errors.message = "Escribí tu mensaje.";
  } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `El mensaje debe tener al menos ${MIN_MESSAGE_LENGTH} caracteres.`;
  }

  return errors;
}

function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name] || errors[name]) {
      const nextValues = { ...values, [name]: value };
      const nextErrors = validate(nextValues);
      setErrors((prev) => {
        const updated = { ...prev };
        if (nextErrors[name]) {
          updated[name] = nextErrors[name];
        } else {
          delete updated[name];
        }
        return updated;
      });
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const nextErrors = validate(values);
    setErrors((prev) => {
      const updated = { ...prev };
      if (nextErrors[name]) {
        updated[name] = nextErrors[name];
      } else {
        delete updated[name];
      }
      return updated;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      reason: true,
      message: true,
    });

    if (Object.keys(nextErrors).length > 0) return;

    Swal.fire({
      icon: "success",
      title: "¡Gracias por escribir!",
      text: "Tu consulta fue registrada correctamente. Me pondré en contacto con vos a la brevedad.",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#6d5a91",
    });

    setValues(INITIAL_VALUES);
    setErrors({});
    setTouched({});
  };

  return (
    <Form className="contact-form" onSubmit={handleSubmit} noValidate>
      <Form.Group className="contact-form__group" controlId="contact-name">
        <Form.Label>Nombre y apellido</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ingresá tu nombre"
          isInvalid={Boolean(errors.name)}
          autoComplete="name"
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="contact-form__group" controlId="contact-email">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="nombre@correo.com"
          isInvalid={Boolean(errors.email)}
          autoComplete="email"
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="contact-form__group" controlId="contact-phone">
        <Form.Label>
          Teléfono <span className="contact-form__optional">(opcional)</span>
        </Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Ej.: 381 000 0000"
          autoComplete="tel"
        />
      </Form.Group>

      <Form.Group className="contact-form__group" controlId="contact-reason">
        <Form.Label>Motivo de la consulta</Form.Label>
        <Form.Select
          name="reason"
          value={values.reason}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={Boolean(errors.reason)}
        >
          {REASON_OPTIONS.map((option) => (
            <option
              key={option.value || "empty"}
              value={option.value}
              disabled={option.value === ""}
            >
              {option.label}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {errors.reason}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="contact-form__group" controlId="contact-message">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Contame en qué puedo ayudarte"
          isInvalid={Boolean(errors.message)}
        />
        <Form.Control.Feedback type="invalid">
          {errors.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        type="submit"
        className="btn-multi btn-multi-primary contact-form__submit"
      >
        <FiSend aria-hidden="true" />
        Enviar consulta
      </Button>
    </Form>
  );
}

export default ContactForm;
