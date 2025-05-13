# Project second

### BMI calculator

```javascript
const form = document.querySelector("form")

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height==="" || height<0 || isNaN(height)){
    results.innerHTML = `Give a valid height ${height}`
  }else if(weight==="" || weight<0 || isNaN(weight)){
    results.innerHTML = `give a valid weight ${weight}`
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
    if(bmi<18.6){
      ans.innerHTML = `Under Weight`
    }
    else if(bmi>18.6 && bmi<24.9){
      ans.innerHTML = `Normal Weight`
    }
    else{
      ans.innerHTML =  `Over Weight`
    }
  }
 
})
```