import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import MainContent from "./MainContent";
import details from "./details";
import Content from "./Content";
import Cart from "./Cart";

function createDetails(detail) {
  return (
    <MainContent
      key={detail.id}
      img={detail.imgURL}
      tel={detail.tel}
      price={detail.price}
    />
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Cart />
    <div className="sideBySide">
      <Content />
      {details.map(createDetails)}
    </div>
  </StrictMode>,
);
