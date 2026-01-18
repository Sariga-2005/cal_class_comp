import React, { Component } from 'react';

class CalculatorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBoxA: '',
      textBoxB: '',
      result: null,
      modSumSquare: null,
      evenOdd: null
    };
  }

  // Handle input changes
  handleInputA = (e) => {
    this.setState({ textBoxA: e.target.value });
  }

  handleInputB = (e) => {
    this.setState({ textBoxB: e.target.value });
  }

  // Basic Operations
  handleAddition = () => {
    const a = parseFloat(this.state.textBoxA) || 0;
    const b = parseFloat(this.state.textBoxB) || 0;
    this.setState({ result: `Addition: ${a} + ${b} = ${a + b}` });
  }

  handleSubtraction = () => {
    const a = parseFloat(this.state.textBoxA) || 0;
    const b = parseFloat(this.state.textBoxB) || 0;
    this.setState({ result: `Subtraction: ${a} - ${b} = ${a - b}` });
  }

  handleMultiplication = () => {
    const a = parseFloat(this.state.textBoxA) || 0;
    const b = parseFloat(this.state.textBoxB) || 0;
    this.setState({ result: `Multiplication: ${a} × ${b} = ${a * b}` });
  }

  handleDivision = () => {
    const a = parseFloat(this.state.textBoxA) || 0;
    const b = parseFloat(this.state.textBoxB) || 0;
    if (b === 0) {
      this.setState({ result: 'Division: Cannot divide by zero' });
    } else {
      this.setState({ result: `Division: ${a} ÷ ${b} = ${a / b}` });
    }
  }

  // Evaluate Expression: Result = (a+b)/(a-b)*(a+b)
  evaluateExpression = () => {
    const a = parseFloat(this.state.textBoxA) || 0;
    const b = parseFloat(this.state.textBoxB) || 0;
    
    if (a - b === 0) {
      this.setState({ result: 'Expression Error: (a-b) = 0, cannot divide by zero' });
      return;
    }
    
    const expressionResult = ((a + b) / (a - b)) * (a + b);
    this.setState({
      result: `Expression: (${a}+${b})/(${a}-${b})×(${a}+${b}) = ${expressionResult.toFixed(2)}`
    });
  }

  // MoD_Sum_square: Sum of squares of digits
  handleModSumSquare = () => {
    const num = this.state.textBoxA.replace(/[^0-9]/g, ''); // Get only digits
    
    if (num === '') {
      this.setState({ modSumSquare: 'Please enter a valid number in Text Box A' });
      return;
    }
    
    let sumOfSquares = 0;
    const digits = num.split('');
    
    digits.forEach(digit => {
      const d = parseInt(digit);
      sumOfSquares += d * d;
    });
    
    this.setState({
      modSumSquare: `Sum of squares of digits in ${num}: ${digits.map(d => `${d}²`).join(' + ')} = ${sumOfSquares}`
    });
  }

  // Even_ODD: Check if number is even or odd
  handleEvenOdd = () => {
    const num = parseInt(this.state.textBoxA);
    
    if (isNaN(num)) {
      this.setState({ evenOdd: 'Please enter a valid number in Text Box A' });
      return;
    }
    
    if (num % 2 === 0) {
      this.setState({ evenOdd: `${num} is EVEN` });
    } else {
      this.setState({ evenOdd: `${num} is ODD` });
    }
  }

  // Clear all
  clearAll = () => {
    this.setState({
      textBoxA: '',
      textBoxB: '',
      result: null,
      modSumSquare: null,
      evenOdd: null
    });
  }

  render() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-indigo-600 mb-2">
                Advanced Calculator
              </h1>
              <p className="text-gray-600">Class Component - Set-1 Question 1</p>
            </div>

            {/* Input Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Text Box A (a):
                </label>
                <input
                  type="number"
                  value={this.state.textBoxA}
                  onChange={this.handleInputA}
                  placeholder="Enter value for 'a'"
                  className="w-full p-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:border-indigo-500 text-lg"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Text Box B (b):
                </label>
                <input
                  type="number"
                  value={this.state.textBoxB}
                  onChange={this.handleInputB}
                  placeholder="Enter value for 'b'"
                  className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 text-lg"
                />
              </div>
            </div>

            {/* Basic Operations */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Part A: Basic Operations
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                <button
                  onClick={this.handleAddition}
                  className="bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  + Add
                </button>
                <button
                  onClick={this.handleSubtraction}
                  className="bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                  - Subtract
                </button>
                <button
                  onClick={this.handleMultiplication}
                  className="bg-purple-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-600 transition"
                >
                  × Multiply
                </button>
                <button
                  onClick={this.handleDivision}
                  className="bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition"
                >
                  ÷ Divide
                </button>
                <button
                  onClick={this.evaluateExpression}
                  className="bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition"
                >
                  Evaluate
                </button>
              </div>
            </div>

            {/* Result Display */}
            {this.state.result && (
              <div className="mb-6 p-4 bg-indigo-50 border-2 border-indigo-300 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Result:</h3>
                <p className="text-lg text-indigo-700 font-semibold">{this.state.result}</p>
                <p className="text-sm text-gray-600 mt-2">
                  Expression: (a+b)/(a-b)×(a+b)
                </p>
              </div>
            )}

            {/* Part B: MoD_Sum_square */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Part B: Sum of Squares of Digits
              </h2>
              <button
                onClick={this.handleModSumSquare}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                MoD_Sum_square
              </button>
            </div>

            {this.state.modSumSquare && (
              <div className="mb-6 p-4 bg-teal-50 border-2 border-teal-300 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">MoD_Sum_square Result:</h3>
                <p className="text-lg text-teal-700 font-semibold">{this.state.modSumSquare}</p>
              </div>
            )}

            {/* Part C: Even_ODD */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Part C: Even or Odd Check
              </h2>
              <button
                onClick={this.handleEvenOdd}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
              >
                Even_ODD
              </button>
            </div>

            {this.state.evenOdd && (
              <div className="mb-6 p-4 bg-pink-50 border-2 border-pink-300 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">Even/Odd Result:</h3>
                <p className="text-lg text-pink-700 font-semibold">{this.state.evenOdd}</p>
              </div>
            )}

            {/* Clear Button */}
            <button
              onClick={this.clearAll}
              className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Clear All
            </button>

            {/* Information Panel */}
            <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Instructions:</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Enter values in Text Box A and Text Box B</li>
                <li>• Use operation buttons for basic calculations</li>
                <li>• "Evaluate" calculates: (a+b)/(a-b)×(a+b)</li>
                <li>• "MoD_Sum_square" sums squares of digits in Text Box A</li>
                <li>• "Even_ODD" checks if Text Box A value is even or odd</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorApp;