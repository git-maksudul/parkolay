import Page49Body from "../Page49Body/Page49Body"
import Page49Footer from "../Page49Footer/Page49Footer"
import Page49Header from "../Page49Header/Page49Header"

const Page49 = () => {

    return (
        <div className="lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3">
            <Page49Header></Page49Header>
            <Page49Body></Page49Body>
            <Page49Footer></Page49Footer>
        </div>
    )
}

export default Page49