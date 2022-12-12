// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { existsSync, readFileSync } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { getFormJson } from "../../util/api/general";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;

  let { id } = query;

  if (id && typeof id === "string") {
    try {
      res.status(200).send(getFormJson(id));
    } catch {
      res
        .status(400)
        .send({ message: "Sorry an error occurred - please try again later." });
    } finally {
    }
  } else {
    res.status(400).send({ message: "Missing parameter id --." });
    return true;
  }
}
