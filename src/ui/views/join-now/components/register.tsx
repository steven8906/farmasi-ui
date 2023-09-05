import {Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import "../styles/_join-now.scss";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import useRegister from "../use-cases/use-register";
import {departments, municipalities} from "../../../../data/repository/location";
import formMessages from "../../../../cross-cutting/form-messages";

export default function Register() {
    const {formRegisterState, setDataForm, setDate, onSubmit} = useRegister();
    const defaultValue = "" as never;

    return (
        <>
            <h1 className={"font-bold font-size-40 text-center"}>¡Únete ahora!</h1>
            <form onSubmit={onSubmit}>
                <div className={"row container m-auto py-4"}>
                    <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                        <FormControl fullWidth>
                            <InputLabel>Selecciona tu departamento</InputLabel>
                            <Select
                                required={true}
                                name={"department"}
                                label="Selecciona tu departamento"
                                value={formRegisterState.department as never ?? defaultValue}
                                onChange={setDataForm}>
                                {departments.map((x, index) =>
                                    <MenuItem value={x}
                                              key={`deparment-${index}`}>{x}
                                    </MenuItem>)}
                            </Select>
                        </FormControl>
                    </div>
                    <div className={"col-sm-12"}>&nbsp;</div>
                    <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                        {formRegisterState.department && <FormControl fullWidth>
                            <InputLabel>Selecciona tu ciudad</InputLabel>
                            <Select
                                required={true}
                                name={"city"}
                                label="Selecciona tu ciudad"
                                value={formRegisterState.city as never ?? defaultValue}
                                onChange={setDataForm}>
                                {municipalities.find(x => x.department === formRegisterState.department)
                                    ?.cities
                                    .map((x, index) =>
                                        <MenuItem value={x}
                                                  key={`department-${index}`}>{x}
                                        </MenuItem>)}
                            </Select>
                        </FormControl>}
                    </div>
                    <div className={"col-sm-12"}>&nbsp;</div>
                    <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                        <div className={"d-flex justify-content-between gap-1"}>
                            <TextField className={"w-50"}
                                       onChange={setDataForm}
                                       label="Nombre"
                                       name={"name"}
                                       required={true}
                                       autoComplete={"off"}
                                       value={formRegisterState.name ?? defaultValue}/>
                            <TextField className={"w-50"}
                                       onChange={setDataForm}
                                       label="Apellido"
                                       name={"lastName"}
                                       required={true}
                                       autoComplete={"off"}
                                       value={formRegisterState.lastName ?? defaultValue}/>
                        </div>
                    </div>
                    <div className={"col-sm-12"}>&nbsp;</div>
                    <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                        <TextField className={"w-100"}
                                   onChange={setDataForm}
                                   type={"tel"}
                                   label="Número de cédula"
                                   name={"identification"}
                                   required={true}
                                   autoComplete={"off"}
                                   value={formRegisterState.identification ?? defaultValue}/>
                    </div>
                    <div className={"col-sm-12"}>&nbsp;</div>
                    <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                        <TextField className={"w-100"}
                                   type={"email"}
                                   name={"email"}
                                   onChange={setDataForm}
                                   label="Correo electrónico"
                                   required={true}
                                   autoComplete={"off"}
                                   value={formRegisterState.email ?? defaultValue}/>
                    </div>
                    <div className={"col-sm-12"}>&nbsp;</div>
                    <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                        <div className={"d-flex justify-content-between gap-1"}>
                            <TextField className={"w-50"}
                                       required={true}
                                       type={"password"}
                                       name={"password"}
                                       onChange={setDataForm}
                                       label="Contraseña"
                                       autoComplete={"off"}
                                       value={formRegisterState.password ?? defaultValue}/>
                            <TextField className={"w-50"}
                                       type={"password"}
                                       required={true}
                                       name={"password_two"}
                                       onChange={setDataForm}
                                       label="Confirmar contraseña"
                                       autoComplete={"off"}
                                       value={formRegisterState.password_two ?? defaultValue}/>
                        </div>
                    </div>
                    <div className={"col-sm-12"}>&nbsp;</div>
                    <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                        <div className={"d-flex justify-content-between gap-1"}>
                            <div className={"w-50"}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="Fecha de nacimiento"
                                                value={formRegisterState.date as never ?? defaultValue}
                                                onChange={setDate}/>
                                </LocalizationProvider>
                            </div>
                            <div className={"w-50"}>
                                <FormControl fullWidth>
                                    <InputLabel>Género</InputLabel>
                                    <Select
                                        value={formRegisterState.gender as never ?? defaultValue}
                                        label="Género"
                                        name={"gender"}
                                        required={true}
                                        onChange={setDataForm}
                                    >
                                        <MenuItem value={"Mujer"}>Mujer</MenuItem>
                                        <MenuItem value={"Hombre"}>Hombre</MenuItem>
                                        <MenuItem value={"No especificado"}>No especificado</MenuItem>
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
                            name={"phone"}
                            required={true}
                            onChange={setDataForm}
                            autoComplete={"off"}
                            value={formRegisterState.phone ?? defaultValue}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className={"col-sm-12"}>&nbsp;</div>
                    <div className={"col-sm-12 col-md-8 col-lg-4 m-auto"}>
                        <FormControlLabel
                            className={"text-black-50"}
                            label={formMessages.agree}
                            control={
                                <Checkbox onChange={setDataForm}
                                          name={"agree"}
                                          required={true}
                                          checked={formRegisterState.agree ?? false}/>}
                        />
                    </div>
                    <span className={"col-sm-12"}/>
                    <div className={"col-sm-12 col-md-8 col-lg-4 mt-5 m-auto text-center"}>
                        <button className={"btn btn-primary text-white w-100"} type={"submit"}>CREAR</button>
                    </div>
                </div>
            </form>
        </>
    )
}