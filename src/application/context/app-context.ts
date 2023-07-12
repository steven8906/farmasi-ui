import {createContext} from "react";
import AppContextModel from "../../data/context-models/app-context-model";

const appContext = createContext<AppContextModel>({} as AppContextModel);
export default appContext;