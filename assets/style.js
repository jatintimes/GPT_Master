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
  var switchstorage = document.querySelector(".tagmapping");

  if (switchstorage.style.display !== "none") {
    sessionStorage.setItem("sizeMapping", 0);
  } else {
    sessionStorage.setItem("sizeMapping", 1);
    sessionStorage.setItem("numberOfMapping", 1);
    sessionStorage.setItem("mapName", "Mapping1");
    $(".chosen-container").width(150);
  }

  document.getElementsByName("tagmapping").forEach((div) => {
    if (div.style.display !== "none") {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  });
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
  var SMValue = sessionStorage.getItem("numberOfMapping");
  var SMValue = parseInt(SMValue);
  var NSMValue = SMValue + 1;
  sessionStorage.setItem("numberOfMapping", NSMValue);
  var xx = sessionStorage.getItem("numberOfMapping");

  var tMapName = sessionStorage.getItem("mapName");
  sessionStorage.setItem("mapName", tMapName + ",mapping" + xx + "");
  console.log(sessionStorage.getItem("mapName"));

  var mappingHtml =
    '<form class="center_things" style="flex-direction: column;">\n' +
    '                <input type="text" class="form-control" id="mapping' +
    xx +
    '" onblur="setMvalue()" name="size-mapping" value="mapping' +
    xx +
    '" readonly />\n' +
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
    '                      <td><input type="text" name="Desktop_viewport" placeholder="Desktop" value="[992, 0]" />\n' +
    "                      </td>\n" +
    '                      <td><input type="text" name="Desktop_size" placeholder="Desktop"\n' +
    '                          value="[[728, 90] , [970 , 250]]" /></td>\n' +
    "                    </tr>\n" +
    "                    <tr>\n" +
    '                      <td><input type="text" name="tablet_viewport" placeholder="tablet" value="[768, 0]" /></td>\n' +
    '                      <td><input type="text" name="tablet_size" placeholder="tablet"\n' +
    '                          value="[[300, 250], [336 , 280]]" /></td>\n' +
    "\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    '                      <td><input type="text" name="mobile_viewport" placeholder="Tablet" value="[320, 0]" /></td>\n' +
    '                      <td><input type="text" name="mobile_size" placeholder="Desktop"\n' +
    '                          value="[[300, 250], [336 , 280]]" /></td>\n' +
    "                    </tr>\n" +
    "\n" +
    "                  </tbody>\n" +
    "                </table>\n" +
    "\n" +
    "              </form>";

  document.getElementById("sda").innerHTML += mappingHtml;
}

function setMapping() {
  var storedNames = sessionStorage.getItem("mapName");
  var maparray = storedNames.split(",");
  const optionsadded = [];
  maparray.forEach((e) => {
    var oPtion =
      '<option value="' + e + '" id="firstMapping">' + e + "</option>";
    // document.querySelector(".tagmapping").innerHTML += oPtion;
    optionsadded.push(oPtion);
  });

  document.getElementsByName("tagmapping").forEach((div) => {
    div.innerHTML += optionsadded;
  });
}

function deFineSlot() {
  document.getElementById("addmoreslot").innerHTML +=
    '<div class="card-body">\n' +
    "          <form>\n" +
    '            <input type="text" style="width: 20%" id="fname" name="fname" placeholder="Ad Slot Name" />\n' +
    '            <input type="text" style="width: 20%" id="fname" name="fname" placeholder="Ad Size" />\n' +
    '            <select style="width: 20%" name="refresh" id="Ad_refresh">\n' +
    '              <option value="" disabled selected>Refresh?</option>\n' +
    '              <option value="gpt">Yes</option>\n' +
    '              <option value="amp">No</option>\n' +
    "            </select>\n" +
    '            <select style="width: 20%; display: none;" name="tagmapping" class="tagmapping">\n' +
    '              <option value="" disabled selected>Select Mapping</option>\n' +
    '<option value="NoSlotMapping">No Mapping</option>\n' +
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
    document.getElementById("size_mapping").style.display = "block";
  } else {
    document.getElementById("size_mapping").style.display = "none";
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
