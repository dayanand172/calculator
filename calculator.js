
function appendToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
  }
  
  
  function clearDisplay() {
    const display = document.getElementById('result');
    display.value = '';
  }
  
  
  function calculateResult() {
    const display = document.getElementById('result');
    const expression = display.value;
  
    try {
      const result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
  