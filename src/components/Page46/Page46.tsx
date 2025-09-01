import Page46Body from "../Page46Body/Page46Body"
import Page46Footer from "../Page46Footer/Page46Footer"
import Page46Header from "../Page46Header/Page46Header"

const Page46 = () => {
    return (
        <div className='lg:pt-[80px] lg:mx-[80px] lg:pb-10 mx-3'>
            <Page46Header></Page46Header>
            <Page46Body></Page46Body>
            <Page46Footer></Page46Footer>
        </div>
    )
}

export default Page46