function Calculator(){
    this.display = document.querySelector('.display-component');

    this.start = function(){
        document.addEventListener('click', (event) => {
            const element = event.target;
            console.log(element);
            if(element.classList.contains('btn-num')){
                this.printDisplay(element);
            }else if(element.classList.contains('btn-clear')){
                this.cleanDisplay();
            }else if(element.classList.contains('btn-del')){
                this.delLast();
            }else if(element.classList.contains('btn-eq')){
                this.result();
            }
        })
    };

    this.printDisplay = function(element){
        this.display.value += element.innerText
    }

    this.cleanDisplay = function(){
        this.display.value = '';
    }

    this.delLast = function(){
        this.display.value = this.display.value.slice(0, -1);
    }

    this.result = function(){
        count = this.display.value;

        try{
            count = eval(count);
            
            if(!count){
                alert('error');
            }

            this.display.value = count;
        }catch(error){
            alert('ERROR');
            this.display.value = '';
        }
    }

}

const calculator = new Calculator;
calculator.start();
