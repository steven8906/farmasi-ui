import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import FeathersLeft from "../../../infrastructure/assets/img/feathers-left.png";
import FeathersRight from "../../../infrastructure/assets/img/feathers-right.png";
import "./styles/bi.scss";
import BiCard from "./components/bi-card";
import Pagination from "../../components/pagination";

export default function Bi() {
    const biCards = [
        <BiCard name={'Yolanda Caballero 1'}/>,
        <BiCard name={'Yolanda Caballero 2'}/>,
        <BiCard name={'Yolanda Caballero 3'}/>,
        <BiCard name={'Yolanda Caballero 4'}/>,
        <BiCard name={'Yolanda Caballero 5'}/>,
        <BiCard name={'Yolanda Caballero 6'}/>,
        <BiCard name={'Yolanda Caballero 7'}/>,
        <BiCard name={'Yolanda Caballero 8'}/>,
        <BiCard name={'Yolanda Caballero 9'}/>,
        <BiCard name={'Yolanda Caballero 10'}/>,
        <BiCard name={'Yolanda Caballero 11'}/>,
        <BiCard name={'Yolanda Caballero 12'}/>,
        <BiCard name={'Yolanda Caballero 14'}/>,
        <BiCard name={'Yolanda Caballero 14'}/>,
    ]

    return <>
        <div className={"bg-primary-light"}>
            <div className={"container py-5"}>
                <div className={"row justify-content-between align-items-center"}>
                    <div className={"col-sm-12 col-md-6"}>
                        <h1 className={"font-semi-bold"}>Encuentra a tu BI mas cercana</h1>
                    </div>
                    <div className={"col-sm-12 col-md-5"}>
                        <FormControl fullWidth>
                            <InputLabel>Selecciona tu departamento</InputLabel>
                            <Select
                                value={""}
                                label="Selecciona tu departamento"
                                onChange={() => null}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className={"pt-5 container"}>
                    <div className={"text-center my-3"}>
                        <div className={"d-flex justify-content-center align-items-center py-2"}>
                            <img src={FeathersLeft} alt={""}/>
                            <h3 className={"font-semi-bold"}>Beauty Influencers destacadas</h3>
                            <img src={FeathersRight} alt={""}/>
                        </div>
                    </div>
                </div>
                <Pagination data={[...biCards]} sizePages={10}/>
            </div>
        </div>
    </>
}