import Page53Body from "../Page53Body/Page53Body"
import Page53Footer from "../Page53Footer/Page53Footer"
import Page53Header from "../Page53Header/Page53Header"

const Page53 = () => {
    return (

        <div className="lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3">
            <Page53Header></Page53Header>
            <Page53Body></Page53Body>
            <Page53Footer></Page53Footer>
        </div>
    )
}

export default Page53