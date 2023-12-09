import Footer from "./footer"
import News from "./news"
import Premium from "./premium"
import Search from "./search"
import WhoFollow from "./whoFollow"

const RightBar = () => {
    return (
        <aside className="w-[350px] min-h-screen mr-2.5">
            <Search />
            <Premium />
            <News />
            <WhoFollow />
            <Footer />
        </aside>
    )
}

export default RightBar