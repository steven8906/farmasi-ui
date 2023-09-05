// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import validatorService from "../services/validatorService.js";
import {useEffect} from "react";

const useValidate = (formID?:string, fieldsToValidate?:string[])=> {

    useEffect(()=> {
        if (formID){
            const formProduct: HTMLElement | null = document.getElementById(formID);
            formProduct?.addEventListener("input", () => validatorService.validateAll(fieldsToValidate, true));
            formProduct?.addEventListener("change", () => validatorService.validateAll(fieldsToValidate, true));
        }
    }, [])

    return {
        isFormValid: ()=> validatorService.validateAll(fieldsToValidate, true),
        validateAll: (fields:string[])=> validatorService.validateAll(fields, true)
    }
}

export default useValidate;
