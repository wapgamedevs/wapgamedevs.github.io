function getAge(birthDate) {
  var birth = new Date(birthDate);
  var today = new Date();
  var age = today.getFullYear() - birth.getFullYear();
  if (today.getMonth() < birth.getMonth() || (today.getMonth() == birth.getMonth() && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

var ethanAge = getAge("09/29/2003");
var ethanAgeLocation = document.getElementById("ethanAge");

ethanAgeLocation.innerHTML = ethanAge;

var jakeAge = getAge("08/21/2004");
var introParagraph = document.getElementById("jakeAge");

introParagraph.innerHTML = jakeAge;