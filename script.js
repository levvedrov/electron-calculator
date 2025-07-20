const mainSection = document.getElementById("mainSection");
        const inputSection = document.getElementById("inputSection");
        const numbersSection = document.getElementById("stringSection");
        const activeSection = document.getElementById("activeSection");
        const grid = document.getElementById("grid");
        const number = document.getElementById("number");
        const operator = document.getElementById("operator");
        const string = document.getElementById("str");
        //numbersSection.style.backgroundColor = "green";co


    
        document.getElementById("exitBtn").addEventListener("click", ()=>{
            window.Electron.closeWindow();
        });
        
        operator.style.border  =  "100px sold red";

        function isDigit(char) {
            return char >= '0' && char <= '9';
        }
        function calculate(string){
            let stack = [];
            let buffer="";
            for (let index=0; index<string.length; index+=1){
                if (isDigit(string[index]) || string[index] == '.'){
                    buffer += string[index];
                }
                else{
                    if (string[index] == "^"){
                        buffer = buffer**string[index+1];
                        index+=1;
                    }
                    else{
                        stack.push(buffer);
                        buffer = "";
                        stack.push(string[index])
                    }
                }
            }
            stack.push(buffer);
            console.log("1st run:" + stack);
            buffer = [];
            for (let index = 0; index<stack.length; index+=1){
                switch(stack[index]){
                    case 'X':
                        buffer[index-1] = parseFloat(stack[index-1])*parseFloat(stack[index+1]);
                        index+=1;
                        break;
                    case '/':
                        buffer[index-1] = parseFloat(stack[index-1])/parseFloat(stack[index+1]);
                        index+=1;
                        break;
                    default:
                        buffer.push(stack[index]);
                }
            }
            stack = buffer
            console.log("2st run:" + buffer);
            let answer = parseFloat(stack[0]);
            for (let index=1; index<stack.length; index+=1){

                switch(stack[index]){
                    case "+":
                        answer = answer+parseFloat(stack[index+1]);
                        break;
                    case "-":
                        answer=answer-parseFloat(stack[index+1]);
                        break;
                }
            }
            return answer;
        }





        




        //operator.style.backgroundColor = "white";
        //number.style.backgroundColor = "white";
        const numberBtns = document.querySelectorAll("#number button");
        let currentStr = "";
        numberBtns.forEach(button=>{
            button.addEventListener("click", ()=>{
                const val = button.textContent.toString();
                if (val=="="){
                    const val = calculate(currentStr)
                    currentStr = val
                    string.textContent = currentStr;
                }
                else{
                    currentStr += val.toString();
                    string.textContent = currentStr;
                }
                
            })
        })
        const operBtns = document.querySelectorAll("#operator button");
        operBtns.forEach(button=>{
            button.addEventListener("click", ()=>{
                const val = button.textContent.toString();
                if (val=="C"){
                    currentStr = ""
                    string.textContent = currentStr;
                }
                else{
                    currentStr += val.toString();
                    string.textContent = currentStr;
                }
                
            })
        })
        
        //grid.style.border = "1px solid red";
        //inputSection.style.border = "1px solid blue";
        
    