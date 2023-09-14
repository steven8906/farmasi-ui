import {create} from 'zustand'
import SessionModel from "../../data/models/session-model";
import {createJSONStorage, persist} from "zustand/middleware";

type StoreType      = { session: SessionModel, setSession: (session: SessionModel) => void };
const useLoginStore = create<StoreType>(persist(
    (
        set) => ({
        session: {} as SessionModel,
        setSession: (session: SessionModel) => set(() => ({session})),
    }),
    {
        name: 'auth',
        storage: createJSONStorage(() => sessionStorage)
    }
) as any)

export default useLoginStore;