const API_URL = import.meta.env.VITE_API_URL;

export type Subject = {
  id: string;
  name: string;
};

export const getSubjects = async (): Promise<Subject[]> => {
  const res = await fetch(`${API_URL}/subjects`);
  if (!res.ok) return [];
  return res.json();
};
