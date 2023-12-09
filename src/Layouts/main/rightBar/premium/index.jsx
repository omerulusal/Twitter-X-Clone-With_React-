import { setModal } from "~/store/modal/actions"

const Premium = () => {
    return (
        <div className="mt-4 rounded-2xl bg-[color:var(--background-secondary)] text-[color:var(--color-base)] p-3 shadow-[color:var(--background-secondary)] shadow-lg">
            <h3 className="font-bold text-xl mb-3">Premium a Abone Ol</h3>
            <p className="text-[16px]">Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.</p>
            <div className="bg-[color:var(--color-primary)] mt-3 cursor-pointer text-center rounded-full items-center justify-center flex h-11 w-32 transition-colors">
                <button className="font-bold" onClick={()=>setModal('premium')} >
                    Abone ol
                </button>
            </div>
        </div>
    )
}

export default Premium