// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../../dataBase/conn";
import { getUser, putUser, deleteUser } from "../../../dataBase/controller";
export default async function handler(req, res) {
  connectMongo().catch((error) => {
    res.status(405).json({ error: `error in connecting database ${error}` });
  });

  //type of request
  const { method } = req;
  switch (method) {
    case "GET":
      getUser(req, res);
      break;
    case "PUT":
      putUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed`);
  }
}
