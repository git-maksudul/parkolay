import Page52Body from "../Page52Body/Page52Body"
import Page52Footer from "../Page52Footer/Page52Footer"
import Page52Header from "../Page52Header/Page52Header"

const Page52 = () => {
    return (
        <div className="lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3">
            <Page52Header></Page52Header>
            <Page52Body></Page52Body>
            <Page52Footer></Page52Footer>
        </div>
    )
}

export default Page52