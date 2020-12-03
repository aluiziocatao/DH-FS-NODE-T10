function dominio(url)
{
  if(url)
    return "http://" + url;
  else
    console.log(url+" não informada");
}

console.log(dominio("br.digitalhouse.com"));
console.log(dominio("9gag.com"));

