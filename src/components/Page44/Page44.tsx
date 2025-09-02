import Page44Body from "../Page44Body/Page44Body"
import Page44Footer from "../Page44Footer/Page44Footer"
import Page44Header from "../Page44Header/Page44Header"

const Page44 = () => {

    return (
        <div className="lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3">
            <Page44Header></Page44Header>
            <Page44Body></Page44Body>
            <Page44Footer></Page44Footer>
        </div>
    )
}

export default Page44