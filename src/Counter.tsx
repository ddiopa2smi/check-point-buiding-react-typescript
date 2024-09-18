import React from 'react';

interface MyProps {
    children: React.ReactNode;
}

interface MyState {
    count: number;
}


class Counter extends React.Component<MyProps, MyState> {
    state: MyState = {
        count: 0
    };
    increment = () => {
        this.setState(() => ({
            count: this.state.count + 1,
        }));

        render() {
            return
            (<div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>);
        }
    }
export default Counter;