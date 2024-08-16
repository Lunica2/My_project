const text = 'You So Cute! <3'

let index = 0;

function wirteText(){
    document.body.innerText = text.slice
    (0,index);
    
    index++;

    if(index > text.length){
        index = 0;
    }
}

setInterval(wirteText, 200);