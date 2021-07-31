//basic functions
$(function(){
    $('#rte').focus();

    $('#bold').click(function(){document.execCommand('bold', false, null);$('#rte').focus();return false;});
    $('#italic').click(function(){document.execCommand('italic', false, null);$('#rte').focus();return false;});
    $('#underline').click(function(){document.execCommand('underline', false, null);$('#rte').focus();return false;});
    $('#strikeThrough').click(function(){document.execCommand('strikeThrough', false, null);$('#rte').focus();return false;});
    $('#subscript').click(function(){document.execCommand('subscript', false, null);$('#rte').focus();return false;});
    $('#superscript').click(function(){document.execCommand('superscript', false, null);$('#rte').focus();return false;});
    $('#select').click(function(){document.execCommand('selectall', false, null);$('#rte').focus();return false;});
    //cut copy paste
    //leave for prompt jone
    //textheight
    $('#a').click(function(){document.execCommand('fontSize', false, 1);$('#rte').focus();return false;});
    $('#b').click(function(){document.execCommand('fontSize', false, 2);$('#rte').focus();return false;});
    $('#c').click(function(){document.execCommand('fontSize', false, 3);$('#rte').focus();return false;});
    $('#d').click(function(){document.execCommand('fontSize', false, 4);$('#rte').focus();return false;});
    $('#e').click(function(){document.execCommand('fontSize', false, 5);$('#rte').focus();return false;});
    $('#f').click(function(){document.execCommand('fontSize', false, 6);$('#rte').focus();return false;});
    //font face
    $('#Arial').click(function(){document.execCommand('fontName',false,"'Arial'");$('#rte').focus();return false;});
    $('#Courier').click(function(){document.execCommand('fontName',false,"'Courier'");$('#rte').focus();return false;});
    $('#Calibri').click(function(){document.execCommand('fontName',false,"'Calibri'");$('#rte').focus();return false;});
    $('#Georgia').click(function(){document.execCommand('fontName',false,"'Georgia'");$('#rte').focus();return false;});
    $('#Tahoma').click(function(){document.execCommand('fontName',false,"'Tahoma'");$('#rte').focus();return false;});
    $('#Verdana').click(function(){document.execCommand('fontName',false,"' Verdana'");$('#rte').focus();return false;});
    $('#Times').click(function(){document.execCommand('fontName',false,"' Times New Roman'");$('#rte').focus();return false;});
    $('#Impact').click(function(){document.execCommand('fontName',false,"'Impact'");$('#rte').focus();return false;});
    $('#Comic').click(function(){document.execCommand('fontName',false,"'Comic Sans MS'");$('#rte').focus();return false;});

   

    
    //text color
    $('#fr').click(function(){document.execCommand('forecolor', false, "red");$('#rte').focus();return false;});
    $('#fg').click(function(){document.execCommand('forecolor', false, "green");$('#rte').focus();return false;});
    $('#fb').click(function(){document.execCommand('forecolor', false," blue");$('#rte').focus();return false;});
    $('#fbl').click(function(){document.execCommand('forecolor', false, "black");$('#rte').focus();return false;});
    $('#fbr').click(function(){document.execCommand('forecolor', false, "brown");$('#rte').focus();return false;});
    $('#fy').click(function(){document.execCommand('forecolor', false, "yellow");$('#rte').focus();return false;});
    $('#fo').click(function(){document.execCommand('forecolor', false, "orange");$('#rte').focus();return false;});
    $('#fp').click(function(){document.execCommand('forecolor', false, "purple");$('#rte').focus();return false;});
    $('#fw').click(function(){document.execCommand('forecolor', false, "white");$('#rte').focus();return false;});
    $('#flg').click(function(){document.execCommand('forecolor', false, "lightgreen");$('#rte').focus();return false;});
    $('#flb').click(function(){document.execCommand('forecolor', false, "lightblue");$('#rte').focus();return false;});
    $('#fc').click(function(){document.execCommand('forecolor', false, "cyan");$('#rte').focus();return false;});
    $('#fm').click(function(){document.execCommand('forecolor', false, "magenta");$('#rte').focus();return false;});
    $('#fli').click(function(){document.execCommand('forecolor', false, "lightgray");$('#rte').focus();return false;});
    $('#fgr').click(function(){document.execCommand('forecolor', false, "gray");$('#rte').focus();return false;});
    $('#for').click(function(){document.execCommand('forecolor', false, "orangered");$('#rte').focus();return false;});
    $('#fpi').click(function(){document.execCommand('forecolor', false, "pink");$('#rte').focus();return false;});
    $('#fsi').click(function(){document.execCommand('forecolor', false, "silver");$('#rte').focus();return false;});
    $('#fin').click(function(){document.execCommand('forecolor', false, "indigo");$('#rte').focus();return false;});
    
 


    //text back

    $('#br').click(function(){document.execCommand('backcolor', false, "red");$('#rte').focus();return false;});
    $('#bg').click(function(){document.execCommand('backcolor', false, "green");$('#rte').focus();return false;});
    $('#bb').click(function(){document.execCommand('backcolor', false," blue");$('#rte').focus();return false;});
    $('#bbl').click(function(){document.execCommand('backcolor', false, "black");$('#rte').focus();return false;});
    $('#bbr').click(function(){document.execCommand('backcolor', false, "brown");$('#rte').focus();return false;});
    $('#by').click(function(){document.execCommand('backcolor', false, "yellow");$('#rte').focus();return false;});
    $('#bo').click(function(){document.execCommand('backcolor', false, "orange");$('#rte').focus();return false;});
    $('#bp').click(function(){document.execCommand('backcolor', false, "purple");$('#rte').focus();return false;});
    $('#bw').click(function(){document.execCommand('backcolor', false, "white");$('#rte').focus();return false;});
    $('#blg').click(function(){document.execCommand('backcolor', false, "lightgreen");$('#rte').focus();return false;});
    $('#blb').click(function(){document.execCommand('backcolor', false, "lightblue");$('#rte').focus();return false;});
    $('#bc').click(function(){document.execCommand('backcolor', false, "cyan");$('#rte').focus();return false;});
    $('#bm').click(function(){document.execCommand('backcolor', false, "magenta");$('#rte').focus();return false;});
    $('#bli').click(function(){document.execCommand('backcolor', false, "lightgray");$('#rte').focus();return false;});
    $('#bgr').click(function(){document.execCommand('backcolor', false, "gray");$('#rte').focus();return false;});
    $('#bor').click(function(){document.execCommand('backcolor', false, "orangered");$('#rte').focus();return false;});
    $('#bpi').click(function(){document.execCommand('backcolor', false, "pink");$('#rte').focus();return false;});
    $('#bsi').click(function(){document.execCommand('backcolor', false, "silver");$('#rte').focus();return false;});
    $('#bin').click(function(){document.execCommand('backcolor', false, "indigo");$('#rte').focus();return false;});
    
//list and numbering 

$('#insertUnorderedList').click(function(){document.execCommand('insertUnorderedList', false, null);$('#rte').focus();return false;});
$('#insertOrderedList').click(function(){document.execCommand('insertOrderedList', false, null);$('#rte').focus();return false;});

//hr,link,unlink
$('#insertHorizontalRule').click(function(){document.execCommand('insertHTML', false, '<hr style="background-color:black;height:1px;"></hr>');$('#rte').focus();return false;});
$('#createLink').click(function(){ document.getElementById('linked').style.display='block';$('#rte').focus();return false;});
$('#unlink').click(function(){document.execCommand('unlink', false, null);$('#rte').focus();return false;});
$('#hll').click(function(){document.execCommand('insertHTML',false, '<a href="'+document.getElementById('hl').value+'">'+document.getElementById('ht').value+'</hr>');

$('#rte').focus();return false;});

    
   
    $('#clearform').click(function(){document.execCommand('removeFormat');$('#rte').focus();return false;});
    $('#clear').click(function(){document.execCommand('delete', false, null);$('#rte').focus();return false;});
    //new
    //open
    //save
    //download,print,mail
  //cut,copy,paste beneth
  $('#cut').click(function(){document.execCommand('cut');$('#rte').focus();return false;});
  $('#copy').click(function(){document.execCommand('copy');$('#rte').focus();return false;});
    $('#undo').click(function(){document.execCommand('undo', false, null);$('#rte').focus();return false;});
    $('#redo').click(function(){document.execCommand('redo', false, null);$('#rte').focus();return false;});
   
 

//align
//indent
$('#justifyLeft').click(function(){document.execCommand('justifyLeft', false, null);$('#rte').focus();return false;});
  $('#justifyCenter').click(function(){document.execCommand('justifyCenter', false, null);$('#rte').focus();return false;});
  $('#justifyRight').click(function(){document.execCommand('justifyRight', false, null);$('#rte').focus();return false;});
  $('#justifyFull').click(function(){document.execCommand('justifyFull', false, null);$('#rte').focus();return false;});
  $('#indent').click(function(){document.execCommand('indent', false, null);$('#rte').focus();return false;});
  $('#outdent').click(function(){document.execCommand('outdent', false, null);$('#rte').focus();return false;});


 



    
   
});
//check and counter/


