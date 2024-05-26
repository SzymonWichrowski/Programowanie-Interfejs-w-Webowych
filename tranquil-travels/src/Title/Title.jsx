import styles from './Title.module.css'
import PropTypes from 'prop-types'

function Title(props) {

    return(
        <p className={`title-large ${styles.title}`}>{props.title}</p>
    );

}

Title.propTypes = {
    title: PropTypes.string,
}

Title.defaultProps = {
    title: "Title",
}

export default Title