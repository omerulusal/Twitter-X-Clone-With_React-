import PropTypes from 'prop-types';
const StickyHeader = ({ title }) => {
    return (
        <header className="sticky top-0 bg-[color:var(--background-primary)] backdrop-blur-md ">
            <h3 className="px-3 h-[3.31rem] flex items-center text-xl leading-6 font-bold ">
                {title}
            </h3>
        </header>
    )
}
StickyHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default StickyHeader