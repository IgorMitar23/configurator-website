function promeniVrednost() {
  var budzet = document.getElementById("budzet").value;
  prikaziSlikuNaOsnovuBudzeta(budzet);
  var sviParagrafi = document.querySelectorAll(
    "p[id$='-1'], p[id$='-2'], p[id$='-3'], p[id$='-4'], p[id$='-5']"
  );
  sviParagrafi.forEach(function (paragraf) {
    paragraf.style.display = "none";
  });
  switch (budzet) {
    case "1000":
      prikaziParagrafe("-1");
      break;
    case "1500":
      prikaziParagrafe("-2");
      break;
    case "2000":
      prikaziParagrafe("-3");
      break;
    case "2500":
      prikaziParagrafe("-4");
      break;
    case "3000+":
      prikaziParagrafe("-5");
      break;
    default:
      break;
  }
}

// Funkcija za prikazivanje p elemenata sa odgovarajućim završecima ID-a
function prikaziParagrafe(zavrsniDioId) {
  var paragrafi = document.querySelectorAll("p[id$='" + zavrsniDioId + "']");
  paragrafi.forEach(function (paragraf) {
    paragraf.style.display = "block";
  });
}

// Dodavanje event listener-a za promjenu vrijednosti dropdown-a
document.getElementById("budzet").addEventListener("change", promeniVrednost);
function promeniVrednost2() {
  var intelRadio = document.getElementById("intel");
  var amdRadio = document.getElementById("amd");
  var intelCpuParagraph = document.getElementById("intelcpu");
  var amdCpuParagraph = document.getElementById("amdcpu");

  if (intelRadio.checked) {
    intelCpuParagraph.style.display = "block";
    amdCpuParagraph.style.display = "none";
  } else if (amdRadio.checked) {
    intelCpuParagraph.style.display = "none";
    amdCpuParagraph.style.display = "block";
  }
}
function prikaziSlikuNaOsnovuBudzeta(budzet) {
  var slike = document.querySelectorAll("#slike-konfiga img");

  // Hide all images
  slike.forEach(function (slika) {
    slika.style.display = "none";
  });

  // Show the image corresponding to the selected budget
  switch (budzet) {
    case "1000":
      prikaziSliku("slika1");
      break;
    case "1500":
      prikaziSliku("slika2");
      break;
    case "2000":
      prikaziSliku("slika3");
      break;
    case "2500":
      prikaziSliku("slika4");
      break;
    case "3000+":
      prikaziSliku("slika5");
      break;
    default:
      break;
  }
}

// Function to show the image with a specific ID
function prikaziSliku(id) {
  var slika = document.getElementById(id);
  if (slika) {
    slika.style.display = "block";
  }
}
function checkForm() {
  var form = document.getElementById("myForm");
  var inputs = form.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="tel"]'
  );

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      // Trim removes leading and trailing whitespace
      alert("Niste popunili sva polja!");
      return false; // If any input is empty, return false to prevent form submission
    }
  }
  alert("Uspešno ste poslali zahtev! Kontaktiraćemo vas u što kraćem roku!");
  return true; // All inputs are filled, proceed with form submission
}
function checkSelection() {
  // Check if either of the radio buttons is checked
  var intelChecked = document.getElementById("intel").checked;
  var amdChecked = document.getElementById("amd").checked;

  // Check if an option is selected in the select tag
  var selectedOption = document.getElementById("budzet").value;

  // If either of the conditions is true, allow navigation to the next slide
  if ((intelChecked || amdChecked) && selectedOption !== "") {
    return true;
  } else {
    // If neither condition is true, prevent navigation and alert the user
    alert("Molimo Vas izaberite opciju za čipset računara i budžet.");
    return false;
  }
}
