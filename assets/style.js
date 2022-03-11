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
    sessionStorage.setItem('numberOfMapping', 1);
    sessionStorage.setItem('mapName', "['Mapping1]'");
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

function addmoresize() {
  var SMValue = sessionStorage.getItem('numberOfMapping');
  var SMValue = parseInt(SMValue);
  var NSMValue = SMValue + 1;
  sessionStorage.setItem('numberOfMapping', NSMValue);
  var xx = sessionStorage.getItem('numberOfMapping');
  console.log(xx);

  var tMapName = sessionStorage.getItem('mapName');
  console.log(typeof(tMapName));
 tMapName.remove(-1)
 console.log(tMapName);

  var mappingHtml =
    '<form class="center_things" style="flex-direction: column;">\n' +
    '                <input type="text" class="form-control" onblur="setMvalue()" name="size-mapping" value="mapping'+ xx +'" readonly />\n' +
    "\n" +
    '                <table class="table">\n' +
    "                  <thead>\n" +
    "                    <tr>\n" +
    "                      <th>Viewport</th>\n" +
    "                      <th>Ad Size</th>\n" +
    "                    </tr>\n" +
    "                  </thead>\n" +
    "                  <tbody>\n" +
    "                    <tr>\n" +
    '                      <td><input type="text" id="SM_Desktop" name="Desktop" placeholder="Desktop" value="[992, 0]" />\n' +
    "                      </td>\n" +
    '                      <td><input type="text" id="SM_Desktop_adsize" name="Desktop" placeholder="Desktop"\n' +
    '                          value="[[728, 90] , [970 , 250]]" /></td>\n' +
    "                    </tr>\n" +
    "                    <tr>\n" +
    '                      <td><input type="text" id="SM_Mobile" name="Mobile" placeholder="Mobile" value="[768, 0]" /></td>\n' +
    '                      <td><input type="text" id="SM_Mobile_adsize" name="Desktop" placeholder="Desktop"\n' +
    '                          value="[[300, 250], [336 , 280]]" /></td>\n' +
    "\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    '                      <td><input type="text" id="SM_Tablet" name="Tablet" placeholder="Tablet" value="[320, 0]" /></td>\n' +
    '                      <td><input type="text" id="SM_Tablet_adsize" name="Desktop" placeholder="Desktop"\n' +
    '                          value="[[300, 250], [336 , 280]]" /></td>\n' +
    "                    </tr>\n" +
    "\n" +
    "                  </tbody>\n" +
    "                </table>\n" +
    "\n" +
    "              </form>";

  document.getElementById("sda").innerHTML += mappingHtml;
}

function deFineSlot() {
  document.getElementById("addmoreslot").innerHTML +=
    '<div class="card-body">\n' +
    "          <form>\n" +
    '            <input type="text" style="width: 20%" id="fname" name="fname" placeholder="Ad Slot Name" />\n' +
    '            <input type="text" style="width: 20%" id="fname" name="fname" placeholder="Ad Size" />\n' +
    '            <select style="width: 20%" name="tagtype" id="tagtype">\n' +
    '              <option value="" disabled selected>Refresh?</option>\n' +
    '              <option value="gpt">Yes</option>\n' +
    '              <option value="amp">No</option>\n' +
    "            </select>\n" +
    '            <select style="width: 20%; display: none;" name="tagtype" id="tagmapping">\n' +
    '              <option value="" disabled selected>Select Mapping</option>\n' +
    '              <option value="gpt" id="firstMapping"></option>\n' +
    '              <option value="amp">AMP</option>\n' +
    '              <option value="passback">Passback</option>\n' +
    "            </select>\n" +
    "          </form>\n" +
    "\n" +
    "        </div>";
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
