import { create } from 'zustand'
import SessionModel from "../../data/models/session-model";

const useLoginStore = create<{session:SessionModel, setSession: (session:SessionModel) => unknown}>((set) => ({
    session: {} as SessionModel,
    setSession: (session: SessionModel) => set(() => ({ session })),
}))

export default useLoginStore;