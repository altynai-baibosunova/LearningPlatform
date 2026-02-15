const API_URL = import.meta.env.VITE_API_URL;

export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  name: string;
  email: string;
  password: string;
};

export const loginUser = async (credentials: Credentials) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials)
  });
  if (!res.ok) return null;
  return res.json();
};

export const registerUser = async (user: User) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  if (!res.ok) return null;
  return res.json();
};
