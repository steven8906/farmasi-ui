import useAppContext from "./use-app-context";
import SessionModel from "../../data/models/session-model";
import useLoginStore from "../store/use-login-store";

export default function useSession() {
    const {session} = useAppContext();
    const sessionStore: SessionModel = useLoginStore(state => state.session);
    const planPrices: Record<number, string> = {
        2: 'one',
        3: 'two',
        4: 'three',
    }
    const namePlanRole: Record<number, string> = {
        2: 'plan_one',
        3: 'plan_two',
        4: 'plan_three',
    }
    function isLogged(): boolean {
        return Object.keys(session).length > 0
    }

    type HeaderAuth = { config: { headers: { Authorization: string } } };
    function getHeaderAuth(): HeaderAuth {
        return {
            config: {
                headers: {
                    Authorization: 'Bearer ' + sessionStore?.token?.accessToken
                }
            }
        }
    }

    const getPlan = (): number => (session.plan_prices as { [plan: string]: any })[planPrices[session.role_has_model[0].role_id]];
    const getNamePlanRole = (): string => namePlanRole[session.role_has_model[0].role_id];

    return {
        planPrices,
        isLogged,
        getHeaderAuth,
        getPlan,
        getNamePlanRole,
    }
}