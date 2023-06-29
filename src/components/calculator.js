import React, { useState } from "react";

export default function Calculator() {

    const [num1, setNum1] = useState(0);
    const [num2,setNum2]= useState(0);
    const [num3, setNum3] = useState(0);
    const [operator, setOperator] = useState('');
    const [result,setResult] = useState([]);
    const [opr_flag,setOpr] = useState(0);
    const  [console,setConsole] = useState("");
    var res= "abc";
    res = res + num1 ;
    const handleInput = (e) =>  {


        e.preventDefault();
        const newVal = e.target.value;
        setConsole("inside handleinput\n");
        if(opr_flag==0)
        {
            if((newVal >=0 && newVal<=9 ))
            {
                const newNum1 = num1+newVal;
                setConsole("inside num1\n");
                setNum1(newNum1);
              res = res + "hello";
            }
            
        }
        if(opr_flag==1){

            if((newVal >=0 && newVal<=9 ))
            {
                setConsole("inside num2\n");
                var newNum2 = num2+newVal;
                setNum2(newNum2);
                res = res + `${newNum2}`;
                setOpr(1);
                
            }

            
            
        }
        
        
        
    };

    const handleOperation = (e) =>{
        e.preventDefault();
        
        setConsole("inside handleoperation\n");
        const newOpr = e.target.value;
        if(opr_flag === 0)
        {
            setConsole("inside handleoperation-2\n");
            if(newOpr === '+' || newOpr === '-' || newOpr === '/' || newOpr === '*'  )
            {
                setOperator(newOpr);
                setOpr(1);
             
            }

        }
        
    };

    const calculateResult = (e) => {

        e.preventDefault();
        if(e.target.value ==='=')
            {
                const n1 = Number(num1);
                const n2 = Number(num2);
                var n3 =0;
                switch(operator)
                {
                    case '+' : n3 =  n1 + n2;
                                break;

                    case '-' : n3 =  n1 - n2;
                                break;

                    case '*' : n3 =  n1 * n2;
                                break;

                    case '/' : n3 =  n1 / n2;
                                break;
                    
                    default : break;
                }

                setNum3(n3);
                
                res = res + num3;
                setConsole("inside =\n");
                
            }
    }

    const handleClear = (e) => {

        if(e.target.value=='C')
        {
            setNum1(0);
            setNum2(0);
            setOperator("");
            setNum3(0);
            setOpr(0);
        }
    }

    return (

        <div className="container">
            <div className="title">CALCULATOR</div>
            
            <div className="calculator-container">
                <div className="row-1">
                    <div className="answer-div"></div>
                    <div className="clear-div"></div>
                    <input value={ `${num1} ${operator} ${num2!=0?num2:''} ${num3!=0?'='+num3:''} `}></input>
                    <button onClick={handleClear} value='C'>C</button>
                </div>
                <div className="row-2">

                    <div className="keys">
                    <button onClick={handleInput} value='1'>1</button>
                    <button onClick={handleInput} value="2">2</button>
                    <button onClick={handleInput} value="3">3</button>
                    </div>         
                    
                    <button className="operation" onClick={handleOperation} value="/" >/</button>
                </div>
                <div className="row-3">

                    <div className="keys">
                    <button onClick={handleInput} value="4">4</button>
                    <button onClick={handleInput} value="5">5</button>
                    <button onClick={handleInput} value="6">6</button>
                    </div>                
                    
                    <button className="operation" onClick={handleOperation} value="-">-</button>
                </div>

                <div className="row-4">

                    <div className="keys">
                    <button onClick={handleInput} value="7">7</button>
                    <button onClick={handleInput} value="8">8</button>
                    <button onClick={handleInput} value="9">9</button>
                    </div>           
                    
                    <button className="operation" onClick={handleOperation} value="+">+</button>
                </div>

                <div className="row-5">
                                    
                    <div className="keys">
                    <button disabled>.</button>
                    <button onClick={handleInput} value="0">0</button>
                    <button className="equals"  onClick={calculateResult} value="=">=</button>
                    </div>
                    <button className="operation"  onClick={handleOperation} value="*">*</button>
                </div>
            </div>
        </div>
    );
}