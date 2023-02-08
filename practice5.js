function rotate(){
    let id=null;
    setInterval(id);
    setInterval(()=>{
        let text=document.getElementById("rotate").innerHTML;
        document.getElementById("rotate").innerHTML=text[text.length-1]+text.substring(0,text.length-1);
    },100);
    
    
}