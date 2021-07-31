$(document).ready(function(){
    var total = 0;var spaces = 0;var alphabets = 0;var numbers = 0;var vowels = 0;
    var str = new Array();
   

    $("#rte").keyup(function(e){
      if((e.keyCode>=32 && e.keyCode<=127) || e.keyCode === 8){  
        str = $(".textinput").val().split("");
        total = str.length;
        spaces = findSpaces(str);
        alphabets = findAlphabets(str);
        numbers = findNumbers(str);
        $("#char").html(total);
        $("#space").html(spaces);
        $("#numbers").html(numbers);
        $("#alpha").html(alphabets);
      
    }
   });
});

function findSpaces(str){
    var s=0;
    for(var i=0;i<str.length;i++){
        if(str[i] === ' '){
             s++; 
        }
    }
    return s;
}

function findAlphabets(str){
    var a=0;
    for(var i=0;i<str.length;i++){
        if((str[i].charCodeAt(0)>=65 && str[i].charCodeAt(0)<=90) || (str[i].charCodeAt(0)>=97 && str[i].charCodeAt(0)<=122)){
             a++; 
        }
    }
    return a;
}

function findNumbers(str){
    var n=0;
    for(var i=0;i<str.length;i++){
        if(str[i].charCodeAt(0)>=48 && str[i].charCodeAt(0)<=57){
             n++; 
        }
    }
    return n;
}

