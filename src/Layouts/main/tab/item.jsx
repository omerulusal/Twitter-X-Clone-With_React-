import classNames from "classnames";
import { useTab } from "./context"
import PropTypes from 'prop-types';

const Item = ({ children, id }) => {
    const { active, setActive } = useTab()
    return (
        <button
            onClick={() => {
                setActive(id)
            }}
            type="button" className="flex-auto text-center"
        >
            <div className={classNames("h-[3.31rem] relative inline-flex items-center hover:bg-[#181818] w-full justify-center  transition-all", {
                "font-bold": active === id,
                "text-[color:var(--color-base-secondary)] font-medium": active !== id
            })}>
                {children}
                {active === id && (
                    <div className="h-[4px] absolute bottom-0 rounded-full bg-[color:var(--color-primary)]">
                        <div className="w-32 flex items-center justify-center" />
                    </div>
                )}
            </div>
        </button >
    )
}
Item.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
};

export default Item