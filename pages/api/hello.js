// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../dataBase/conn";
export default function handler(req, res) {
  connectMongo();
  const { method } = req;
  res.status(200).json({
    name: "hari",
  });
}
