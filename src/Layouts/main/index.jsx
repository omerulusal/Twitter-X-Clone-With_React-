import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar/Sidebar"
import RightBar from "./rightBar/index"
import { useSelector } from "react-redux"
import Modal from "~/modals"
import { useEffect } from "react"
import { useGorunum } from "~/store/appearance/hooks"

const MainLayout = () => {

    const useModal = () => useSelector(state => state.modal.modal)
    const modal = useModal()

    const gorunum = useGorunum()

    useEffect(() => {

        document.documentElement.style.setProperty('--background-primary', gorunum.backgroundColor.primary)
        document.documentElement.style.setProperty('--background-secondary', gorunum.backgroundColor.secondary)
        document.documentElement.style.setProperty('--background-third', gorunum.backgroundColor.third)

        document.documentElement.style.setProperty('--color-primary', gorunum.color.primary)
        document.documentElement.style.setProperty('--color-secondary', gorunum.color.secondary)
        document.documentElement.style.setProperty('--color-base', gorunum.color.base)
        document.documentElement.style.setProperty('--color-base-secondary', gorunum.color.baseSecondary)

        document.documentElement.style.setProperty('--font-size', gorunum.fontSize + "px")
    }, [gorunum])



    return (
        <div className="w-[1265px] mx-auto flex">
            {modal && <Modal />}
            <Sidebar />
            <main className="flex-1 flex gap-[30px]">
                <main className="flex-1 max-w-[600px] border-x border-[color:var(--background-third)]">
                    <Outlet />
                </main>
                <RightBar />
            </main>
        </div>
    )
}
// Outlet sayesinde MainLayoutun children olan componentlerini ekrana verdim
//childrens: Home, explore, notifications ...
export default MainLayout