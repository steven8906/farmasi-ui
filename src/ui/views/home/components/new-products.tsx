import "../styles/_new-products.scss";

export default function NewProducts() {

    const data = [
        { path: "https://content.mx.farmasi.com/Product/1000381_250.jpg", },
        { path: "https://content.mx.farmasi.com/Product/1000325_250.jpg", },
        { path: "https://content.mx.farmasi.com/Product/1000931_250.jpg", },
        { path: "https://content.mx.farmasi.com/Product/1107025_250.jpg", },
        { path: "https://content.mx.farmasi.com/Product/1001508_250.jpg", },
        { path: "https://content.mx.farmasi.com/Product/1301528_250.jpg", },
        { path: "https://content.mx.farmasi.com/Product/1301492_250.jpg", },
    ]

    return (
        <>
            <section className={"new-products"}>
                <article className={"container"}>
                    <h2 className={"text-bold"}>¡Nuevos productos!</h2>
                    <div className={"row mt-5 pb-100"}>
                        {data.map((x, index) =>
                            <div className={"col-sm-6 col-lg-3 mb-3"} key={`product-${index}`}>
                                <div className="new-products__card card shadow w-100 my-4">
                                    <img src={x.path}
                                         className="card-img" alt=""/>
                                </div>
                                <button className={"btn btn-primary text-white m-auto d-block w-50"}>
                                    Ver producto
                                </button>
                            </div>)}
                    </div>
                </article>
            </section>
        </>
    )
}