import AppearanceModal from "~/modals/appearance"
import PremiumModal from "~/modals/premiumModal"

const modallar = [
    {
        name: 'appearance',
        element: AppearanceModal
        // AppearanceModal i component olarak cagırmadım
    },
    {
        name: 'premium',
        element: PremiumModal
    }
]

export default modallar