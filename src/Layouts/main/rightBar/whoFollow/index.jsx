import { Link } from "react-router-dom"
import { whoFollows } from "~/utils/MainMenu"

const WhoFollow = () => {
    return (
        <div className="mt-4 rounded-2xl bg-[color:var(--background-secondary)] text-[color:var(--color-base)] p-3 shadow-lg">
            <div className="text-xl font-medium ml-2">
                Kimi takip etmeli
            </div>
            {whoFollows.map((who, index) => (
                <div className="hover:bg-[#eff3f102] w-full rounded-md mb-5" key={index}>
                    <div className="">
                        <Link to="/">
                            <div className="flex justify-between">
                                <div className="text-[#eff3f49a] text-sm pt-3">
                                    <img className="w-10 rounded-md h-10" src={who.img} alt="img" />
                                </div>
                                <div className="-ml-10 mt-2 w-32">
                                    <span className="font-bold text-left hover:underline">{who.fullname}</span>
                                    <small className="block h-2 text-[#eff3f49a] text-[13px]">@{who.username}</small>
                                </div>
                                <button className="bg-[color:var(--color-primary)] text-black mt-3 font-bold rounded-3xl h-10 px-5">Takip Et</button>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
            <Link to="/trends" className="mt-4 hover:bg-[#eff3f102] text-[color:var(--color-primary)] text-lg px-5 py-2 text-left">
                Daha fazla göster
            </Link>
        </div>
    )
}

export default WhoFollow