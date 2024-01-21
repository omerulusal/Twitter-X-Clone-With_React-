import { NavLink } from "react-router-dom"
import classNames from "classnames"
import { mainMenu } from "~/utils/MainMenu"
import Daha from "./daha/More"
import { Popover, Transition } from "@headlessui/react"
import { useSelector } from "react-redux"

const Menu = () => {
    const hesap = useSelector(state => state.auth.currentAccount)//store klasöru > index.js>auth>index.js
    return (
        <nav className="mt-0.5 mb-1">
            {
                mainMenu.map((menu, index) => (
                    <NavLink to={menu.path} key={index} className="py-1 block group">
                        {({ isActive }) => (
                            <div className={classNames("p-3 rounded-full transition-colors text-[color:var(--color-base)] inline-flex items-center group-hover:bg-[#eff3f41a] gap-5 relative ", { "font-bold": isActive })}>
                                <span>
                                    {menu.notifications &&
                                        <span className="absolute bg-[color:var(--color-primary)] text-xs text-black text-center rounded-full top-0 left-12 w-[16px]"> {menu?.notifications} </span>
                                    }
                                </span>
                                {menu.icon}
                                <div className="pr-4 text-xl" >
                                    {menu.title}
                                </div>
                            </div>
                        )}
                    </NavLink>
                ))
            }
            <Daha />

            <div className="bg-[color:var(--color-primary)] cursor-pointer text-center rounded-full items-center justify-center flex min-h-[52px] w-11/12 transition-colors">
                <a href="" className="font-bold">
                    Gönder
                    {/* tıklandıgında modal ac */}
                </a>
            </div>

            <Popover className="relative group mt-10 cursor-pointer">
                <Popover.Button>
                    <div className="px-5 py-2 rounded-full transition-colors inline-flex items-center  group-hover:bg-[#eff3f41a] gap-5">
                        <div className="w-[40px] h-[40px] object-cover">
                            <img src={hesap.avatar} alt="avatar" className="rounded-full" />
                        </div>
                        <div id="user">
                            <div className="font-bold">
                                Omer
                            </div>
                            <div className="text-sm text-gray-500">
                                @scalperOmer
                            </div>
                        </div>
                        <div id="threeDot" className="">
                            <svg viewBox="0 0 24 24" width={18} height={18} >
                                <path fill={"#fff"} d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                            </svg>
                        </div>
                    </div>
                </Popover.Button>
                <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform opacity-0"
                    enterTo="transform opacity-100"
                    leave="transition duration-200 ease-out"
                    leaveFrom="transform opacity-100"
                    leaveTo="transform opacity-0"
                >

                    <Popover.Panel className="p-2 absolute w-80 -top-64 bg-[color:var(--background-primary)] rounded-3xl shadow-white shadow-sm transition-all">
                        <div className="bg-[color:var(--background-primary)] rounded-lg mx-auto">
                            <div className="py-2">
                                <a href="#" className="flex items-center justify-center hover:bg-[#eff3f41a] p-3 rounded-sm">
                                    <p className="font-bold">Var olan bir hesap ekle</p>
                                </a>
                            </div>
                        </div>
                        <div className="bg-[color:var(--background-primary)] rounded-lg mx-auto">
                            <div className="py-2">
                                <a href="#" className="flex items-center justify-center mb-4 hover:bg-[#eff3f41a] p-3 rounded-sm">
                                    <p className="font-bold">@scalperOmer hesabından cıkış yap</p>
                                </a>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>

        </nav>
    )
}

export default Menu