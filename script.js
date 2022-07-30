// DOM elements
const generate = document.querySelector(".generate-btn"), 
      resultElOne = document.getElementById("result-one"),
      resultElTwo = document.getElementById("result-two")
      upperCase = document.getElementById("upper"),
      lowerCase = document.getElementById("lower"),
      numbers = document.getElementById("numbers"),
      sympols = document.getElementById("sympols");
      
      //add event listener
      generate.addEventListener('click', function(){
        const hasUpper = upperCase.checked;
        const hasLower = lowerCase.checked;
        const hasNumbers = numbers.checked;
        const hasSympols = sympols.checked;
        resultElOne.innerHTML = generatePassword(hasLower, hasUpper, hasSympols, hasNumbers)
        resultElTwo.innerHTML = generatePassword(hasLower, hasUpper, hasSympols, hasNumbers)
      })
      console.log(generatePassword)
      // generate password function
      function generatePassword(lower,upper,number,sympol){
        let generatedPassword = '';
        const typeCount = lower + upper + number + sympol;
        const typeArr = [ { lower } , { upper }, { sympol }, { number } ].filter(
          item => Object.values(item)[0]
        )
        if (typeCount === 0 ){
          return '';
        }
        for (let i = 0; i<12; i += typeCount){
          typeArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunction[funcName]()
            if (generatedPassword.length !==12){
              return '';
            }
          })
          
        }
        return generatedPassword;
      }
// Functions Object
const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  sympol: getRandomSympol
}

//functions that generate random charachters
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 65)
}
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10) +48)
}
function getRandomSympol(){
  return String.fromCharCode(Math.floor(Math.random()*15) + 33)
}
