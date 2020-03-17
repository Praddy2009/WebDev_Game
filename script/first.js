var b=0;
var a=0;

document.getElementById("But").onclick=function(){
    a=Math.floor((Math.random()*5)+1);

    b=document.getElementById("field").value;
    if(b==''){
        document.getElementById("result").style.color="red"
        document.getElementById("result").innerHTML="No Input Given"
    }
    else if(b<1 || b>6){
        document.getElementById("result").style.color="red"
        document.getElementById("result").innerHTML="Are you an Alien"
    }
    else if(b==6){
        document.getElementById("result").style.color="red"
        document.getElementById("result").innerHTML="Illah Hritik Roshan"
    }
    else if(b==a){
        document.getElementById("result").style.color="Green"
        document.getElementById("result").innerHTML="Tukkebaz!! Correct"
    }
    
    else{
        document.getElementById("result").style.color="Red"
        document.getElementById("result").innerHTML="Bad Luck Answer was "+a;
    }
    document.getElementById("field").value='';

}