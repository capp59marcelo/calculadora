import React, { Component } from 'react';
import Button from '../button/Button';
import DisplayResult from '../displayResult/DisplayResult';
import "./calculadora.css"

class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    state = {
        primeiroValor: '',
        segundoValor: '',
        operacao: null,
        visor: '',
        result: ''
    }

    clearMemory() {
        this.setState({ primeiroValor: '', segundoValor: '', operacao: null, visor: '', result: '' });
    }

    setOperation(operation) {
        if (this.state.operacao === null && operation !== '=') {
            let novoVisor = this.state.visor + " " + operation + " ";
            this.setState({ visor: novoVisor, operacao: operation });
        }
        else if (this.state.operacao !== null && operation === '=') {
            const { result } = this.state;
            this.setState({ primeiroValor: result, segundoValor: '', operacao: null, visor: result, result: '' });
        }
    }

    addDigit(digit) {
        if (this.state.operacao === null) {
            this.setState({ primeiroValor: this.state.primeiroValor + digit });
        }
        else {
            var segundoValor = parseFloat(this.state.segundoValor + digit);
            this.setState({ segundoValor: this.state.segundoValor + digit });
            var resultado = this.efetuarCalculo(this.state.primeiroValor, this.state.operacao, segundoValor);
            this.setState({ result: resultado });
        }

        let novoVisor = this.state.visor + digit;
        this.setState({ visor: novoVisor });
    }

    efetuarCalculo(primeiroValor, operacao, segundoValor) {
        var resultado;
        if      (operacao === '/') { resultado = primeiroValor / segundoValor }
        else if (operacao === '*') { resultado = primeiroValor * segundoValor }
        else if (operacao === '-') { resultado = primeiroValor - segundoValor }
        else if (operacao === '+') { resultado = primeiroValor + segundoValor }
        return resultado;
    }

    render() {
        return (
            <div className="calculadora">
                <DisplayResult value={this.state.visor} result={this.state.result} />
                <div className="container">
                    <div className="div-numeros">
                        <div>
                            <Button label="7" click={this.addDigit} />
                            <Button label="8" click={this.addDigit} />
                            <Button label="9" click={this.addDigit} />
                        </div>
                        <div>
                            <Button label="4" click={this.addDigit} />
                            <Button label="5" click={this.addDigit} />
                            <Button label="6" click={this.addDigit} />
                        </div>
                        <div>
                            <Button label="1" click={this.addDigit} />
                            <Button label="2" click={this.addDigit} />
                            <Button label="3" click={this.addDigit} />
                        </div>
                        <div>
                            <Button label="0" click={this.addDigit} />
                            <Button label="," click={this.addDigit} />
                            <Button label="=" click={this.setOperation} />
                        </div>
                    </div>
                    <div className="div-operacoes">
                        <Button label="c" click={this.clearMemory} />
                        <Button label="/" click={this.setOperation} />
                        <Button label="*" click={this.setOperation} />
                        <Button label="-" click={this.setOperation} />
                        <Button label="+" click={this.setOperation} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculadora;