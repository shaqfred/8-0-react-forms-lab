import { render } from "@testing-library/react";
import React from "react";
import "./Form.css";


function Form() {
  return (

    findMode =(numArr) => {
      let obj = {};
      numArr.forEach((num)=>{
        if(obj.hasOwnProperty((num)) {
          obj[num] += 1;
        } else {
          obj[num] = 1;
        }
        });
      })

    //   let newArr = Objects.entries(obj);
    //   let mode = newArr[0]
    //   for (let i = 1, i < newArr.length; i++) {
    //     if (newArr[i][1] > mode [1]) {
    //       mode = newArr[i];
    //     }
    //   }
    //   return mode [0];
     };
    handleTextInput =(event)=> {
      const {value} = event.target;
      const numArr =value.split(',').map((ele) => {
        return Number(ele);
      });
      this.setState({
        numbers: numArr,
        inputValue: value,
      });
    };

    handleTextInput = (event) => {
      const{value} = event.target;
      this.setState({
        operation: value,
      });
    };

    inputValidator = ()=> {
      const{ numbers, operation} = this.state;
      if (numbers.length === 0) {
        return false;
      
      } else if (
        numbers.some((number)=> {
          return Number.isNaN(number);
        })
    

    ){
return false;


    }
     else if (
      operation !== 'sum' &&
      operation !== 'average' &&
      operation !-- 'mode'

     
    } ;
      return false;
  
    return true;


handleFormSubmit =(event)=> {
  event.preventDefault();
  const {numbers, operation} = this.state;

  if (!this.inputValidator() {
    this.setState({ result: 'Invalid input.',errorTest: 'error'});
  }else{
    if(operation === 'sum'){
      this.setState({
        result: numbers.reduce((acc, ele) => {
          return (acc += ele);
        }),
        inputValue: '',
        operation:'',
        errorTest: 'noError',
 });
    }else if (operation === 'average') {
      this.setState({
        result: (
          numbers.reduce((acc, ele) => {
            return acc + ele;

          }) / numbers.length
        ).toFixed(2),
         inputValue: '',
         operation: '',
         errorTest: 'noError',
          
      });
    }else{
      this.setState({
        result: this.findMode(numbers),
        inputValue: '',
        operation: '',
        errorTest: 'noError',

      });
    }

    }
  }


render() ;
  const {result,inputValue,operation,errorTest} = this.state;
  return


    <form>
      <input id="values" name="values" type="text" />
      <select id="operation" name="operation">
        <option value=""></option>
        <option value="sum">sum</option>
        <option value="average">average</option>
        <option value="mode">mode</option>
      </select>
      <button type="submit">Calculate</button>
    
  <div>
    <form onSubmit={this.handleFormSubmit}>
      <input
      id='values'
      name='values'
      type='text'
      value={inputValue}
      onChange={this.handleTextInput}
      class={errorTest}
      />
      <select
      id='operation'
      name='operation'
      value={operation}
      onChange={this.handleTextInput}
      class={errorTest}
      ></select>
       
     
    </form>
    <p>{result}</p>
  </div>
  
/</form>
export default Form;
