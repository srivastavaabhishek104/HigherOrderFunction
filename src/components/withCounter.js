import React,{Component} from 'react';

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        
        constructor(props) {
            super(props)
            this.state = {
                count : 0
            }
        }
    
        onIncrementCounter = () => {
            this.setState((previousState) => {
                return {count: previousState.count+1}
            });
        }

        render() {
            return (
                <div>
                    <OriginalComponent count={this.state.count} increment = {this.onIncrementCounter}/>
                </div>
            );
        }
    }
    return NewComponent;
}
export default UpdatedComponent;