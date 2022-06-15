console.log('js');

const input = document.getElementById('input');

const buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
    button.addEventListener('click', (e) => {

        switch (e.target.innerText) {
            case 'AC':
                input.innerText = '';
                break;
            case 'x':
                if (input.innerText) {
                    input.innerText = input.innerText.slice(0, -1);
                }

                break;
            case '=':
                try {
                    input.innerText = eval(input.innerText);
                }
                catch {
                    input.innerText = 'ERROR!';
                }
                break;
            default:
                input.innerText += e.target.innerText;
        }
        if (input.innerText.length > 34) {
            input.innerText = 'Error! ';
        }
    })
})
console.log('hi');















