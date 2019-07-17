import React, { Component } from 'react';
import UpdatedComponents from './withCounter'
class ClickCounter extends Component {
    render() {
        const {count,increment} = this.props;
        return (
            <div>
                <button onClick={increment}>{this.props.name} Click {count} times</button>
            </div>
        );
    }
}

export default UpdatedComponents(ClickCounter,5);