import React from "react";

export default function Deck() {
  return (
    <div className="card">
      <h5 className="card-header">Рекомендуемые</h5>
      <div className="card-body">
        <h5 className="card-title">Особое обращение с заголовком</h5>
        <p className="card-text">
          С вспомогательным текстом ниже в качестве естественного перехода к
          дополнительному контенту.
        </p>
        <a href="#" className="btn btn-primary">
          Перейти куда-нибудь
        </a>
      </div>
    </div>
  );
}
