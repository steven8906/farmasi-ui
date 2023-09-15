import "./styles/_not-found.scss";
import {useNavigate} from "react-router-dom";
import RoutesPath from "../../../infrastructure/router/routes-path";

export default function NotFound() {
    const navigate = useNavigate();

    return <>
        <div className="section">
            <h1 className="error">404</h1>
            <div className="page">La página que buscas, no está disponible</div>
            <button className="back-home" type={"button"} onClick={()=> navigate(RoutesPath.HOME)}>
                Ir al inicio
            </button>
        </div>
    </>
}