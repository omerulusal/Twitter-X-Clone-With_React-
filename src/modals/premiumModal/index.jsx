import { removeModal } from "~/store/modal/actions"

const PremiumModal = () => {
    return (
        <div className="relative overflow-hidden bg-[color:var(--background-secondary)]">
            <h3 className="mt-10 mb-4 text-[25px] leading-7 font-extrabold text-center ">
                Hesabının türü hangisi?
            </h3>
            <div className="p-8 pt-0 text-center mb-5 px-10 text-[#71767b] text-[15px] leading-5">
                <span className="text-[color:var(--color-base)]">Sana uygun doğru aboneliği seç:</span>
                <div className="flex mt-10 gap-3 text-left">
                    <div className="flex-1 p-3 flex-col border-2 cursor-pointer hover:border-[#1d9bf0] rounded-xl ">
                        <h4>Premium</h4>
                        <h3 className="text-[color:var(--color-base)] text-xl font-bold leading-10">Bireyim</h3>
                        <p>Bireyler ve icerik ureticileri icin</p>
                    </div>
                    <div className="flex-1 p-3 flex-col border-2 rounded-xl cursor-pointer hover:border-[#1d9bf0]">
                        <h4>Onaylı Kuruluşlar</h4>
                        <h3 className="text-[color:var(--color-base)] text-xl font-bold leading-10">Kuruluşum</h3>
                        <p>İşletmeler,devlet kurumları, kar amacı gutmeyen kuruluşlar icin</p>
                    </div>
                </div>
                <button className="mt-10 p-3 rounded-3xl font-medium text-xl w-full bg-[color:var(--color-base)] text-[color:var(--background-primary)] ">Abone Ol</button>
                <button className="absolute mt-2 ml-2 top-0 left-0 font-medium text-2xl text-[color:var(--color-base)]" onClick={removeModal}>
                    <svg viewBox="0 0 22 22" width={18.75} height={18.75}>
                        <path fill="currentColor"
                            d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default PremiumModal