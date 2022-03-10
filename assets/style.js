// Common Function
function advance_button_function() {
  var div = document.getElementById("advance_settings");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

function sizemapping_button_function() {
  var div = document.getElementById("size_mapping");
  if (div.style.display !== "none") {
    div.style.display = "none";
    sessionStorage.setItem("sizeMapping", 0);
  } else {
    div.style.display = "block";
    sessionStorage.setItem("sizeMapping", 1);
  }
}

function refresh_button_function() {
  var div = document.getElementById("refresh_settings");
  if (div.style.display !== "none") {
    div.style.display = "none";
  } else {
    div.style.display = "block";
  }
}

function enableSRA() {
  if (sessionStorage.getItem("SRA") == 1) {
    console.log("SRA Removed");
    sessionStorage.setItem("SRA", 0);
  } else {
    console.log("SRA Enabled");
    sessionStorage.setItem("SRA", 1);
  }
}

function dIVcollapse() {
  if (sessionStorage.getItem("DC") == 1) {
    console.log("DC Removed");
    sessionStorage.setItem("DC", 0);
  } else {
    console.log("DC Enabled");
    sessionStorage.setItem("DC", 1);
  }
}

function Loaddisabled() {
  if (sessionStorage.getItem("DI") == 1) {
    console.log("DI Removed");
    sessionStorage.setItem("DI", 0);
  } else {
    console.log("DI Enabled");
    sessionStorage.setItem("DI", 1);
  }
}

function adsCenter() {
  if (sessionStorage.getItem("CA") == 1) {
    console.log("CA Removed");
    sessionStorage.setItem("CA", 0);
  } else {
    console.log("CA Enabled");
    sessionStorage.setItem("CA", 1);
  }
}

function setMvalue() {
  var map1 = document.getElementById("mapping1").value;
  sessionStorage.setItem("Mapping1", map1);
}

// EVENT LISTENERS

const selectElement = document.querySelector("#tagtype");
const SiZemApping = document.querySelector("#sIzeMapping");

selectElement.addEventListener("change", (event) => {
  if (event.target.value == "gpt") {
    document.getElementById("gpt_config").style.display = "block";

    selectElement.disabled = true;
  } else if (event.target.value == "amp") {
    document.getElementById("amp_config").style.display = "block";
    selectElement.disabled = true;
  } else if (event.target.value == "passback") {
    document.getElementById("passback_config").style.display = "block";
    selectElement.disabled = true;
  } else if (event.target.value == "video") {
    document.getElementById("video_config").style.display = "block";
    selectElement.disabled = true;
  } else {
    alert("select a valid tagtype");
  }
});

SiZemApping.addEventListener("click", (event) => {
  if (sessionStorage.getItem("sizeMapping") == 1) {
    document.getElementById("tagmapping").style.display = "block";
    
  } else {
    document.getElementById("tagmapping").style.display = "none";
  }
});

// Final Values

function getallvalue() {
  //All var
  var RTime = document.getElementById("refreshTime").value;
  var clientName = document.getElementById("client_Name").value;
  var kEyValue = document.getElementById("kValue").value;

  if (RTime == "") {
    console.log("Refresh has no Value");
  } else {
    console.log(RTime);
  }
}

refreshTime;
