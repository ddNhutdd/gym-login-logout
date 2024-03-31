import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
    static propTypes = {
        inputChangeHandle: PropTypes.func,
        values: PropTypes.object,
        checkboxChangeHandle: PropTypes.func,
        formSubmitHandle: PropTypes.func
    }

    render() {
        const {
            inputChangeHandle,
            values,
            checkboxChangeHandle,
            formSubmitHandle
        } = this.props;
        return (
            <div className="container mt-3 d-flex align-items-center text-center">
                <div className="form-signin">
                    <form onSubmit={formSubmitHandle}>
                        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <div className="form-floating">
                            <input
                                onChange={inputChangeHandle}
                                className="form-control email"
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                value={values.email}
                            />
                            <label>Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                onChange={inputChangeHandle}
                                className="form-control password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                            />
                            <label>Password</label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={checkboxChangeHandle}
                                    checked={values.isRemember}
                                /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                    </form>
                </div>
            </div>
        )
    }
}
