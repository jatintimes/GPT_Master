var indexed_array;
$(document).ready(function () {
  $("#gpt_gen_tag").click(function () {
    function getFormData($form) {
      var unindexed_array = $form.serializeArray();
      var indexed_array = {};

      $.map(unindexed_array, function (n, i) {
        indexed_array[n["name"]] = n["value"];
      });
      console.log(indexed_array);
      final_values = indexed_array;
      return indexed_array;
    }
    getFormData($("form"));
  });
});

$(".chosen-select").chosen();
$(".chosen-select").chosen({ width: "95%" });

var dfptag =
  '<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>\n' +
  "  <script>\n" +
  "    window.googletag = window.googletag || {cmd: []};\n" +
  "    var interstitialSlot;\n" +
  "    googletag.cmd.push(function () {\n" +
  "      var REFRESH_KEY = 'refresh';\n" +
  "      var REFRESH_VALUE = 'true';\n" +
  "      var Responsive_Ad = googletag.sizeMapping().addSize([992, 0], [[300, 250]]).addSize([768, 0], [[320, 50]]).addSize([320, 0], [[320, 50]]).addSize([0, 0], [[320, 50], [1, 1]]).build();\n" +
  "      var Sticky_Ad = googletag.sizeMapping().addSize([992, 0], [[728, 90]]).addSize([768, 0], [[320, 50]]).addSize([320, 0], [[320, 50]]).addSize([0, 0], [[320, 50], [1, 1]]).build();\n" +
  "      var other_Ad = googletag.sizeMapping().addSize([992, 0], [[728, 90], [970, 90], [970, 250]]).addSize([768, 0], [[300, 250]]).addSize([320, 0], [[300, 250]]).addSize([0, 0], [[320, 50], [1, 1]]).build();\n" +
  "\n" +
  "      googletag.defineSlot('/21928950349,22612397020/GBWA_Leaderboard', [[300, 250], [728, 90], [970, 90], [970, 250]], 'div-gpt-GBWA_Leaderboard').defineSizeMapping(other_Ad).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());\n" +
  "      googletag.defineSlot('/21928950349,22612397020/GBWA_BelowHeading_1', [300, 250], 'div-gpt-GBWA_BelowHeading_1').setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());\n" +
  "\n" +
  "      googletag.defineSlot('/21928950349,22612397020/GBWA_BelowHeading_2', [300, 250], 'div-gpt-GBWA_BelowHeading_2').defineSizeMapping(Responsive_Ad).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());\n" +
  "\n" +
  "      googletag.defineSlot('/21928950349,22612397020/GBWA_WithinContent_1', [[300, 250], [728, 90], [970, 90], [970, 250]], 'div-gpt-GBWA_WithinContent_1').defineSizeMapping(other_Ad).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());\n" +
  "\n" +
  "      googletag.defineSlot('/22082859479,22612397020/GBWA_WithinContent_2', [[300, 250], [728, 90], [970, 90], [970, 250]], 'div-gpt-GBWA_WithinContent_2').defineSizeMapping(other_Ad).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());\n" +
  "\n" +
  "      googletag.defineSlot('/22082859479,22612397020/GBWA_WithinContent_3', [[300, 250], [728, 90], [970, 90], [970, 250]], 'div-gpt-GBWA_WithinContent_3').defineSizeMapping(other_Ad).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());\n" +
  "\n" +
  "      googletag.defineSlot('/22082859479,22612397020/GBWA_BottomSticky', [[728, 90], [320, 50]], 'div-gpt-GBWA_BottomSticky').defineSizeMapping(Sticky_Ad).setTargeting(REFRESH_KEY, REFRESH_VALUE).addService(googletag.pubads());\n" +
  "      googletag.defineSlot('/21928950349,22612397020/GBWA_Parallax', [300, 1050], 'ad-parallax').addService(googletag.pubads());\n" +
  "\n" +
  '      interstitialSlot = googletag.defineOutOfPageSlot("/21928950349,22612397020/GBWA_Interstital", googletag.enums.OutOfPageFormat.INTERSTITIAL).addService(googletag.pubads());\n' +
  "\n" +
  "\n" +
  "      var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 30;\n" +
  "      googletag.pubads().addEventListener('impressionViewable', function (event) {\n" +
  "        var slot = event.slot;\n" +
  "        if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {\n" +
  "          setTimeout(function () {\n" +
  "            googletag.pubads().refresh([slot]);\n" +
  "          }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);\n" +
  "        }\n" +
  "      });\n" +
  "      googletag.pubads().enableSingleRequest();\n" +
  "      googletag.enableServices();\n" +
  "      googletag.cmd.push(function () {\n" +
  "        googletag.display(interstitialSlot);\n" +
  "      });\n" +
  "    });\n" +
  "  </script>";
