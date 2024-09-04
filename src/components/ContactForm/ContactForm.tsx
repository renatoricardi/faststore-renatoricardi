import { useCallback, useState } from "react";
import { gql } from "@faststore/core/api";

import styles from "./contact-form.module.scss";

//import { useLazyQuery_unstable as useLazyQuery } from "@faststore/core/experimental";
import { useLazyQuery } from "../../hook/useLazyQuery";

export interface ContactFormProps {
  title: string;
  name: string;
  email: string;
  phone: string;
}

import {
  InputField as UIInputField,
  Button as UIButton,
} from "@faststore/ui";

export const mutation = gql(`
      mutation SubmitContactForm($data: ContactFormInput!) {
        submitContactForm(input: $data) {
          message
        }
      }
    `);

type MutationData = {
  submitContactForm: {
    message: string;
  };
};

export const ContactForm = (props: ContactFormProps) => {
  const [submitContactForm, { data, error }] = useLazyQuery<MutationData>(mutation, {
    data: { name: "", email: "", phone: "" },
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState<string | undefined>(undefined);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formValues = {
        name,
        email,
        phone,
      };

      submitContactForm({ data: formValues });

      if (error) {
        console.error(error);
      }

      if (data) {
        setName("");
        setEmail("");
        setPhone("");
        setMessage(data.submitContactForm.message)
        
      }
    },
    [submitContactForm]
  );

  return (
    <section className={styles.contactForm}>
      <div>
        <h2>
          {props.title}
        </h2>
      </div>
      <form onSubmit={onSubmit}>
        <UIInputField
          id="name"
          label={props.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <UIInputField
          id="email"
          label={props.email ? props.email : 'E-mail'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <UIInputField
          id="phone"
          label={props.phone ? props.phone : "Phone"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p id="message">{message}</p>
        <UIButton type="submit" variant="primary">
          Enviar
        </UIButton>
      </form>
    </section>
  );
};

export default ContactForm;