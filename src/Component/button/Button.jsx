import "./button.css";

export default function Button({ variant, type, text, icon, clickEvent }) {
  switch (variant) {
    case "solid":
      return (
        <button
          type={type ? type : "button"}
          className="btn-tp solid-btn"
          onClick={clickEvent}
        >
          <span>{icon}</span>
          {text}
        </button>
      );

    case "accent":
      return (
        <button
          type={type ? type : "button"}
          className="btn-tp solid-btn accent"
          onClick={clickEvent}
        >
          <span>{icon}</span>
          {text}
        </button>
      );

    case "outline":
      return (
        <button
          type={type ? type : "button"}
          className="btn-tp outline-btn"
          onClick={clickEvent}
        >
          <span>{icon}</span>
          {text}
        </button>
      );

    case "pill":
      return (
        <button
          type={type ? type : "button"}
          className="btn-tp pill-btn"
          onClick={clickEvent}
        >
          <span>{icon}</span>
          {text}
        </button>
      );

    default:
      return (
        <button type={type ? type : "button"} onClick={clickEvent}>
          Default Button
        </button>
      );
  }
}
