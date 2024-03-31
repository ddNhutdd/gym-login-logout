import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
    static propTypes = {
        logoutHandle: PropTypes.func
    }
    componentWillUnmount() {
        alert('Goodbye!!!');
    }
    render() {
        const {
            logoutHandle
        } = this.props;

        return (
            <div className="container mt-3 d-flex align-items-center text-center">
                <div className="form-signin">
                    <h1 className="h3 mb-3 fw-normal">Welcome</h1>
                    <button
                        className="w-100 btn btn-lg btn-primary"
                        type="button"
                        onClick={logoutHandle}
                    >
                        Log out
                    </button>
                </div>
            </div>
        )
    }
}
