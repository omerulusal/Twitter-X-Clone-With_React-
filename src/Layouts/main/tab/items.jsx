import PropTypes from 'prop-types';
const Items = ({ children }) => {
    return (
        <div className="flex h-[3.31rem] items-center">
            {children}
        </div>
    )
}

Items.propTypes = {
    children: PropTypes.node.isRequired
}

export default Items