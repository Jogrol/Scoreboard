import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MinusButton.css';

export default class MinusButton extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <button className="minus-button" onClick={this.props.onClick}>-</button>
          )
    }
}
