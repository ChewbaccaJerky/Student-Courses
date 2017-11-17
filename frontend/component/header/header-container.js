import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses,
        year: state.year
    };
};

export default connect(mapStateToProps, null)(Header);