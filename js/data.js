
const storedText = localStorage.getItem('storedText');


if (storedText) {
   
    const container = document.getElementById('data'); 
    container.textContent = storedText; 
} else {
    
    const container = document.getElementById('data');
    container.textContent = 'No hay ningún texto guardado en localStorage.';
}
