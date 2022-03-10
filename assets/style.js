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
  } else {
    div.style.display = "block";
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
    var sRA = "googletag.pubads().enableSingleRequest();"
    }
  

const selectElement = document.querySelector("#tagtype");

selectElement.addEventListener("change", (event) => {
  if (event.target.value == "gpt") {

    document.getElementById("gpt_config").style.display="block";

    selectElement.disabled = true;
  } else if (event.target.value == "amp") {
    document.getElementById("amp_config").style.display="block";
    selectElement.disabled = true;
  } else if (event.target.value == "passback") {
    document.getElementById("passback_config").style.display="block";
    selectElement.disabled = true;
  } else if (event.target.value == "video") {
    document.getElementById("video_config").style.display="block";
    selectElement.disabled = true;
  } 
  else {
    alert("select a valid tagtype");
  }
});
