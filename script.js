function display(value){
    document.getElementById("textarea").value+=value; //+ is used for overriding the text i.e here it is added the next value.
}
function calculate(){
    var value=document.getElementById("textarea").value;
    var ans=eval(value);
    document.getElementById("textarea").value=ans;
}
function clr(){
    document.getElementById("textarea").value='';
}