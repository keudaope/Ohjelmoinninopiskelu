function loadForm(){
    var loginForm = document.querySelector('form'); //Selecting the form
    loginForm.addEventListener('submit', login);    //looking for submit
}

function login(e){
    e.preventDefault(); //to stop form action i.e. submit
}

function js_style()
{
  var teksti = document.getElementById('text');
  teksti.style.fontFamily = 'Permanent Marker';
  teksti.style.fontSize = '48px';
  teksti.style.color = 'red';
}
function getFormvalue()
{
  var etunimi = document.getElementsByName('fname')[0].value;
  var sukunimi = document.getElementsByName('lname')[0].value;
  document.getElementById('vastaus1').innerHTML = "Etunimi oli " + etunimi + " ja sukunimi oli " + sukunimi;
}

function taustat()
{
  vari = variArvonta();
  document.getElementById('yksi').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('kaksi').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('kolme').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('nelja').style.backgroundColor = vari;
  vari = variArvonta();
  document.getElementById('viisi').style.backgroundColor = vari;

}
function variArvonta()
{
  var varitaulu = [];
  var variarvo;
  for(x = 0; x < 6; x++)
  {
    variarvo = Math.floor(Math.random()*16);
    switch(variarvo)
    {
      case 10:
        variarvo = 'A';
        break;
      case 11:
        variarvo = 'B';
        break;
      case 12:
        variarvo = 'C';
        break;
      case 13:
        variarvo = 'D';
        break;
      case 14:
        variarvo = 'E';
        break;
      case 15:
        variarvo = 'F';
        break;
    }
    varitaulu[x] = variarvo;
    temp = "#" + varitaulu.join("").toString();
  }
  return temp;
}
function getAttributes()
{
  //Ohje löytyy esim. https://www.w3schools.com/jsref/met_element_getattribute.asp
  var perus, attHref, attHrefLang, attRel, attTarget, attType;
  // Kaikkiin tulisi tämä sama alku, joten lyhensin sen perus-muuttujaan
  perus = document.getElementById('w3r');
  // Kts. yllä olevasta linkistä vinkki, miten tämä toimii
  attHref = perus.getAttribute("href");
  attHrefLang = perus.getAttribute("hreflang");
  attRel = perus.getAttribute("rel");
  attTarget = perus.getAttribute("target");
  attType = perus.getAttribute("type");
  // Koska lauseesta olisi tullut Über pitkä, pilkoin sen pienempiin palasiin
  // ja liitin ne toisiinsa + -merkin avulla
  perus = "Ylläolevan linkin <ul><li>href on: " + attHref;
  perus += " ja </li><li>hreflang on: " + attHrefLang;
  perus += " ja </li><li>target on: " + attTarget;
  perus += " ja </li><li>type on: " + attType + "</li></ul>";
  // Lopuksi tulostin lauseen takaisin HTML-sivulle tekemääni kappaleeseen
  document.getElementById('vastaus').innerHTML = perus;
}

function insert_Row()
{
  var taulu = document.getElementById('sampleTable');
  // lisätään alkuun
  var ekarivi = taulu.insertRow(0);
  // lisätään solut
  var solu1 = ekarivi.insertCell(0);
  var solu2 = ekarivi.insertCell(1);
  // lisätään sisältöä
  solu1.innerHTML = "Sälää tai jotakin";
  solu2.innerHTML = "Jotakin sälää";
  // lisätään loppuun
  var loppurivi = taulu.insertRow(-1);
  // lisätään solut
  var solu3 = loppurivi.insertCell(0);
  var solu4 = loppurivi.insertCell(1);
  // lisätään sisältöä
  solu3.innerHTML = "Olipa kerran Onnimanni";
  solu4.innerHTML = "Onnimannista Matikka";
}
function changeContent()
{
  var rivinro = parseInt(window.prompt("Anna rivinumero(0-2): ","0"));
  var sarakenro = parseInt(window.prompt("Anna sarakenumero(0,1): ", "0"));
  var teksti = window.prompt("Syötä vaihdettava teksti: ");
  console.log(rivinro, sarakenro, teksti);
  var sisalto = document.getElementById('myTable').rows[rivinro].cells;
  sisalto[sarakenro].innerHTML = teksti;
}
