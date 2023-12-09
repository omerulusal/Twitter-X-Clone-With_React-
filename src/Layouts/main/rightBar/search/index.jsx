import { useState } from "react"
const Search = () => {
    const [ara, setAra] = useState("")
    const [odak, setOdak] = useState(false)

    return (
        <>
            <div className="mt-1 relative">
                <label htmlFor="inp">
                    <span className="absolute mt-2 ml-1 inline-flex focus:text-[#1d9bf0] pointer-events-none" style={{ color: "#71767b" }} >
                        <svg viewBox="0 0 24 24" fill="currentColor" width={35} height={25} >
                            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" />
                        </svg>
                    </span>
                </label>
                <input
                    type="text" id="inp"
                    className="w-full h-5 p-5 placeholder:pl-5 bg-[color:var(--background-secondary)] border border-transparent outline-none focus:border-[#1d9bf0] rounded-3xl text-center"
                    placeholder="Ara"
                    onFocus={() => setOdak(true)}
                    onBlur={() => setOdak(false)}
                    value={ara}
                    onChange={(e) => setAra(e.target.value)}
                />

                {(ara, odak) && (
                    <button className="w-[22px] h-[22px] rounded-full bg-[#1d9bf0] flex items-center justify-center absolute top-1/2 min-w-[22px] right-3 -translate-y-1/2"
                        onClick={() => setAra("")}>
                        <svg viewBox="0 0 15 15" width={10} height={10} >
                            <path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z" />
                        </svg>
                    </button>
                )}
            </div>
            {odak && (
                <div className="absolute bg--[color:var(--background-primary)] shadow-md shadow-white text-[#71767b] w-[350px] mt-2 rounded-xl max-h-[calc(80vh-53px)] ">
                    <p className="pt-5 p-3">
                        Kişileri, listeleri veya anahtar kelimeleri aramayı dene
                    </p>
                </div>
            )}

        </>
    )
}

export default Search