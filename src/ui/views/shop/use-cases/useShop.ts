import {useState} from "react";

export default function useShop(){
    type SectionsShop = 'MAQUILLAJE'|'FRAGANCIAS'|'CUIDADO_PIEL'|'MERCH';
    const [sectionShop, setSectionShop] = useState<SectionsShop>('MAQUILLAJE');

    return {
        sectionShop,
        setSectionShop,
    }
}