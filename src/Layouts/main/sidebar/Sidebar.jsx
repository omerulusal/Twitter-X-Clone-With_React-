import Logo from "./logo/index"
import Menu from "./menu/index"

const Sidebar = () => {
    return (
        <aside className="w-[275px] min-h-screen px-2 flex flex-col sticky top-0">
            <Logo />
            <Menu />
        </aside>
    )
}

export default Sidebar