import * as Yup from "yup";
export const registerSchema = Yup.object({
  username: Yup.string()
    .required("Tam adınızı giriniz.")
    .min(3, "En az 3 karakter giriniz."),
  email: Yup.string().required("Email adresinizi giriniz.").email("Email adresiniz geçersiz."),
});
