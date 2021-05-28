window.onload = function() {
    /*    var interval = setInterval(handleRefresh, 3000);*/
        handleRefresh();
    }
    
    function handleRefresh() {
        console.log("here");
    
        var url = "http://openapi.seoul.go.kr:8088/4d7467546a67616234357755744d46/json/CardSubwayStatsNew/1/100/20200319/";
        $.getJSON(url, updateTraffic);
    }

    function updateTraffic(subwaypeople) {
        var subwayDiv = document.getElementById("subwaypeople");
        var traffic = subwaypeople.CardSubwayStatsNew.row;
        for (var i = 0; i < traffic.length; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "subwayItem");
            div.innerHTML =
                "  " + traffic[i].USE_DT + "일에 " + traffic[i].LINE_NUM + "에 " + traffic[i].SUB_STA_NM + "역에서 " + traffic[i].RIDE_PASGR_NUM + "명이 승차하고 " +  traffic[i].ALIGHT_PASGR_NUM+ "명이 내렸습니다. ";
    
                    subwayDiv.appendChild(div);
    
        }
    
     }