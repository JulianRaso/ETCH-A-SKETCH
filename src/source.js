const content = document.querySelector('#container');




for(var i = 1; i <= 16; i++){

    for(var j = 1; j<= 16; j++){
        const div = document.createElement('div');

        //  div.textContent = j.toString();
        div.style.border = 'solid 2px'
        div.style.margin = '1px' 
        div.style.height = '20px'
        div.style.width = '20px'

        content.appendChild(div);
    }
}