///////////////////////////////

//save and open

function saveTextAsFile()
{
    var textToSave = document.getElementById("rte").innerHTML;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/html"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 
function loadFileAsText()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("rte").textContent = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
    
}

//print commands



function printElem() {
    var content = document.getElementById('rte').innerHTML;
    var mywindow = window.open('', 'PrintPreview', 'height=600,width=800');

    mywindow.document.write('<html><head><title>PrintPreview</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus()
    mywindow.print();
    mywindow.close();
    return true;
}



//cut copy paste jone
// Create By Utkarsh Chakrwati
//------------------------------------
function copy(){
if (!window.x) {
    x = {};
}
x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}
var mytext = x.Selector.getSelected();
document.getElementById("book").innerHTML =mytext;
}

function cut(){
        if (!window.x) {
         x = {};
                        }
x.Selector = {};
x.Selector.getSelected = function() {
    var t = '';
    if (window.getSelection) {
        t = window.getSelection();
    } else if (document.getSelection) {
        t = document.getSelection();
    } else if (document.selection) {
        t = document.selection.createRange().text;
    }
    return t;
}
var mytext = x.Selector.getSelected();
document.getElementById("book").innerHTML =mytext;
x.Selector.setSelected()="";

}

function paste()
{
var firstDivContent = document.getElementById('book');
document.getElementById('rte').focus();
pasteHtmlAtCaret( firstDivContent.innerHTML); 

}
//--paste at therir place..

