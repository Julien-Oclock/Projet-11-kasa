/* eslint-env es6 */
/* eslint-disable */
import { useRouteError } from "react-router-dom";

//styles
import './styles.scss'

// Components
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";


const NotFound = () => {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
        <Header />
        <div className="error">
            <h1 className="error__status">404</h1>
            <p className="error__content">Oups! La page que vous demandez n'éxiste pas</p>
            <a  className="error__link" href="/">Retournez sur la page d'acceuil</a>
        </div>
      </div>
    );
}

export default NotFound;