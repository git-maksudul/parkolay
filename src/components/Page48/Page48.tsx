import Page48Body from "../Page48Body/Page48Body"
import Page48Footer from "../Page48Footer/Page48Footer"
import Page48Header from "../Page48Header/Page48Header"

const Page48 = () => {

    return (
        <div className="lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3">
            <Page48Header></Page48Header>
            <Page48Body></Page48Body>
            <Page48Footer></Page48Footer>
        </div>
    )
}

export default Page48