# First project

### Background color change project on the basis of given color

click me{
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html
}
```javascript
const button = document.querySelectorAll('.button')
const body = document.querySelector("body")
button.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)

    if(e.target.id==='grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id==='white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor = e.target.id
    }

  })
})
```