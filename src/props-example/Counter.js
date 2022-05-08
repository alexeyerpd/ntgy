import React from "react";
import CounterView from "./CounterView";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    onButtonIncrementClick = (event) => {
        this.setState((state) => {
            return { count: state.count + 1 };
        });
    };

    onButtonDecrementClick = (event) => {
        this.setState((state) => {
            return { count: state.count - 1 };
        });
    };

    render() {
        return (
            <CounterView
                count={this.state.count}
                onButtonIncrementClick={this.onButtonIncrementClick}
                onButtonDecrementClick={this.onButtonDecrementClick}
            />
        );
    }
}

export default Counter;
