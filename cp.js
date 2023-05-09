
















submit.addEventListener("click", function () {
    recupererForm()
    recupererImg()
    recupererColor()
    recupererMessage()
    recupererPolice()

  })

  function recupererForm() {

    var valeurtitre = document.querySelector('#titre').value
    document.querySelector('#valueInput').innerHTML =valeurtitre
    console.log(valeurtitre)
  }


  function recupererMessage() {

    var valeurmessage = document.querySelector('#message').value
    document.querySelector('#valueInputmessage').innerHTML =valeurmessage
    console.log(valeurmessage)
  }



  

  function recupererImg() {

    

    var valeurimg = document.querySelector('input[name=paysage]:checked').value
    var monimg = `<img src="${valeurimg}.jpeg">`
    document.querySelector('#imagepaysage').innerHTML =monimg

    console.log(monimg)


  }


  function recupererColor() {

    

    var valeurcolor = document.querySelector('[type=color]').value

    document.querySelector('.carte').style.color = valeurcolor;
    console.log(valeurcolor)


  }



  function recupererPolice() {

    

    var valeurpolice = document.querySelector('input[name=police]:checked').value

    document.querySelector('#valueInputmessage').style.fontFamily  = valeurpolice;

    console.log(valeurpolice)


  }


