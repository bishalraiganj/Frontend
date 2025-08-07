import React from 'react';
import '../Counter.css';

class Counter extends  React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

     increment = ()=>{
        this.setState({count: this.state.count + 1})
    }

    render()
    {
        return(

            <div className={"counterDiv"}>
                <div className={"counterDisplayBox"}>
                    <span className={"textBox"}>
                        <b className={"counterTxt"}>Counter:</b>
                        <span className={"counterValue"} >{this.state.count}</span>
                    </span>

                    <span className={"buttonsBox"} >

                        <button className={"addButton"} onClick={this.increment} >add</button>
                    </span>

                </div>


            </div>

        )

    }
}

export default Counter;