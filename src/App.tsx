import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderCompenent";
import { GlobalStyle } from "./styles/global";
import { Home } from"./pages/Home";


export function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
      <Home />
      <FooterComponent />
    </>
  );
}

