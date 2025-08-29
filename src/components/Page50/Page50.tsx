import Page50Body from "../Page50Body/Page50Body"
import Page50Footer from "../Page50Footer/Page50Footer"
import Page50Header from "../Page50Header/Page50Header"

const Page50 = () => {
    return (
        <div className="lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3">
            <Page50Header></Page50Header>
            <Page50Body></Page50Body>
            <Page50Footer></Page50Footer>
        </div>
    )
}

export default Page50