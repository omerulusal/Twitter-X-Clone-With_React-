import modallar from "~/routes/modals"
import { useSelector } from "react-redux"
import { removeModal } from "~/store/modal/actions"

export default function Modal() {
    const useModal = () => useSelector(state => state.modal.modal)
    const modal = useModal()
    const currentModal = modallar.find(m => m.name == modal.name)
    return (
        <div className="fixed inset-0 bg-[#5b7083]/40 flex items-center justify-center z-10">
            <div className="bg-black max-w-[600px] w-full max-h-[90vh] overflow-auto rounded-2xl">
                {currentModal && <currentModal.element kapat={removeModal} />}
            </div>
        </div>
    )
}