//dang ky
export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isValidVietnamPhone = (phone: string) => {
  return /^(0|\+84)[0-9]{9}$/.test(phone);
};

export const isValidPassword = (password: string) => {
  return password.length >= 6;
};

// dang nhap
export const isEmailOrPhone = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(0|\+84)[0-9]{9}$/;

  return emailRegex.test(value) || phoneRegex.test(value);
};

