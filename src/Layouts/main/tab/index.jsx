import Content from "./content"
import Item from "./item"
import Items from "./items"
import { TabContext } from "./context"
import { useState } from "react"
import PropTypes from 'prop-types';

const Tab = ({ children, activeTab }) => {
    const contents = children.filter(c => c.type === Content);
    const items = children.filter(c => c.type === Items);
    const content = contents.find(c => c.props.id == activeTab)

    const [active, setActive] = useState(activeTab)
    const datam = {
        active,
        setActive
    }
    return (
        <TabContext.Provider value={datam}>
            <div className="border-b border-[#2f3336] sticky top-0 z-40 bg-[color:var(--background-primary)] backdrop-blur-md">
                {items}
            </div>
            {content}
        </TabContext.Provider>
    )
}

Tab.Items = Items
Tab.Item = Item
Tab.Content = Content

Tab.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    activeTab: PropTypes.string.isRequired,
};

export default Tab