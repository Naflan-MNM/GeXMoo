import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProvider>
      {/* we have to  move the App into this ShopContextProvider for passing the data  */}
      <App />
    </ShopContextProvider>
  </BrowserRouter>
);
