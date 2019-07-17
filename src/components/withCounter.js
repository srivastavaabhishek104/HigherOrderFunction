import React,{Component} from 'react';

const UpdatedComponent = (OriginalComponent,incrementNumber) => {
    class NewComponent extends Component {
        
        constructor(props) {
            super(props)
            this.state = {
                count : 0
            }
        }
    
        onIncrementCounter = () => {
            this.setState((previousState) => {
                console.log(incrementNumber);
                
                return {count: previousState.count+incrementNumber}
            });
        }

        render() {
            return (
                <div>
                    <OriginalComponent 
                        count={this.state.count} 
                        increment = {this.onIncrementCounter}
                        {...this.props}/>
                </div>
            );
        }
    }
    return NewComponent;
}
export default UpdatedComponent;