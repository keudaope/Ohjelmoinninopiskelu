

function syota()
{
  const syottoAvain = document.getElementById('syottoAvain');
  const syottoArvo = document.getElementById('syottoArvo');
  const syottoBtn = document.getElementById('syottoBtn');
  const pvSyotto = document.getElementById('pvSyotto');
  const avain = syottoAvain.value;
  const arvo = syottoArvo.value;
  console.log(avain + " " + arvo);
  if(avain && arvo)
  {
    localStorage.setItem(avain, arvo);
    listaa();
    //location.reload();
  }
}
function listaa()
{
  for(let i = 0; i < localStorage.length; i++)
  {
    const avain = localStorage.key(i);
    const arvo = localStorage.getItem(avain);
    pvSyotto.innerHTML += "<b>"+avain + "</b>: " + arvo + "<br/>";
    document.getElementById('syottoArvo').value = "";
    document.getElementById('syottoAvain').value = "";
     setTimeout(function(){ pvSyotto.innerHTML = ""; }, 10000);

  }
}
