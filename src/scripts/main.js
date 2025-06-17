document.addEventListener("DOMContentLoaded",()=>{

    const dataFimPromo = new Date('june 26, 2025 17:30:15');
    const timeStampFmPr = dataFimPromo.getTime();
    
    const diasDoEvento = setInterval(function(){
        const dataInicioPromo = new Date();
        const timeStampIniPro = dataInicioPromo.getTime();
        const diasRestantes = timeStampFmPr - timeStampIniPro;
    
        const dia =  1000 * 60 * 60 * 24;
        const hora = 1000 * 60 * 60;
        const minuto = 1000 * 60 ;
        const segundo = 1000 ;
    
        const dias = Math.floor(diasRestantes / dia);
        const horas = Math.floor(diasRestantes % (dia)/(hora));
        const minutos = Math.floor(diasRestantes % (hora)/(minuto));
        const segundos = Math.floor(diasRestantes % (minuto)/(segundo));
    
        document.querySelector(".promo").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        
        if(dias < 0){
            clearInterval(diasRestantes);
            document.querySelector(".promo").innerHTML ="Alegria de pobre dura pouco";
        }
    },1000)

    const alturaHero = document.querySelector(".hero").clientHeight;

    window.addEventListener("scroll",()=>{
      const localJanela= window.scrollY;

      if(localJanela < alturaHero){
        document.querySelector(".header").classList.remove("header--is-active");
      }
      else{
        document.querySelector(".header").classList.add("header--is-active");
      }
    })
})

