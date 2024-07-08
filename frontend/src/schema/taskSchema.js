import * as Yup from "yup";
export const taskSchema = Yup.object({
  title: Yup.string()
    .required("Bir başlık giriniz.")
    .min(3, "En az 3 karakter giriniz."),
  startDate: Yup.date().required("Lütfen bir başlangıç tarih giriniz."),
  endDate: Yup.date()
    .required("Lütfen bir bitiş tarihi giriniz.")
    .min(
      Yup.ref("startDate"),
      "Bitiş tarihi, başlangıç tarihinden sonra olmalıdır."
    ),
  userId: Yup.string(),
});
