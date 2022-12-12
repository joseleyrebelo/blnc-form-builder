import { readFileSync } from "fs";

export const getFormJson = async (id: string) => {
  const path = `json/jsonForms/${id}.json`;
  return JSON.parse(readFileSync(path).toString());
};
