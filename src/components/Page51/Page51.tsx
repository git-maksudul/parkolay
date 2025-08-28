import Page51Body from "../Page51Body/Page51Body"
import Page51Footer from "../Page51Footer/Page51Footer"
import Page51Header from "../Page51Header/Page51Header"

const Page51 = () => {
    return (
        <div className="lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3">
            <Page51Header></Page51Header>
            <Page51Body></Page51Body>
            <Page51Footer></Page51Footer>
        </div>
    )
}

export default Page51