import { Request, Response } from "express";
import { getInfo } from "../services";

export async function getLenovoInfo(req: Request, res: Response) {
  const lenovoProducts = await getInfo("Lenovo");
  res.status(200).send(lenovoProducts);
}

export async function searchForProduct(req: Request, res: Response) {
  const searchFor = req.params.product;
  const possibleProduct = await getInfo(searchFor);
  res.status(200).send(possibleProduct);
}
