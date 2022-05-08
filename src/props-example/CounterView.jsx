import React from "react";

function CounterView(props) {
    const { count, onButtonIncrementClick, onButtonDecrementClick } = props;
    return (
        <div>
            <div>Count: {count}</div>
            <div>
                <button onClick={onButtonIncrementClick}>+</button>
                <button onClick={onButtonDecrementClick}>-</button>
            </div>
        </div>
    );
}

export default CounterView;
