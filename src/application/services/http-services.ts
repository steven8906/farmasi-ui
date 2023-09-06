import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import ResponseModel, {PaginateResponse} from "../../data/models/response-model";

type PostType<TData> = {
    action  : string,
    data    : TData,
    config? : AxiosRequestConfig | undefined,
}

type GetType = {
    action  : string,
    config? : AxiosRequestConfig | undefined,
}

export default {
    post<TData, TResponse>({
                               action,
                               data,
                               config = {}
                           }: PostType<TData>): Promise<AxiosResponse<ResponseModel<TResponse>>> {
        return axios.post(`${import.meta.env.VITE_APP_API}/${action}`, data, {...config});
    },
    get<TResponse>({
                               action,
                               config = {}
                           }: GetType): Promise<AxiosResponse<PaginateResponse<TResponse>>> {
        return axios.get(`${import.meta.env.VITE_APP_API}/${action}`, {...config});
    },
    getNoPaginate<TResponse>({
                               action,
                               config = {}
                           }: GetType): Promise<AxiosResponse<TResponse>> {
        return axios.get(`${import.meta.env.VITE_APP_API}/${action}`, {...config});
    },
}