import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import * as serviceWorker from './serviceWorker';

let bodyBgr = {backgroundColor: 'red'};
let bodyBgb = {backgroundColor: 'blue'};
const bodyBgg = {backgroundColor: 'green'};
class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            click: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange () {

    }

    handleClick () {
        if (this.state.click) {
            bodyBgr = bodyBgb;
            this.setState({
                click : false
            });
        } else {
            bodyBgr = bodyBgr;
            this.setState({
                click : true
            });
        }
    }
    render() {
        return (
            <div>
                <h1 className="text-center">
                    A Random Qoute Machine
                </h1>
                <div className="container-fluid">
                    <div className="row">
                        <div  className="col-3"></div>
                        <div  style={bodyBgr} className="col-6 btn-div">
                            <button className="btn bg-light" onClick={this.handleClick}>New qoute</button>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
