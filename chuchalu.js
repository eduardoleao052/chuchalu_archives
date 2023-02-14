function opensidebar() {
    document.getElementById("darkmode").style.opacity= "0.5";
    document.getElementById("darkmode").style.zIndex= "80";
    document.getElementById("menu").style.opacity= "1";
    document.getElementById("menu").style.zIndex= "90";
    document.getElementById("menu").style.left= "0";
   
}

function closesidebar() {
  document.getElementById("darkmode").style.opacity= "0";
  document.getElementById("darkmode").style.zIndex= "-100";
  document.getElementById("menu").style.opacity= "0";
  document.getElementById("menu").style.zIndex= "-100";
  document.getElementById("menu").style.left= "-40px";
}
function resizetextbox(){
  if(document.getElementById("textbox").style.width=="90%"){
    document.getElementById("textbox").style.width= "76%";
    document.getElementById("textbox").style.top= "150px";
    document.getElementById("resizetextbox").src= "/misc/resizeclose.svg";}
  else{document.getElementById("textbox").style.width= "90%";
  document.getElementById("textbox").style.top= "70px";
  document.getElementById("resizetextbox").src= "/misc/resizeopen.svg";}
  
}

function slidejogos(){
    if(document.getElementById("jogos").style.opacity=="1"){
    document.getElementById("jogos").style.opacity= "0";
    document.getElementById("jogos").style.zIndex= "-5";
    document.getElementById("expsidebarjogos").style.marginBottom= "0px";
    document.getElementById("arrowj").style.transform = "rotate(0deg)";}
    else{
      document.getElementById("expsidebarjogos").style.marginBottom= "106px";
      document.getElementById("jogos").style.opacity= "1";
      document.getElementById("jogos").style.zIndex= "91";
      document.getElementById("arrowj").style.transform = "rotate(90deg)";}}

function slidecampanhas(){
    if(document.getElementById("campanhas").style.opacity=="1"){
      document.getElementById("campanhas").style.opacity= "0";
      document.getElementById("campanhas").style.zIndex= "-5";
      document.getElementById("expsidebarcampanhas").style.marginBottom= "0px";
      document.getElementById("arrowc").style.transform = "rotate(0deg)";}
    else{
        document.getElementById("expsidebarcampanhas").style.marginBottom= "162px";
        document.getElementById("campanhas").style.opacity= "1";
        document.getElementById("campanhas").style.zIndex= "91";
        document.getElementById("arrowc").style.transform = "rotate(90deg)";}}

function slidepersonagens(){
  if(document.getElementById("pcampanhas").style.opacity=="1"){
    document.getElementById("pcampanhas").style.opacity= "0";
    document.getElementById("pcampanhas").style.zIndex= "-5";
    document.getElementById("expsidebarpersonagens").style.marginBottom= "0px";
    document.getElementById("arrowp").style.transform = "rotate(0deg)";}
  else{
      document.getElementById("expsidebarpersonagens").style.marginBottom= "162px";
      document.getElementById("pcampanhas").style.opacity= "1";
      document.getElementById("pcampanhas").style.zIndex= "91";
      document.getElementById("arrowp").style.transform = "rotate(90deg)"}
}

function slidearquivos(){
  if(document.getElementById("acampanhas").style.opacity=="1"){
    document.getElementById("acampanhas").style.opacity= "0";
    document.getElementById("acampanhas").style.zIndex= "-5";
    document.getElementById("expsidebararquivos").style.marginBottom= "0px";
    document.getElementById("arrowa").style.transform = "rotate(0deg)";}
  else{
      document.getElementById("expsidebararquivos").style.marginBottom= "162px";
      document.getElementById("acampanhas").style.opacity= "1";
      document.getElementById("acampanhas").style.zIndex= "91";
      document.getElementById("arrowa").style.transform = "rotate(90deg)";}
}

