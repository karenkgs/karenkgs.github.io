import './assets/css/App.css';

import React, { Fragment } from 'react';

class InputWithLabel extends React.Component {
    render() {
        return (
            <Fragment>
                <label htmlFor={this.props.inputName}>{this.props.labelTitle}</label>
                <input className="form-control col-xs-12 col-sm-6 col-md-8"
                        name={this.props.inputName}
                        type={this.props.type}>
                </input>
            </Fragment>
        );
    };
}
export default InputWithLabel;
