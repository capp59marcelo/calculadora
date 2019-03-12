import React, { Component } from 'react';
import Button from '../button/Button';
import DisplayResult from '../displayResult/DisplayResult';
import "./calculadora.css"

class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    state = {
        result:''
    }
 
    clearMemory(){
        console.log('Limpar!!');
        this.setState({result:"0"});
    }
 
    setOperation(operation) {
 
        console.log(operation)
    }
 
    addDigit(digit) {
        let novoResult = this.state.result+digit;
        this.setState({result: novoResult});
    }

    render() {
        return (
            <div className="calculadora">
                <DisplayResult value={this.state.result} />
                <div className="container">
                    <div className="div-numeros">
                        <div>
                            <Button label="7" click={ this.addDigit } />
                            <Button label="8" click={ this.addDigit } />
                            <Button label="9" click={ this.addDigit } />
                        </div>
                        <div>
                            <Button label="4" click={ this.addDigit } />
                            <Button label="5" click={ this.addDigit } />
                            <Button label="6" click={ this.addDigit } />
                        </div>
                        <div>
                            <Button label="1" click={ this.addDigit } />
                            <Button label="2" click={ this.addDigit } />
                            <Button label="3" click={ this.addDigit } />
                        </div>
                        <div>
                            <Button label="0" click={ this.addDigit } />
                            <Button label="," click={ this.addDigit } />
                            <Button label="=" click={ this.addDigit } />
                        </div>
                    </div>
                    <div className="div-operacoes">
                        <Button label="c" click={ this.clearMemory } /> 
                        <Button label="/" click={ this.setOperation } />
                        <Button label="*" click={ this.setOperation } />
                        <Button label="-" click={ this.setOperation } />
                        <Button label="+" click={ this.setOperation } />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculadora;