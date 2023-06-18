import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import "../syles/_join-now.scss";
import {DateCalendar, DateField, DatePicker, LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

export default function Register() {

    return (
        <>
            <h1 className={"font-bold font-size-40 text-center"}>¡Únete ahora!</h1>

            <div className={"row container m-auto py-4"}>
                <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                    <FormControl fullWidth>
                        <InputLabel>Selecciona tu departamento</InputLabel>
                        <Select
                            value={" "}
                            label="Selecciona tu departamento"
                            onChange={() => null}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={"col-sm-12"}>&nbsp;</div>
                <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                    <FormControl fullWidth>
                        <InputLabel>Selecciona tu ciudad</InputLabel>
                        <Select
                            value={" "}
                            label="Selecciona tu ciudad"
                            onChange={() => null}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={"col-sm-12"}>&nbsp;</div>
                <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                    <div className={"d-flex justify-content-between gap-1"}>
                        <TextField className={"w-50"} label="Nombre" defaultValue=" "/>
                        <TextField className={"w-50"} label="Apellido" defaultValue=" "/>
                    </div>
                </div>
                <div className={"col-sm-12"}>&nbsp;</div>
                <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                    <TextField className={"w-100"} label="Número de cédula" defaultValue=" "/>
                </div>
                <div className={"col-sm-12"}>&nbsp;</div>
                <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                    <TextField className={"w-100"} label="Correo electrónico" defaultValue=" "/>
                </div>
                <div className={"col-sm-12"}>&nbsp;</div>
                <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                    <div className={"d-flex justify-content-between gap-1"}>
                        <TextField className={"w-50"} label="Contraseña" defaultValue=" "/>
                        <TextField className={"w-50"} label="Confirmar contraseña" defaultValue=" "/>
                    </div>
                </div>
                <div className={"col-sm-12"}>&nbsp;</div>
                <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                    <div className={"d-flex justify-content-between gap-1"}>
                        <div className={"w-50"}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker label="Fecha de nacimiento"/>
                            </LocalizationProvider>
                        </div>
                        <div className={"w-50"}>
                            <FormControl fullWidth>
                                <InputLabel>Género</InputLabel>
                                <Select
                                    value={" "}
                                    label="Género"
                                    onChange={() => null}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <div className={"col-sm-12"}>&nbsp;</div>
                <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                    <TextField
                        className={"w-100"}
                        id="outlined-number"
                        label="Número de celular"
                        type="tel"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className={"col-sm-12"}>&nbsp;</div>
                <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                    <FormControlLabel
                        className={"text-black-50"}
                        control={
                            <Checkbox checked={false} onChange={null}/>
                        }
                        label="He leído y estoy de acuerdo con los términos para el uso de registros electrónicos, acuerdo de Farmasi , los Términos de Uso, y Policias y procedimientos , y tengo más de 18 años."
                    />
                </div>
            </div>
        </>
    )
}