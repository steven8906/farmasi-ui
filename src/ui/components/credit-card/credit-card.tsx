import "react-credit-cards-2/dist/es/styles-compiled.css";
import {useEffect, useState} from "react";
import httpServices from "../../../application/services/http-services.ts";
//Bancard Pasarela de pagos
import "../../../application/services/bancard-service.js";
import SendConfirmationType from "../../../data/types/send-confirmation-type.ts";


type ProcessIdBancard = {
    status     : string
    process_id : string

}
export default function CreditCard({dataConfirmation}: { dataConfirmation: SendConfirmationType }) {
    const [loadedProcessID, setLoadedProcessID] = useState<boolean>(false);

    function getProcessId(): void {
        httpServices.post<{ amount: string, dataConfirmation: string }, ProcessIdBancard>({
            action : 'bancard/process-id',
            data   : {amount: "120.00", dataConfirmation: btoa(JSON.stringify(dataConfirmation))}
        }).then(res => {
            setLoadedProcessID(true);
            openBancardForm(res.data.data.process_id);
        }).catch(err => console.log(err))
    }

    function openBancardForm(processId: string): void {
        console.log(dataConfirmation)
        if (window.Bancard){
            console.log("xx")
            console.log(processId)
            window.Bancard.Checkout.createForm('iframe-container',  processId, {});
        }
    }

    useEffect(() => {
        if (!loadedProcessID) getProcessId();
    }, [])

    return (
        <>
            <div id="iframe-container"></div>
        </>
    );
}
