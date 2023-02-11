var eq='';
var eq2=''
var equal = 0;

function evaluate(key){
    switch(key){
        case 'AC':
            eq2 = '';
            eq = '';
            break;

        case 'C':
            eq = eq.substring(0 , eq.length-1);
            eq2 = eq2.substring(0 , eq2.length-1);
            break;

        case '=':
            equal = 1;
            eq = eval(eq);
            break;

        default:
            if(isNaN(key)!=1){
                if(equal === 1){
                    equal = 0;
                    eq='';
                    eq2='';
                }
                
                eq2 = eq += key; 
            }else{
                equal = 0;
                eq2 = eq += key;
            }
    }

    $(".eq2").text(eq2);
    $(".answer").text(eq);
}

$("td").click(function(event){
    
    evaluate(this.innerHTML)
    animate(this.innerHTML);
});

$("body").keydown(function(event){
    switch(event.key){
        case 'Backspace':
            evaluate('C');
            break;

        case 'c':
            evaluate('AC');
            break;

        case '+':
            evaluate(event.key);
            break;
            
        case '-':
            evaluate(event.key);
            break;

        case '/':
            evaluate(event.key);
            break;

        case '*':
            evaluate(event.key);
            break;

        case '%':
            evaluate(event.key);
            break;

        case '^':
            evaluate(event.key);
            break;

        case '.':
            evaluate(event.key);
            break;

        case 'Enter':
            evaluate('=');
            break;

        default :
            if(isNaN(event.key) != 1){
                evaluate(event.key);
                break;
            }       
    }
});

function animate(key){
    $('.' + key).addClass("press");

    setTimeout(function(){
        $('.' + key).removeClass("press");
    }, 200);
}

