import useAppContext from "./use-app-context";

export default function useSession() {
    const {session} = useAppContext();

    function isLogged(): boolean {
        return Object.keys(session).length > 0
    }

    return {
        isLogged,
    }
}