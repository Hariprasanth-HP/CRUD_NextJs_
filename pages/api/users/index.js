// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "../../../dataBase/conn";
import {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} from "../../../dataBase/controller";
export default async function handler(req, res) {
  connectMongo().catch((error) => {
    res.status(405).json({ error: `error in connecting database ${error}` });
  });

  //type of request
  const { method } = req;
  switch (method) {
    case "GET":
      // res.status(200).json({ method: "GET Request" });
      getUsers(req, res);
      break;
    case "POST":
      // res.status(200).json({ method: "POST Request" });
      postUser(req, res);
      break;
    case "PUT":
      // res.status(200).json({ method: "PUT Request" });
      putUser(req, res);
      break;
    case "DELETE":
      // res.status(200).json({ method: "DELETE Request" });
      deleteUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed`);
  }
}