function search(){
  let x = document.getElementById("sinput").value;
  console.log(x);
  if(x==("jogos")){
    setTimeout(function(){window.open("/index/jogos.html", "_self");}, 150)
  }
  else if(searchtest(x,["mon", "masks", "masks of nyarlathotep", "nyarlathotep"])==true){
    setTimeout(function(){window.open("/index/campanhas/mon.html", "_self");}, 150)
  }
  else if(searchtest(x,["campanhas", "historias", "aventuras", "sessoes", "capitulos"])==true){
    setTimeout(function(){window.open("/index/campanhas.html", "_self");}, 150)
  }
  else if(searchtest(x,["coc", "call of cthulhu", "lovecraft", "terror", "horror"])==true){
    setTimeout(function(){window.open("/index/jogos/coc.html", "_self");}, 150)
  }
  else if(searchtest(x,["jogos", "sistemas", "rpg"])==true){
    setTimeout(function(){window.open("/index/jogos.html", "_self");}, 150)
  }
  

}
document.onkeydown=function(){
  if(window.event.keyCode=='13'){
      search(document.getElementById("sinput"));
  }
}
function area(x){
  if (x == "b"){
    return "bvfghnB WSZ"
  }
  else if (x == "a"){
    return "aqwszASZ"
  }
  else if (x == "c"){
    return "xcvCX"
  }
  else if (x == "d"){
    return "dfesD"
  }
  else if (x == "e"){
    return "dswr3E"
  }
  else if (x == "f"){
    return "fFdrgc"
  }
  else if (x == "g"){
    return "gGfthvb"
  }
  else if (x == "h"){
    return "hHjygb"
  }
  else if (x == "i"){
    return "iIokju89"
  }
  else if (x == 'j'){
    return "jJkiuhnm";
  }
  else if (x == "k"){
    return "kKm,lij"
  }
  else if (x == "l"){
    return "lL;.,kop"
  }
  else if (x == "m"){
    return "mMn jk,"
  }
  else if (x == "n"){
    return "nNbhjm"
  }
  else if (x == "o"){
    return "oOiklp"
  }
  else if (x == "p"){
    return "pPlo;[{"
  }
  else if (x == "q"){
    return "qQaw12"
  }
  else if (x == "r"){
    return "rRedft45"
  }
  else if (x == "s"){
    return "sSwazd"
  }
  else if (x == "t"){
    return "tTgfry65"
  }
  else if (x == "u"){
    return "uUyhji78"
  }
  else if (x == "v"){
    return "vVcfgb "
  }
  else if (x == "w"){
    return "wWqsea23"
  }
  else if (x == "x"){
    return "xXzsdc"
  }
  else if (x == "y"){
    return "yYtghu67"
  }
  else if (x == "z"){
    return "zZasx"
  }
  else if (x == " "){
    return " cvbnm,"
  }
}

function smallest(x, y){
  if (x>y){
    return y;
  }
  else if(x<y){
    return x;
  }
  else if(x=y){
    return x;
  }
}
function searchtest(x, y){
  i=0;
  ax= true;
  for (i in y){
    j=0;
    ax =true;
    console.log(y[i]);
    while ((j<(smallest((y[i]).length, x.length))) && (ax==true)){
      ax= false;
      k=0;
      while (k<((area(y[i][j])).length)){
        console.log(area(y[i][j])[k]);
        if ((x[j]==(area(y[i][j])[k]))||(x[j+1]==(area(y[i][j])[k]))||(x[j-1]==(y[i][j]))||(x[j]==(y[i][j+1]))){
        ax = true;
        }
        k = k + 1;
      }
      j = j + 1;
    }

    if (ax==true){
      console.log("YES");
      return true;
    }

  }
}

let page = document.getElementById("content").style.width;
console.log(page);

window.addEventListener('resize',shortnameharry)

function shortnameharry(){
  let mediaQuery = window.matchMedia('(max-width: 900px)');
  let mediaQuery2 = window.matchMedia('(max-width: 660px)');
  let a = document.getElementById("harry");
  if(mediaQuery.matches){
    if(mediaQuery2.matches){
      a.innerText = "Harry W. A."
    }
    else{
      a.innerText = "Harry W. Archibald"
    }
  }
  else {
    a.innerText = "Harry Wilhelm Archibald"
  }
}
