import React, {ChangeEvent} from "react";
import {Product} from "../../../../data/models/product-model";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import httpServices from "../../../../application/services/http-services";
import {toast} from "react-toastify";
import HttpMessages from "../../../../cross-cutting/http-messages";
import useSession from "../../../../application/use-cases/use-session";

type Props = {
    children : React.ReactNode;
    product  : Product;
    callback : ()=> void;
}

export default function ModalChangeImage({children, product, callback}: Props) {
    const [open, setOpen]       = React.useState(false);
    const [image, changeImagen] = React.useState<File>();
    const {getHeaderAuth}       = useSession();
    const handleClickOpen       = () => setOpen(true);
    const handleClose           = () => setOpen(false);

    function changeImage(ev: ChangeEvent<HTMLInputElement>): void {
        if (ev.target && ev.target.files && ev.target.files.length > 0) {
            changeImagen(ev.target?.files[0]);
        }
    }

    function change(): void {
        const form = new FormData(document.querySelector('form') as HTMLFormElement);
        form.append('product', JSON.stringify(product));
        if (image) form.append('image', image);
        httpServices.post<FormData, { data: string }>({
            action : 'products/change-image',
            data   : form,
            ...getHeaderAuth()
        }).then(()=> {
            callback();
            handleClose();
            toast(HttpMessages.OkRequest, { type: 'success' });
        })
    }

    return <>
        <button type="button"
                className="btn btn-link"
                data-toggle="modal"
                onClick={handleClickOpen}>
            {children}
        </button>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{product.name} - Imagen</DialogTitle>
            <DialogContent>
                <form>
                    <img src={`data:image/jpeg;base64, ${product.image}`}
                         width={400}
                         className={"m-auto d-block my-3"}
                         alt={product.name}/>
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file"
                                   onChange={changeImage}
                                   className="custom-file-input"/>
                            <label className="custom-file-label">Seleccione archivo...</label>
                        </div>
                    </div>
                </form>
            </DialogContent>
            <DialogActions>
                <button type="button" className="btn btn-link" onClick={handleClose}>Cancelar</button>
                <button type="button" className="btn btn-primary text-white" onClick={change}>Cambiar</button>
            </DialogActions>
        </Dialog>
    </>
}