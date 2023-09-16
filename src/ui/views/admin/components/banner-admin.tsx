import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@mui/material";
import {type Banner} from "../use-cases/use-admin";
import React, {ChangeEvent, useEffect, useState} from "react";
import httpServices from "../../../../application/services/http-services";
import {toast} from "react-toastify";
import HttpMessages from "../../../../cross-cutting/http-messages";
import {buildFileUrl} from "../../../../cross-cutting/utils";

type HeaderAuth = { config: { headers: { Authorization: string } } };
type Props = { dataBanner: Banner, refreshData: () => void, getHeaderAuth: ()=> HeaderAuth };
export default function BannerAdmin({dataBanner, refreshData, getHeaderAuth}: Props) {
    type FormBanner                   = { percent    : number | string, text_bottom_banner: string };
    type BannerType                   = { nameColumn : string, title: string }[];
    const [image, changeImagen]       = React.useState<File>();
    const [bannerForm, setBannerForm] = useState<FormBanner>({} as FormBanner);
    const banners: BannerType = [
        {nameColumn: 'banner_image_one', title: 'Banner #1'},
        {nameColumn: 'banner_image_two', title: 'Banner #2'},
        {nameColumn: 'banner_image_three', title: 'Banner #3'},
        {nameColumn: 'bottom_banner_image', title: 'Banner Inferior'},
    ];

    useEffect(()=> {
        if (typeof dataBanner.percent !== 'undefined'){
            setBannerForm({
                percent: parseFloat(dataBanner.percent.toString()).toFixed(0),
                text_bottom_banner: dataBanner.text_bottom_banner
            });
        }
    }, [dataBanner])

    function onChange(ev: ChangeEvent<HTMLInputElement>): void {
        if (ev.target && ev.target.files && ev.target.files.length > 0) {
            changeImagen(ev.target?.files[0]);
        }
    }

    function saveImage(column: string): void {
        const form = new FormData(document.querySelector('form') as HTMLFormElement);
        if (image) form.append(column, image);
        httpServices.post<FormData, { data: string }>({
            action: 'products/change-image-banner',
            data: form,
            ...getHeaderAuth()
        }).then(success)
    }

    function success(): void {
        toast(HttpMessages.OkRequest, {type: 'success'});
        refreshData();
        const form = document.getElementById("banner-form") as HTMLFormElement;
        form.querySelectorAll('input[type=file]')
            .forEach(input => (input as HTMLInputElement).value = '');
    }

    function checkFile(): boolean {
        const form = document.getElementById("banner-form") as HTMLFormElement;
        if (form){
            const inputs = [...form.querySelectorAll('input[type=file]')];
            if (inputs.length > 0) return (inputs.some(x => (x as HTMLInputElement).files?.length));
        }
        return false;
    }

    function onChangeFormBanner(ev: ChangeEvent<HTMLInputElement>): void {
        const {value, name} = ev.target;
        setBannerForm(prevState => ({...prevState, [name]: value}));
    }

    function saveBannerForm(): void {
        httpServices.post<FormBanner, { data: string }>({
            action: 'products/save-banner',
            data: {...bannerForm},
            ...getHeaderAuth()
        }).then(success)
    }

    return <>
        <div>
            <form className={"d-flex justify-content-between align-items-start flex-wrap gap-3"} id={"banner-form"}>
                {banners.map((banner, index) => (<div key={`banner-${index}`}>
                    <Card sx={{maxWidth: 345}}>
                        <CardActionArea>
                            <div style={{width: 345}}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={buildFileUrl((dataBanner as { [key:string]: string })[banner.nameColumn])}
                                    alt={""}
                                />
                            </div>
                            <CardContent>
                                <h3>{banner.title}</h3>
                                <div className="input-group mb-3">
                                    <div className="custom-file">
                                        <input type="file"
                                               accept={'image/*'}
                                               name={banner.nameColumn}
                                               onChange={onChange}
                                               className="custom-file-input"/>
                                    </div>
                                </div>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <button type={"button"}
                                    onClick={() => saveImage(banner.nameColumn)}
                                    disabled={!checkFile()}
                                    className={"btn btn-primary text-white"}>
                                Cambiar imagen
                            </button>
                        </CardActions>
                    </Card>
                </div>))}
            </form>
            <br/>
            <input className={"form-control mb-2"}
                   name={"percent"}
                   placeholder={"Porcentaje"}
                   value={bannerForm.percent ?? 0}
                   onChange={onChangeFormBanner}
                   type={"number"}/>
            <input className={"form-control mb-2"}
                   value={bannerForm.text_bottom_banner ?? ''}
                   name={"text_bottom_banner"}
                   onChange={onChangeFormBanner}
                   placeholder={"Texto inferior"}/>
            <button type={"button"} className={"btn btn-primary text-white"}
            onClick={saveBannerForm}>
                Guardar información de banner
            </button>
        </div>
    </>
}