import * as Yup from "yup";
export const userSchema = Yup.object({
  email: Yup.string().required("Email adresinizi giriniz.").email("Email adresiniz geçersiz."),
});
