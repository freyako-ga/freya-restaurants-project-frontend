const BACKEND_URL = import.meta.env.VITE_DJANGO_BACKEND_URL;
console.log("Backend URL:", BACKEND_URL);

const getUser = () => {
  const access = localStorage.getItem('access');
  if (!access) return null;
  const user = JSON.parse(atob(access.split('.')[1]));
  return user;
};

const signup = async (formData) => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/sign-up/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.error || 'Failed to sign up');
    }
    return json;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signin = async (user) => {
  try {
    const res = await fetch(`${BACKEND_URL}/auth/sign-in/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.error || 'Invalid login credentials');
    }

    if (json.access) {
      localStorage.setItem('access', json.access);
      const user = JSON.parse(atob(json.access.split('.')[1]));
      return user;
    } else {
      throw new Error('No access token received');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const signout = () => {
  localStorage.removeItem('access');
};

export { signup, signin, getUser, signout };