function pasteHtmlAtCaret(html) {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // non-standard and not supported in all browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
    }
}
//------------------------------------
//------------------------------------
//------------------------------------

////find and replace javascript
function main(id)
        {
            return document.getElementById(id);
        }
        function find()
        {
            var a=main("txtf").value;
            var b=main("rte").textContent;
            var c="";
            for(var i=0;i<b.length;i++)
            {
                var d=b.substr(i,a.length)
                if (d.indexOf(a) > -1)          
                    c=c+" " + (d.indexOf(a)+i);
            }
           
            if (c!="")
            {
                alert(c);

                
            }
            else
            {
                alert("Not find");
            }
        }
        function replaceall()
        {
            var a=main("txtf").value;
            var b=main("rte").innerHTML;
            var c="";
            for(var i=0;i<b.length;i++)
            {
                var d=b.substr(i,a.length)
                if (d.indexOf(a) > -1)      
                {
                    c=c + main("txtr").value;
                    i=i+a.length-1;
                }
                else
                    c=c + b.charAt(i);
            }
            main("rte").innerHTML=c;
        }
        function replace() {
            var str = document.getElementById('rte').innerHTML; 
            var a=document.getElementById("txtf").value;
            var b=document.getElementById("txtr").value;
            var res = str.replace(a,b);
           document.getElementById("rte").innerHTML= res;
        }

       
