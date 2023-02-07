const BASE_URL = "http://localhost:3000/";
export async function getUsers() {
  const response = await fetch(`${BASE_URL}api/users`);
  const json = await response.json();
  return json;
}

export async function getUser(userId) {
  const response = await fetch(`${BASE_URL}api/users/${userId}`);
  const json = await response.json();
  if (json) return json;
  return {};
}

export async function postUser(formData) {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}api/users`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    res.status(404).json({ error: error });
  }
}

export async function putUser(userId, formData) {
  try {
    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}api/users/${userId}`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    res.status(404).json({ error: error });
  }
}

export async function deleteUser(userId) {
  try {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(`${BASE_URL}api/users/${userId}`, options);
    const json = await response.json();
    return json;
  } catch (error) {
    res.status(404).json({ error: error });
  }
}
