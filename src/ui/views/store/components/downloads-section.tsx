import BookOne from "../../../../infrastructure/assets/img/book-1.png";
import BookTwo from "../../../../infrastructure/assets/img/book-2.png";
import {Downloads} from "../../admin/use-cases/use-admin";
import {buildFileUrl} from "../../../../cross-cutting/utils";

type Props = { dataDownloads: Downloads }
export default function DownloadsSection({dataDownloads}: Props) {
    return <>
        <section className={"bg-primary-light"}>
            <div className={"d-flex flex-wrap container justify-content-center py-5 gap-5"}>
                <div className={"d-flex align-items-center"}>
                    <div>
                        <img src={BookOne} alt={""} width={250}/>
                    </div>
                    <div className={"d-flex flex-column align-items-center"}>
                        <a className={"btn btn-primary text-white font-semi-bold px-5"}
                           href={buildFileUrl(dataDownloads.download_one_url)}
                           target={"_blank"}>
                            <span className={"align-middle"}>Descargar</span>
                            <i className='bx bxs-download align-middle'/>
                        </a>
                        <p className={"text-dark font-regular"}>{dataDownloads.download_one_name}</p>
                    </div>
                </div>
                <div className={"d-flex align-items-center"}>
                    <div>
                        <img src={BookTwo} alt={""} width={250}/>
                    </div>
                    <div className={"d-flex flex-column align-items-center"}>
                        <a className={"btn btn-primary text-white font-semi-bold px-5"}
                           href={buildFileUrl(dataDownloads.download_two_url)}
                           target={"_blank"}>
                            <span className={"align-middle"}>Descargar</span>
                            <i className='bx bxs-download align-middle'/>
                        </a>
                        <p className={"text-dark font-regular"}>{dataDownloads.download_two_name}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}