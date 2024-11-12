import { useTheme } from "./ThemeContextProvider";

const Header = ()=> {

  const {toggleTheme} = useTheme()


    return (
      <header >
        <h1>Aplicativo Demonstração</h1>
        <button onClick={toggleTheme}>Mudar Tema </button>
      </header>
    );
  }

  export default Header
  