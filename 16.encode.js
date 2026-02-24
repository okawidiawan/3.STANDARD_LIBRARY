{
  const url = "http://www.contoh.com/?name=Oka&Ozu Widiawan";
  console.log(url);
  // http://www.contoh.com/?name=Oka&Ozu Widiawan

  const encoded = encodeURI(url);
  console.log(encoded);
  // http://www.contoh.com/?name=Oka&Ozu%20Widiawan

  const decoded = decodeURI(encoded);
  console.log(decoded);
  // http://www.contoh.com/?name=Oka&Ozu Widiawan
}

{
  const url = "http://www.contoh.com/?name=";
  const value = "Oka&Ozu=Widiawan";
  console.log(url + value);
  //   http://www.contoh.com/?name=Oka&Ozu=Widiawan

  const encoded = encodeURIComponent(value);
  console.log(url + encoded);
  //   http://www.contoh.com/?name=Oka%26Ozu%3DWidiawan

  const decoded = decodeURIComponent(encoded);
  console.log(url + decoded);
  //   http://www.contoh.com/?name=Oka&Ozu=Widiawan
}
