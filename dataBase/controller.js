import Users from "../model/user";
export async function getUsers(req, res) {
  try {
    console.log("usersss", Users);
    const users = await Users.find({});
    if (!users) {
      return res.status(404).json({
        error: "Data not found",
      });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      error: "error while fetching ",
    });
  }
}

export async function getUser(req, res) {
  try {
    console.log("usersss", Users);
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findById(userId);
      return res.status(200).json(user);
    }
    res.status(404).json({
      error: "Data not found",
    });
  } catch (error) {
    res.status(404).json({
      error: "cannot get the user ",
    });
  }
}
export async function postUser(req, res) {
  try {
    const formData = req.body;
    console.log("formData", formData);
    if (!formData) {
      return res.status(404).json({ error: "formData is not found" });
    }
    Users.create(formData, function (err, data) {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({
      error: { error },
    });
  }
}
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(formData);
    }
    res.status(404).json({ error: "userID not found" });
  } catch (error) {
    res.status(404).json({
      error: { error },
    });
  }
}
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      await Users.findByIdAndDelete(userId);
      return res.status(200).json(userId);
    }
    res.status(404).json({ error: "userID not found" });
  } catch (error) {
    res.status(404).json({
      error: { error },
    });
  }
}
