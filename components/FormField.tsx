import { useEffect, useState } from "react";
import { formSelects } from "../fixtures/formSelects";
import ReactDOMServer from "react-dom/server";
import { FormField } from "../types/form";

type Props = {
  field: FormField;
  id: string;
  setFormStatus: (state: {}) => void;
};

const FormField = ({ field, id, setFormStatus }: Props) => {
  const [value, setValue] = useState("");
  const { label, type, placeholder, required } = field;
  const updateFormStatus = () => {
    setFormStatus((state: {}) => {
      return {
        ...state,
        ...{ [id]: { value, valid: required ? !!value : true } },
      };
    });
  };

  useEffect(() => {
    updateFormStatus();
  }, [value]);
  return (
    <div className="space-y-1">
      {label && <h4>{label}</h4>}
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="border-2 border-blue-900 p-1 w-full"
        ></textarea>
      ) : type === "select" ? (
        <select
          onChange={(e) => setValue(e.target.value)}
          className="border-2 border-blue-900 p-1 w-full"
          defaultValue={""}
        >
          <option key={"no selection"} value={"no selection"}>
            -- select an option --
          </option>
          {formSelects[field.selectOptions].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="border-2 border-blue-900 p-1 w-full"
        />
      )}
    </div>
  );
};

export default FormField;
