import Page45Body from "../Page45Body/Page45Body"
import Page45Footer from "../Page45Footer/Page45Footer"
import Page45Header from "../Page45Header/Page45Header"

const Page45 = () => {

    return (
        <div className="lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3">
            <Page45Header></Page45Header>
            <Page45Body></Page45Body>
            <Page45Footer></Page45Footer>
        </div>
    )
}

export default Page45