let calculation = localStorage.getItem('calculation') || '';
      
      showCalculationElement();
      
      function showCalculationElement() {
        document.querySelector('.js-show-calculation').innerHTML = calculation;
      }

      function updateCalculation(value) {
        calculation += value;
        showCalculationElement();
        saveCalculation();
      }
      
      function saveCalculation(){
        localStorage.setItem('calculation', calculation);
        showCalculationElement();
      }