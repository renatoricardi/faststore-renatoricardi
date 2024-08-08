
import React from "react";

export interface CustomFormProps {
  title: string;
  name: string;
  email: string;
  phone: string;
}

/*<section>
      <h3>{props.title}</h3>
      <input placeholder={props.name ? props.name : "Nome"}></input>
      <input placeholder={props.email ? props.email : "Email"}></input>
      <input placeholder={props.phone ? props.phone : "Telefone"}></input>
      <button type="button">Enviar</button>
    </section>*/

export default function CustomForm(props: CustomFormProps) {
  return (
    <section className="section section_section__6iqtV section-newsletter layout__section">
        <div data-testid="fs-newsletter" data-fs-content="newsletter" data-fs-newsletter="" data-fs-newsletter-color-variant="main">
            <form data-testid="fs-newsletter-form" data-fs-newsletter-form="true">
                <header data-testid="fs-newsletter-header" data-fs-newsletter-header="true">
                    <h3 data-fs-newsletter-header-title="true">
                    <svg data-fs-icon="true" data-testid="fs-icon" width="32" height="32" stroke-width="16" aria-label="Envelope">
                        <use href="/icons.svg#Envelope"></use>
                    </svg>
                    {props.title}
                    </h3>
                </header>
                <div data-testid="fs-newsletter-content" data-fs-newsletter-content="true">
                    <div data-fs-input-field="true" data-testid="fs-input-field">
                        <input data-fs-input="true" data-testid="fs-input" id="newsletter-name"></input>
                        <label data-fs-label="true" data-testid="fs-label">{props.name ? props.name : "Nome"}</label>
                    </div>
                    <div data-fs-input-field="true" data-testid="fs-input-field">
                        <input data-fs-input="true" data-testid="fs-input" id="newsletter-email"></input>
                        <label data-fs-label="true" data-testid="fs-label">{props.email ? props.email : "Email"}</label>
                    </div>
                    <div data-fs-input-field="true" data-testid="fs-input-field">
                        <input data-fs-input="true" data-testid="fs-input" id="newsletter-phone"></input>
                        <label data-fs-label="true" data-testid="fs-label">{props.phone ? props.phone : "Telefone"}</label>
                    </div>
                    <button data-fs-button="true" data-fs-button-inverse="true" data-fs-button-size="regular" data-fs-button-variant="secondary" data-testid="fs-button" type="submit">
                    <div data-fs-button-wrapper="true"><span>Enviar</span></div>
                    </button>
                </div>
            </form>
        </div>
    </section>
);
}