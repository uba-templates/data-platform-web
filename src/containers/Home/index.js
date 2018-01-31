import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from 'root/components/Counter';
import * as countAction from 'root/redux/home/action.js';

class Home extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    };

    state = {
        showName: 'loading user'
    };

    getUser = (url) => {
        axios.get(url)
            .then((res) => {
                this.setState({showName: res.data.name});
            }).catch((err) => {
                console.log(err);
            });
    };

    componentDidMount() {
        const url = '/api/getUser';
        this.getUser(url);
    }

    render() {
        const {props, state} = this;
        return (
            <div>
                <p>USER: {state.showName}</p>
                <Counter
                    count={props.count}
                    increCount={props.actions.increment}
                    decreCount={props.actions.decrement}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({count: state.countState.count});

const mapDisPatchToProps = (dispatch) => ({
    actions: bindActionCreators(countAction, dispatch)
});

export default connect(
    mapStateToProps,
    mapDisPatchToProps
)(Home);