import { useTheme } from "./ThemeContextProvider";

import Header from './Header';


const Page = () => {
   const {theme} = useTheme()
  return (
    <div id="app" className={theme}>
      <Header />
      <article>
        <h2>Estágio</h2>
        <p>
          Um momento em que se reflete se vale a pena esse sofrimento todo!
        </p>
      </article>
    </div>
  );
}
export default Page
