import React from "react/ts5.0";

interface Props {
    name: string;
}

export default function BiCard({ name } : Props){

    return <>
        <div className={"my-5"}>
            <div className={"row gap-1 justify-content-between align-items-center w-100"}>
                <div className={"col-sm-12 col-md-4"}>
                    <div className={"d-flex gap-3 align-items-center"}>
                        <div className={"photo"}>
                            <img src={"https://pixabay.com/get/g6bdd0be4f4283903324307c43299584a2501b30dabc2e8e12498ed8c5d00dd1ef9dffe211d1b50ed5ea846d3541a677a248c8e31eb0c82eb5eb13c6fba01fe5c_1280.jpg"} alt={"bi"}/>
                        </div>
                        <div>
                            <h4 className={"font-semi-bold"}>{name}</h4>
                            <h5>Beauty Influencer</h5>
                        </div>
                    </div>
                </div>
                <div className={"col-sm-12 col-md-3"}>
                    <div className={"p-4 d-flex align-items-start justify-content-center flex-column border-4 border-end-0 border-top-0 border-bottom-0 border-primary"}>
                        <div>
                            <h5 className={"font-semi-bold"}>Contacto</h5>
                        </div>
                        <div className={"d-flex gap-3 align-items-center"}>
                            <i className='bx bxl-whatsapp bg-primary p-1 rounded-circle text-white font-size-25'/>
                            <p>0973 456 789</p>
                        </div>
                    </div>
                </div>
                <div className={"col-sm-12 col-md-3"}>
                    <div className={"p-4 d-flex gap-3 align-items-center justify-content-start border-4 border-end-0 border-top-0 border-bottom-0 border-primary"}>
                        <div>
                            <i className='bx bx-map text-primary font-size-50'/>
                        </div>
                        <div className={"d-flex flex-column align-items-start"}>
                            <h5 className={"font-semi-bold"}>Dirección</h5>
                            <p>Ciudad del este, B° Fátima</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}