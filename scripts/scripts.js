
let memoria = ""

function historico(hist){ // numeros e caracteres digitados
  document.querySelector('div').textContent = hist
}

function mostrar(hist){ // numeros e caracteres digitados
  let total = 0
  let num = ""
  for(let n of hist){
    if(!isNaN(n)){
      num += n
    }
    else if (n === '+'){
      total += Number(num)
    }
  }


  document.querySelector("h3").textContent = total
  total=0
  num = ""
}


const addNumeros  = ()=>{ // add numeros

  document.getElementById("um").addEventListener("click", ()=>{
    historico(memoria += "1")
  })
  document.getElementById("dois").addEventListener("click", ()=>{
    historico(memoria += "2")
  })
  document.getElementById("tres").addEventListener("click", ()=>{
    historico(memoria += "3")
  })
  document.getElementById("quatro").addEventListener("click", ()=>{
    historico(memoria += "4")
  })

  document.getElementById("soma").addEventListener("click", ()=>{
    historico(memoria += "+")
  })

  document.getElementById("igual").addEventListener("click", ()=>{
    mostrar(memoria)
  })

}




addNumeros()
