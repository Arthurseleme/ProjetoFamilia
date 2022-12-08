var familiaNome =[
    "Família","Pai e Mãe","Eu","Irmãos",
];

var familiaFotos =[
"https://i.postimg.cc/RVDJ901d/Familia.jpg",
"https://i.postimg.cc/bYKWDxR2/meu-Pai-EMinha-M-e.jpg",
"https://i.postimg.cc/SKTtyCsR/eu.jpg",
"https://i.postimg.cc/wjxV7Mnm/irmaons.jpg",
];
  
   
var i=0;
function proximo(){
  
    //Se passar do número totalda família, reinicia as imagens e nome dos membros.
    var numeroFamilia=4;
    if(i>=numeroFamilia){
        i=0;
    }

document.getElementById("membrosFamiliaImagem").src=familiaFotos[i];
document.getElementById("membrosFamiliaNome").innerHTML= familiaNome[i];
document.getElementById("audio").play();
i++;

}
function stop(){
    document.getElementById("audio").pause();
}