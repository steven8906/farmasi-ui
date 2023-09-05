import "./loading.scss";

export default function Loading(){

    return <>
        <div className={"loading__content hide d-none"} id={"loading"}>
            <div className="lds-ripple">
                <div/>
                <div/>
            </div>
        </div>
    </>
}