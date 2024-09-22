const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');


buttonText.addEventListener('click', () => {
    const value = inputText.value;
    
    if (value) {
       '
        localStorage.setItem('storedText', value);
        alert('Texto guardado en localStorage!');
    
        inputText.value = '';
    } else {
        alert('Por favor ingresa algún texto.');
    }
});
