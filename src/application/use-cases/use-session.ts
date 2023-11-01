import useAppContext from "./use-app-context";
import SessionModel, {Config, Permission} from "../../data/models/session-model";
import useLoginStore from "../store/use-login-store";
import httpServices from "../services/http-services";
import ResponseModel from "../../data/models/response-model";
import {Banner, Downloads, FormBank} from "../../ui/views/admin/use-cases/use-admin";
import {useState} from "react";

export default function useSession() {
    const {session}                             = useAppContext();
    const sessionStore: SessionModel            = useLoginStore(state => state.session);
    const [formDataBank, setFormDataBank]       = useState<FormBank>({} as FormBank);
    const [formDataBanner, setFormDataBanner]   = useState<Banner>({} as Banner);
    const [formDataDownloads, setDataDownloads] = useState<Downloads>({} as Downloads);
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

    function getConfig(): void {
        httpServices.getNoPaginate<ResponseModel<Config>>({action: 'products/config', ...getHeaderAuth()})
            .then(res => {
                const dataBank: FormBank = {
                    name_bank               : res.data.data.name_bank,
                    name_owner_account_bank : res.data.data.name_owner_account_bank,
                    number_account_bank     : res.data.data.number_account_bank,
                    type_account_bank       : res.data.data.type_account_bank,
                };
                const dataBanner: Banner = {
                    banner_image_one    : res.data.data.banner_image_one,
                    banner_image_two    : res.data.data.banner_image_two,
                    banner_image_three  : res.data.data.banner_image_three,
                    bottom_banner_image : res.data.data.bottom_banner_image,
                    percent             : res.data.data.percent,
                    text_bottom_banner  : res.data.data.text_bottom_banner,
                };
                const dataDownloads: Downloads = {
                    download_one_url  : res.data.data.download_one_url,
                    download_one_name : res.data.data.download_one_name,
                    download_two_url  : res.data.data.download_two_url,
                    download_two_name : res.data.data.download_two_name,
                };
                setFormDataBank(dataBank);
                setFormDataBanner(dataBanner);
                setDataDownloads(dataDownloads);
            })
    }

    function isLogged(): boolean {
        return Object.keys(session).length > 0
    }

    function checkPermission(permission: string): boolean {
        if (Object.keys(sessionStore).length > 0 && typeof session?.user !== 'undefined') {
            const permissionData = sessionStore.permissions.find(x => x.name === permission) as Permission;
            const roles = sessionStore.role_has_model.filter(x => x.model_id === sessionStore.user.id);
            let allow = false;
            roles.forEach(role => {
                const rolesWithPermission = sessionStore.role_has_permissions.filter(x => x.permission_id === permissionData.id);
                if (rolesWithPermission.some(x => x.role_id === role.role_id)) allow = true;
            })
            return allow
        }
        return false;
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

    const getPlan = (): number => (session.plan_prices as { [plan: string]: any })[planPrices[session?.role_has_model[0]?.role_id]];
    const getNamePlanRole = (): string => namePlanRole[session?.role_has_model[0]?.role_id];

    return {
        planPrices,
        formDataBank,
        formDataBanner,
        formDataDownloads,
        sessionStore,
        isLogged,
        getHeaderAuth,
        getPlan,
        getNamePlanRole,
        checkPermission,
        getConfig,
        setFormDataBank,
        setFormDataBanner,
        setDataDownloads,
    }
}