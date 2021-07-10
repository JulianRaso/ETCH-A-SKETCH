const body = document.querySelector('#game');
const content = document.querySelector('#container');
const grid = document.getElementsByClassName('container');
const input = document.getElementById('number');
const set = document.getElementById('button');
const hover = documet.ge

function gridBuild(){
    var max = input.value;

    if(max != ""){

        content.style.width = "fit-content";
        content.style.height = "";

        content.innerHTML = "";

        // Grid Build

        for(var i = 1; i <= max; i++){
            for(var j = 1; j<= max; j++){
                const div = document.createElement('div');

                div.style.border = 'solid 2px'
                div.style.height = '20px'
                div.style.width = '20px'

                content.appendChild(div);
            }
        }

    }

}


//Control of Input value

input.addEventListener("change", number => {
    if(input.value > 100){
        input.value = 100;
    }
    else if(input.value < 16){
        input.value = 16;
    }
})

//Hover

