import { create } from 'zustand'
import SessionModel from "../../data/models/session-model";

const useLoginStore = create<{session:SessionModel}>((set) => ({
    setSession: (session: SessionModel) => set(() => ({ session })),
}))

export default useLoginStore;