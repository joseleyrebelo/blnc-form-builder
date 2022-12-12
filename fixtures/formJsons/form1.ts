import { FormType } from "../../types/form";

export const form1: FormType = {
  title: "Payroll Enquiry",
  subtitle: "Please use this form for any Payroll related enquiries.",
  fields: {
    enquiryType: {
      type: "select",
      label: "What does your enquiry relate to?",
      placeholder: "",
      selectOptions: "EnquiryType",
      required: true,
    },
    payslipDate: {
      type: "text",
      label: "Date of payslip being queried (if applicable)?",
      placeholder: "____ / ____ / ________",
    },

    query: {
      type: "textarea",
      label: "Query",
      placeholder: "",
      required: true,
    },
  },
};
