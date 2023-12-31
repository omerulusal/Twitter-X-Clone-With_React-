import classNames from "classnames"
import { Link } from "react-router-dom"
import { setBacgroundColor, setColor } from "~/store/appearance/actions"
import { useGorunum } from "~/store/appearance/hooks"
import { fonstSizes, renkler } from "~/utils/MainMenu"

// eslint-disable-next-line react/prop-types
const AppearanceModal = ({ kapat }) => {


    const { backgroundColor, color } = useGorunum()

    return (
        <div className="w-[600px] z-20 overflow-hidden bg-[color:var(--background-secondary)]">
            <h3 className="mt-8 mb-3 text-[23px] leading-7 font-extrabold text-center ">
                Gorunumu Özelleştir
            </h3>
            <div className="p-8 pt-0 text-center mb-5 text-[#71767b] text-[15px] leading-5">
                Bu ayarlar, bu tarayıcıdaki tum X hesaplarını etkiler
            </div>
            <div className="mx-8 mb-4">
                <div className="border border-[#2f336] rounded-2xl px-4 flex py-3 ">
                    <img className="w-[40px] h-[40px] rounded-full object-cover gap-3" src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg" alt="" />
                    <div className="flex-1 flex flex-col ">
                        <header className="mb-0.5 leading-5 text-[15px] flex items-center">
                            <div className="font-bold flex items-center" >
                                X
                                <svg viewBox="0 0 22 22" className="text-[#1d9bf0] ml-0.5" width={18.75} height={18.75}>
                                    <path fill="currentColor"
                                        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                                </svg>
                            </div>
                            <div className="ml-1 flex items-center text-[#71767b]">
                                @X 31d
                            </div>
                        </header>
                        <div className="leading-5 text-[15px] ">
                            Bu alan Tweet componentine dönusturulecek
                            Bu alan Tweet componentine dönusturulecek
                            Bu alan Tweet <Link to="/" className="text-[#1d9bf0]">@X</Link> componentine dönusturulecek
                        </div>
                    </div>
                </div>
                <section>
                    <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 text-[13px] font-bold ">Yazı Tipi Boyutu</h6>
                    <div className="bg-[color:var(--background-primary)] flex p-4 rounded-2xl items-center justify-between gap-5">
                        <div className="text-[13px] ">Aa</div>
                        <div className="h-1 bg-[color:var(--color-primary)] flex-1 rounded-full flex items-center justify-around">
                            {fonstSizes.map((fs, index) => (
                                <button className="w-8 h-8 rounded-full hover:bg-[color:var(--color-primary)] flex items-center justify-center" key={index}>
                                    <div className="w-3 h-3 rounded-full bg-[color:var(--color-primary)]">
                                    </div>
                                </button>
                            ))}
                        </div>
                        <div className="text-[20px] ">Aa</div>
                    </div>
                </section>
                <section>
                    <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 text-[13px] font-bold ">Renk</h6>
                    <div className="bg-[color:var(--background-secondary)] flex justify-around items-center py-1 rounded-2xl">
                        {renkler.map((renk, index) => (
                            <button
                                onClick={() => {
                                    setColor({
                                        ...color,
                                        primary: renk,
                                    })
                                }}
                                style={{ "--bg": renk }} className="w-11 h-11 rounded-full bg-[color:var(--bg)] flex items-center justify-center" key={index}>
                                {color.primary === renk && <svg viewBox="0 0 24 24" width={24} height={24} >
                                    <path fill="currentColor" d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" />
                                </svg>}
                            </button>
                        ))}
                    </div>
                </section>
                <section>
                    <h6 className="text-[color:var(--color-base-secondary)] mb-1 leading-5 text-[13px] font-bold ">Arka plan</h6>
                    <div
                        className="py-2 px-4 mb-3 grid gap-2 grid-cols-3 bg-[color:var(--background-secondary)] rounded-2xl">
                        <button
                            onClick={() => {
                                setColor({
                                    ...color,
                                    base: "#0f1419",
                                    baseSecondary: "#536471",
                                })
                                setBacgroundColor({
                                    name: "light",
                                    primary: "#fff",
                                    secondary: "#f7f9f9",
                                    third: "#eff3f4",
                                    modal: "#00000066"
                                })
                            }}
                            className={classNames("h-16 pr-3 pl-2 bg-white text-[#0f1419] border border-white/0.5 font-bold group flex items-center gap-1.5", {
                                "!border-[color:var(--color-primary)] !border-2": backgroundColor.name === 'light'
                            })} >
                            <div className="w-10 flex-shrink-0 h-10 rounded-full group-hover:bg-white/10 flex items-center justify-center">
                                <div className={classNames("w-5 h-5 rounded-full border-2 border-[#3e4144] flex items-center justify-center", {
                                    "bg-[color:var(--color-primary)]": backgroundColor.name === "light"
                                })} >
                                    {backgroundColor.name === "light" && <svg viewBox="0 0 24 24" width={24} height={24} >
                                        <path fill="currentColor" d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" />
                                    </svg>}
                                </div>
                            </div>
                            Varsayılan
                        </button>
                        <button
                            onClick={() => {
                                setColor({
                                    ...color,
                                    base: "#f7f9f9",
                                    baseSecondary: "#8b98a5",
                                })
                                setBacgroundColor({
                                    name: "dark",
                                    primary: "#15202b",
                                    secondary: "#1e2732",
                                    third: "#263340",
                                    modal: "#5b708366"
                                })
                            }}
                            className={classNames("h-16 pr-3 pl-2 bg-[#15202b] text-[#f7f9f9] border font-bold border-white/0.5 group flex items-center gap-1.5 ", {
                                "!border-[color:var(--color-primary)] !border-2": backgroundColor.name === "dark"
                            })}>
                            <div className="w-10 flex-shrink-0 h-10 rounded-full group-hover:bg-white/10 flex items-center justify-center">
                                <div className={classNames("w-5 h-5 rounded-full border-2 border-[#3e4144] flex items-center justify-center", {
                                    "bg-[color:var(--color-primary)]": backgroundColor.name === "dark"
                                })} >
                                    {backgroundColor.name === "dark" && <svg viewBox="0 0 24 24" width={24} height={24} >
                                        <path fill="currentColor" d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" />
                                    </svg>}
                                </div>
                            </div>
                            Loş
                        </button>
                        <button
                            onClick={() => {
                                setColor({
                                    ...color,
                                    base: "#e7e9ea",
                                    baseSecondary: "#71767b",
                                })
                                setBacgroundColor({
                                    name: "darker",
                                    primary: "#000",
                                    secondary: "#16181c",
                                    third: "#273340",
                                    modal: "#5b708366"
                                })
                            }}
                            className={classNames("h-16 pr-3 pl-2 bg-black text-[#f7f9f9] border font-bold border-white/0.5 group flex items-center gap-1.5:", {
                                "!border-[color:var(--color-primary)] !border-2": backgroundColor.name === "darker"
                            })}>
                            <div className="w-10 flex-shrink-0 h-10 rounded-full group-hover:bg-white/10 flex items-center justify-center">
                                <div className={classNames("w-5 h-5 rounded-full border-2 border-[#3e4144] flex items-center justify-center", {
                                    "bg-[color:var(--color-primary)]": backgroundColor.name === "darker"
                                })} >
                                    {backgroundColor.name === "darker" && <svg viewBox="0 0 24 24" width={24} height={24} >
                                        <path fill="currentColor" d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" />
                                    </svg>}
                                </div>
                            </div>
                            Işıklar kapalı
                        </button>
                    </div>
                </section>
                <div
                    onClick={kapat}
                    className="
                    bg-[color:var(--color-primary)] mt-3 mx-auto overflow-hidden cursor-pointer text-center rounded-full items-center 
                    justify-center flex h-11 w-32 hover:bg-[#1a8cd8] transition-colors font-bold"
                >
                    Bitti
                </div>
            </div>
        </div>
    )
}

export default AppearanceModal