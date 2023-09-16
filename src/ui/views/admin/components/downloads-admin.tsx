import {Downloads} from "../use-cases/use-admin";
import {Card, CardActionArea, CardActions, CardContent} from "@mui/material";
import React, {ChangeEvent} from "react";
import httpServices from "../../../../application/services/http-services";
import {toast} from "react-toastify";
import HttpMessages from "../../../../cross-cutting/http-messages";
import {buildFileUrl} from "../../../../cross-cutting/utils";

type HeaderAuth = { config: { headers: { Authorization: string } } };
type Props = { dataDownloads: Downloads, refreshData: () => void, getHeaderAuth: () => HeaderAuth }
export default function DownloadsAdmin({dataDownloads, refreshData, getHeaderAuth}: Props) {
    const [file, changeFile] = React.useState<File>();

    function onChange(ev: ChangeEvent<HTMLInputElement>): void {
        if (ev.target && ev.target.files && ev.target.files.length > 0) {
            changeFile(ev.target?.files[0]);
        }
    }

    function saveImage(column: string): void {
        const form = new FormData(document.querySelector('form') as HTMLFormElement);
        if (file) form.append(column, file);
        httpServices.post<FormData, { data: string }>({
            action: 'products/change-file',
            data: form,
            ...getHeaderAuth()
        }).then(success)
    }

    function success():void {
        toast(HttpMessages.OkRequest, {type: 'success'});
        refreshData();
    }

    return <>
        <div className={"d-flex justify-content-center gap-3"}>
            <a href={buildFileUrl(dataDownloads.download_one_url)}
               target={"_blank"}>{dataDownloads.download_one_name}
            </a>
            <a href={buildFileUrl(dataDownloads.download_two_url)}
               target={"_blank"}>{dataDownloads.download_two_name}
            </a>
        </div>
        <form className={"d-flex justify-content-center gap-5 mt-4 flex-wrap"}>
            <Card sx={{maxWidth: 545}}>
                <CardActionArea>
                    <CardContent>
                        <h3>Archivo #1</h3>
                        <div className="input-group mb-3">
                            <div className="custom-file">
                                <input type="file"
                                       accept={'application/pdf'}
                                       name={"download_one_name"}
                                       onChange={onChange}
                                       className="custom-file-input"/>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <button type={"button"}
                            onClick={() => saveImage("download_one_name")}
                            className={"btn btn-primary text-white"}>
                        Cambiar Archivo
                    </button>
                </CardActions>
            </Card>
            <Card sx={{maxWidth: 345}}>
                <CardActionArea>
                    <CardContent>
                        <h3>Archivo #2</h3>
                        <div className="input-group mb-3">
                            <div className="custom-file">
                                <input type="file"
                                       accept={'application/pdf'}
                                       name={"download_one_two"}
                                       onChange={onChange}
                                       className="custom-file-input"/>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <button type={"button"}
                            onClick={() => saveImage("download_two_name")}
                            className={"btn btn-primary text-white"}>
                        Cambiar Archivo
                    </button>
                </CardActions>
            </Card>
        </form>
    </>
}