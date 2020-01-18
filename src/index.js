import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.css';
import './font-awesome.min.css';

let bodyBgr = {backgroundColor: 'white'};
const colorArray = [
        '#fcd900', '#fc5c00', '#ac00fc', '#00fc3f', '#fc00da', '#00d6fc', '#00f4fc', '#fc00a8',
        '#2e00fc', '#1dfc00', 'red', 'green', 'gray', 'orange', 'tomato', 'indigo'
]

const quoteArray = [
'Success is going from failure to failure without loosing your enthusiasm', 
'If you can dream it, you can achieve it', 
'The only way to do great work is to love what you do', 
'Either write something worth reading or do something worth writing', 
'You may be dissappointed if you fail, but you are doomed if you don\'t try', 
'Dream big and dear to fail', 
'It does not matter how slowly you go as long as you do not stop', 
'Build your own dreams or someone else will hire you to build theirs', 
'I would rather die of passion than of boredom', 
'I did not fail the test, I just found 100 ways to do it wrong', 
'When I let go what I am, I become what I might be',
'There is only one way to avoid critism: do nothing, say nothing, and be nothing',
'Your time is limited so don\'t waste it living someone else\'s life',
'Life is what happens when you\'re busy making other plans',
'You miss 100% of the shots you don\'t take'
];

const authorArray = [
    'Winston Churchill', 
    'Zig Ziglar', 
    'Steve Jobs', 
    'Benjamin Franklin', 
    'Beverly Sills', 
    'Norman Vaughan', 
    'Confucius', 
    'Farray Gray', 
    'Vincent van Gogh', 
    'Benjamin Franklin',
    'Lao Tzu',
    'Aristotle',
    'Steve Jobs',
    'John Lennon',
    'Wayne Gretzky'
];


class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            randomQuo: Math.floor(Math.random() * 15),
            randomCol: Math.floor(Math.random() * 16)
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange () {

    }

    handleClick () {
        this.setState({
            randomQuo: Math.floor(Math.random() * 15),
            randomCol: Math.floor(Math.random() * 16)
        });
    }
    
    render() {
        return (
<div className="center-div" style={{height:'100vh', backgroundColor: colorArray[this.state.randomCol]}}>
                <h1 className="text-center m-4">
                    A Random Qoute Machine
                </h1>
                <div className="container-fluid">
                    <div className="row">
                        <div  className="col-md-3 col-sm-1"></div>
                        <div  style={bodyBgr} className="col-md-6 col-sm-10 btn-div">
                            <div className="row">
                                <div className="col ">
                                    <h3>
                                        <i className='fa fa-quote-left '></i>
                                        <span className='quote'> {quoteArray[this.state.randomQuo]}. </span>
                                        <i className='fa fa-quote-right'></i>
                                    </h3>
                                </div>
                            </div>
                            <div className="row author">
                                <div className="col">
                                    <p>- {authorArray[this.state.randomQuo]}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <i className="fa fa-facebook social-icons" style={{ color: colorArray[this.state.randomCol]}}></i>
                                    <i className="fa fa-twitter social-icons" style={{ color: colorArray[this.state.randomCol]}}></i>
                                    <i className="fa fa-linkedin social-icons" style={{ color: colorArray[this.state.randomCol]}}></i>
                                </div>
                                <div className="col-4"></div>
                                <div className="col-4">
                                    <span className="next" style={{ backgroundColor: colorArray[this.state.randomCol]}} onClick={this.handleClick}>New Quote</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-1"></div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

