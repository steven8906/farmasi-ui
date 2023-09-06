import useAppContext from "./use-app-context";
import SessionModel from "../../data/models/session-model";
import useLoginStore from "../store/use-login-store";

export default function useSession() {
    const {session}                  = useAppContext();
    const sessionStore: SessionModel = useLoginStore(state => state.session);

    function isLogged(): boolean {
        return Object.keys(session).length > 0
    }

    type HeaderAuth = { config: { headers: { Authorization: string } } };
    function getHeaderAuth(): HeaderAuth{
        return {
            config: {
                headers: {
                    Authorization: 'Bearer ' + sessionStore?.token?.accessToken
                }
            }
        }
    }

    return {
        isLogged,
        getHeaderAuth,
    }
}