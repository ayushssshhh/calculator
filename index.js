let eq1 = 0;                //screen1 content
var eq = '';                 //screen1 + ans content
let eq2 = 0;                //screen2 content
let ans = 0;                //ans content  
var op = 0;                 //use to detect symbol
var equal = 0;              //use to detect equal 
var sol = 0                 //use for evaluation of continous equal 
var decimalCounter = 0;     //decimal no.
var signCounter = 0;
var a;
var can = 0;

function solve(){
    // eq= eval(eq);
    console.log(eq);
    a = parseFloat(a);
    a = a - ans;

    if(can == 1){
        switch(eq2){
            case '+':
                sol = ans;
                ans = a + ans;
                break;
    
            case 'x':
                sol = ans;
                ans = a * ans;
                break;
    
            case '/':
                sol = ans;
                ans = a/ans;
                break;
    
            case '^':
                sol = ans;
                ans = a**ans;
                break;
    
            case '-':
                sol = ans;
                ans = a - ans;
                break;   

        }
    }

    if(ans === '%'){
        sol = eq2;
        ans = eq2 / 100;
    }

    switch(eq2){
        case '+':
            sol = ans;
            ans = eq1 + ans;
            break;

        case 'x':
            sol = ans;
            ans = eq1 * ans;
            break;

        case '/':
            sol = ans;
            ans = eq1/ans;
            break;

        case '^':
            sol = ans;
            ans = eq1**ans;
            break;

        case '-':            
            sol = ans;
            ans = eq1 - ans;
            break;        
    }

    $(".eq2").text(eq);
    $(".answer").text(ans);  
}

function evaluate(key){
    if(equal === 1){
        eq = ans;
    }
    if((key != 'AC') && (key != 'C')){
        eq = eq + key;
    }

    if(decimalCounter >= 1){
        if(isNaN(key) != 1){
            key /= 10**decimalCounter++;
        } else{
            decimalCounter = 0;
        }
    }

    if(op === 1){
        eq1 = eq2;
        eq2 = ans;
        ans = 0;
        $("eq2").text(eq2);
        op--;
    }

    switch(key){
        case 'AC':
            equal = 0;
            eq1='';
            ans='';
            eq2='';
            eq='';
            break;

        case 'C' :
            if(isNaN(key) != 1){
                equal = 0;
                ans = ans/10;
                ans = Math.floor(ans);
            } else{
                ans = '';
                a = eq = eq1;
                eq2='';
                signCounter = 0;
                can = 1;
            }
            break;

        case '.':
            equal = 0;
            decimalCounter++;
            break;

        case '+':
            
            if(signCounter == 0){
                signCounter = 1;
            } else{
                
                console.log("yay");
                solve();
                signCounter = 0;
            }         
            equal = 0;
            op++;
            eq2 = ans;
            ans = key;
            break;

        case '-':

            if(signCounter == 0){
                signCounter = 1;
            } else{
                
                console.log("yay");
                solve();
                signCounter = 0;
            }
            
            equal = 0;
            op++;
            eq2 = ans;
            ans = key;
            break;

        case '/':

            if(signCounter == 0){
                signCounter = 1;
            } else{
                
                console.log("yay");
                solve();
                signCounter = 0;
            }
            
            equal = 0;
            op++;
            eq2 = ans;
            ans = key;
            break;
        
        case 'x':

            if(signCounter == 0){
                signCounter = 1;
            } else{
                
                console.log("yay");
                solve();
                signCounter = 0;
            }
            
            equal = 0;
            op++;
            eq2 = ans;
            ans = key;
            break;


        case '%':

            if(signCounter == 0){
                signCounter = 1;
            } else{
                
                console.log("yay");
                solve();
                signCounter = 0;
            }
            
            equal = 0;
            eq2 = ans;
            ans = key;
            break;


        case '^':

            if(signCounter == 0){
                signCounter = 1;
            } else{
                
                console.log("yay");
                solve();
                signCounter = 0;
            }
            
            equal = 0;
            op++;
            eq2 = ans;
            ans = key;
            break;

        case '=':
            if(equal === 1){
                eq1 = ans;
                ans = sol;
                eq = eq1 + eq2 + ans + '=';
            } else{
                equal = 1;
                solve();
            }
            break;

        default : 
            if(isNaN(key) != 1){
                
                if(equal == 1){
                    eq1 = eq = eq2 = "";
                    ans = "";
                    ans += key;

                } else{
                    if(decimalCounter === 0){
                        equal = 0;
                        sol = ans;
                        key = parseFloat(key)
                        ans = ans*10 + key;
                    }else{
                        ans += key;
                    }
                }
            }
            break;
    }
    
    $(".eq2").text(eq);
    $(".answer").text(ans);
    if(ans === '%'){
        solve();
    }

}

$("td").click(function(event){
    evaluate(this.innerHTML)
});

$("body").keypress(function(event){
    evaluate(event.key);
});

