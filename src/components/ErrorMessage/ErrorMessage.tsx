import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.text}>
      Loading movies, please wait...
    </p>
  );
}