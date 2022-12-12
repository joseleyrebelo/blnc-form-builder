import { FormSelectTypes } from "./formSelects";

export type FieldsTypes =
  | "text"
  | "number"
  | "textarea"
  | "password"
  | "select";

export type FieldFactory<FieldType> = {
  type: Extract<FieldsTypes, FieldType>;
  label?: string;
  placeholder?: string;
  required?: boolean;
};

export interface TextField extends FieldFactory<"text"> {}

export interface TextAreaField extends FieldFactory<"textarea"> {}

export interface NumberField extends FieldFactory<"number"> {}

export interface PasswordField extends FieldFactory<"password"> {}

export interface SelectField extends FieldFactory<"select"> {
  selectOptions: FormSelectTypes;
}

export type FormField =
  | TextField
  | TextAreaField
  | NumberField
  | SelectField
  | PasswordField;

export type FormType = {
  title: string;
  subtitle: string;
  fields: { [key: string]: FormField };
};