//fullscrean function.
//--------------------------------------------------------------
function toggleFullscreen(elem) {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  
   //show source code..------------------------------------
   ///
var code = false;

            
function source () {
    if(code){
       document.getElementById('rte').innerHTML =document.getElementById('rte').textContent;
       document.getElementById('rte').style.backgroundColor = '#FFFFFF';
       document.getElementById('rte').style.color = 'black';
        code = false;
        document.getElementById('rte').replace(/</g, '&lt;');
    }else{
        document.getElementById('rte').textContent = document.getElementById('rte').innerHTML;
        document.getElementById('rte').style.color = 'orangered';  
        document.getElementById('rte').style.fontname = 'tahoma' ; 
        document.getElementById('rte').innerText = tidyHtml(document.getElementById('rte').textContent) ;
      
       

        
        code = true;
        document.getElementById('rte').replace('&lt;',/</g);
        
    }
    rte.focus();
}
//-----------------read only function
var codemode = true;
function readmode () {
    
    if(codemode){
        document.getElementById('rte').contentEditable = false;
        codemode = false;
    }else{
        document.getElementById('rte').contentEditable = true;
        codemode = true;
       
    }
    rte.focus();
}
    

      //log function
function date(){
    
    var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;


rte.focus();
   document.execCommand('insertHTML', false, '<br>'+today+'</br>');

}




//////////////////////////////////////////////////////////
//table function
//-----------------------------------

function table(){    
    document.getElementById('tab').style.display='block';
}
    function proceed(){
    var a=document.getElementById("tro").value;
    var b=document.getElementById("tco").value;
    document.getElementById('tcode').textContent="&lt;table border='1' cellspacing=0 cellpadding=10 style='width:100%;'>";
        
    for(var i=a;i>0;i--)
     {
         document.getElementById('tcode').textContent+="&lt;tr>";

             for(var j=b;j>0;j--)
                      {
                           document.getElementById('tcode').textContent +="&lt;td>&lt;/td>";
                      } 
         document.getElementById('tcode').textContent +="&lt;/tr>";
     } 
 document.getElementById('tcode').textContent+="&lt;/table>";
 document.getElementById('tcode').innerHTML= document.getElementById('tcode').textContent;
 document.getElementById('rte').focus();
 pasteHtmlAtCaret(document.getElementById('tcode').textContent);


 }
    


//////////calculator handler
var mem = '0';
var res ='0';
function fact()
{
res = Math.pow(Res, display.value);
      display.value =  res;
 }
function calc() {
 display.value= eval(display.value);
  return true
}
function perc() {
  display.value= eval(display.value)/100;
  return true
}
function deleteChar() {
  display.value = display.value.substring(0, display.value.length - 1)
}
function Clear() {
  currentoperation=""; }


/////////////////////////////////////////////////////////////////////////////////
//emojis cases

em=0;
function emos()
{
   switch(em)
   {
    case 0: var et= "😁"; break;    case 1: var et= "😂"; break;
    case 2: var et= "😃"; break;    case 3: var et= "😄"; break;    case 4: var et= "😅"; break;
    case 5: var et= "😆"; break;    case 6: var et= "😉"; break;    case 7: var et= "😊"; break;
    case 8: var et= "😋"; break;    case 9: var et= "😎"; break;    case 10: var et= "😍"; break;

    case 11: var et= "😘"; break;   case 12: var et= "😗"; break;    case 13: var et= "😙"; break;   
    case 14: var et= "😚"; break;   case 15: var et= "😐"; break;    case 16: var et= "😑"; break;   
    case 17: var et= "😶"; break;    case 18: var et= "😏"; break;    case 19: var et= "😣"; break;  
    case 20: var et= "😥"; break;    case 21: var et= "😮"; break;    case 22: var et= "😯"; break;
    case 23: var et= "😪"; break;    case 24: var et= "😫"; break;    case 25: var et= "😴"; break;   

    case 26: var et= "😌"; break;
    case 27: var et= "😛"; break;
    case 28: var et= "😜"; break;
    case 29: var et= "😝"; break;
    case 30: var et= "😒"; break;
    case 31: var et= "😓"; break;
    case 32: var et= "😔"; break;
    case 33: var et= "😕"; break;
    case 34: var et= "😲"; break;
    case 35: var et= "😖"; break;
    case 36: var et= "😞"; break;
    case 37: var et= "😟"; break;
    case 38: var et= "😤"; break;
    case 39: var et= "😢"; break;
    case 40: var et= "😭"; break;
    case 41: var et= "😦"; break;
    case 42: var et= "😧"; break;
    case 43: var et= "😨"; break;
    case 44: var et= "😩"; break;
    case 45: var et= "😬"; break;
    case 46: var et= "😰"; break;
    case 47: var et= "😱"; break;
    case 48: var et= "😳"; break;
    case 49: var et= "😵"; break;
    case 50: var et= "😡"; break;
    case 51: var et= "😠"; break;
    case 52: var et= "😷"; break;
    case 53: var et= "😇"; break;
   
   

   }
   ////////////////////////////////////////////////////////////////////////////////
//////////////////////best for insertion on page///////////////////////////////////

   rte.focus();
   document.execCommand('insertHTML', false, et);


}



/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//html 5 text to speech
//
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////


// events

function loadVoices()
{
	var synthesizer = window.speechSynthesis;
	synthesizer.onvoiceschanged = loadVoices_VoicesLoaded;
	synthesizer.getVoices();
}

function loadVoices_VoicesLoaded()
{
	var synthesizer = window.speechSynthesis;
	var systemVoices = synthesizer.getVoices();
	systemVoices.addLookups("name");		
	Voice.systemVoiceLookup = systemVoices;

	var selectTimbre = document.getElementById("selectTimbre");
	for (var i = 0; i < systemVoices.length; i++)
	{
		var systemVoice = systemVoices[i];
		var optionTimbre = document.createElement("option");
		optionTimbre.text = systemVoice.name;
		optionTimbre.systemVoice = systemVoice;
		selectTimbre.appendChild(optionTimbre);
	}
}

function buttonSay_Clicked()
{
    
	var inputThingsToSay = document.getElementById
	(
		"inputThingsToSay"
	);
	var selectTimbre = document.getElementById("selectTimbre");
	var inputPitch = document.getElementById("inputPitch");
	var inputSpeed = document.getElementById("inputSpeed");

	var timbreName = selectTimbre.selectedOptions[0].text;
	var pitch = parseFloat(inputPitch.value);
	var speed = parseFloat(inputSpeed.value);
	var thingsToSay = inputThingsToSay.value;

	var voice = new Voice
	(
		"Default", 
		timbreName, 
		pitch, 
		speed
	);	
    voice.say(thingsToSay);	
   
}

// classes

function ArrayHelper()
{
	// extension class
}
{
	Array.prototype.addLookups = function(keyName)
	{
		for (var i = 0; i < this.length; i++)
		{
			var item = this[i];
			var keyValue = item[keyName];
			this[keyValue] = item;
		}
	}
}

function Voice(name, timbreName, pitch, speed)
{
	this.name = name;
	this.timbreName = timbreName;
	this.pitch = (pitch == null ? 1 : pitch);
	this.speed = (speed == null ? 1 : speed);

	this.systemUtterance = new SpeechSynthesisUtterance();
	this.systemUtterance.onend = this.say_Ended.bind(this);
}
{
	// instance methods

	Voice.prototype.say = function(thingToSay, callback, contextForCallback)
	{
		this.callback = callback;
		this.contextForCallback = contextForCallback;

		this.isSpeaking = true;

		var voices = Voice.systemVoiceLookup;
		
		var utterance = this.systemUtterance;
		utterance.voice = voices[this.timbreName];
		utterance.text = thingToSay;
		utterance.pitch = this.pitch;
		utterance.rate = this.speed;

        window.speechSynthesis.speak(utterance);
       
	}

	Voice.prototype.say_Ended = function()
	{
		this.isSpeaking = false;
		if (this.callback != null)
		{
			this.callback.call(this.contextForCallback);
		}
	}
}



////////handling function
function mtts()
{
   
    if (window.getSelection() != "")
        {  
          document.getElementById('inputThingsToSay').textContent=window.getSelection();

       }
       else 
      document.getElementById('inputThingsToSay').textContent=rte.textContent;
      buttonSay_Clicked();
  
}

/////////////////////////////////////////////////////////////////////////////////
//browser unit


function changeLink() {
    var link = document.getElementById("my1");
    var link2 = document.getElementById("my2");
       q=btxt.value;
    if(q== "")
    link.setAttribute('href',  "http://www.dictionary.com");
    else
    link.setAttribute('href',  "http://www.dictionary.com/browse/"+q);
    link2.setAttribute('href',  "http:///en.m.wiktionary.org/wiki/"+q);
    link.click();
    link2.click();
    }

    function browse()
    {
                 var txtArea = document.getElementById("rte");
                 var selectedText;   
                 if (window.getSelection() != "")
                     {  
                       selectedText =window.getSelection();
                       btxt.value = selectedText;
                    }
                 else
                btxt.value = "";
      }

/////////////////////////////////////////////////////////////////////////////////
/*file handle
function handleFileSelect(evt) {
    var files = evt.target.files; // Filerte object

    // Loop through the Filerte and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var render = new FileReader();

      // Closure to capture the file information.
      render.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
        
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb"width="200px"height="200px" src="', e.target.result,
                            '" title="', escape(theFile.name),'"/>'].join('');
          document.getElementById('rte').insertBefore(span, null);
        };
      })(f);

      // Read in the image file as a data URL.
      render.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);*/

/////////////////////////////////////////////////////////////////////////////////


function apply(){
if(document.getElementById('bgcoltxt').value !="" )
document.getElementById('rte').style.backgroundColor=document.getElementById('bgcoltxt').value;
document.getElementById('ws').style.backgroundColor=document.getElementById('bgcoltxt').value;

}


/////////////////////////////////////////////////////////////////////////////////
//context menu
var onClick = function(e) {
    
    var cc = function() {document.getElementById('cut').click(); }
    var ccp = function() {document.getElementById('copy').click();}
    var ccv = function() {document.getElementById('paste').click();}
    var csa = function() { document.getElementById('select').click();}
    var cfr = function() {document.getElementById('find').click(); }
    var ccl = function() {document.getElementById('clearform').click(); }
    var spea = function() {mtts(); }
    var about = function(){document.getElementById('about').style.display = 'block';}
    var clicked = function() { browse();
                                document.getElementById('bro').style.display = 'block';
                                changeLink();
                                }
    
     var items = [
        { title: 'Cut', fn: cc },
        { title: 'Copy', fn: ccp },
        { title: 'Paste', fn: ccv },
        { title: 'Select All', fn: csa},
        { },
        { title: 'Find & Replace', fn: cfr },
        { title: 'Clean', fn: ccl },
        { },
        { title: 'Speak', fn: spea },
        { title: 'Search on web', fn: clicked },
        { title: 'About', fn: about }
       
    ]

    basicContext.show(items, e)

}

document.addEventListener('DOMContentLoaded', function() {


    addEventListener('contextmenu', onClick);


})

/////
loadVoices();

var tem=0;

    function change()

    {
       if(tem==0)
       { 
        var div = document.getElementById('h');
        div.style.right = '-500px';
        div.style.bottom = '25px';
        div.style.transition = "ease 1s";
       tem=1;
       }
       else
       { 
        var div = document.getElementById('h');
        div.style.right = '65px';
        div.style.bottom = '25px';
        tem=0;
       }
       
       
    }
    change();

/////
var camf=0;
function prime(){
if(camf == 0)
  {  Webcam.set({
     width: 320,
     height: 240,
     image_format: 'jpeg',
     jpeg_quality: 90
    });
    Webcam.attach( '#my_camera' );
   camf=1;
}}

  // <!-- Code to handle taking the snapshot and displaying it locally -->
   function take_snapshot() {
    
    // take snapshot and get image data
    Webcam.snap( function(data_uri) {
     // display rte in page
     document.getElementById('rte').innerHTML += 
     '<img src="'+data_uri+'"/>';
     } );
     
    
   }

 