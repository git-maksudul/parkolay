import Page47Body from "../Page47Body/Page47Body"
import Page47Footer from "../Page47Footer/Page47Footer"
import Page47Header from "../Page47Header/Page47Header"

const Page47 = () => {
    return (
        <div className="lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3">
            <Page47Header></Page47Header>
            <Page47Body></Page47Body>
            <Page47Footer></Page47Footer>
        </div>
    )
}

export default Page47