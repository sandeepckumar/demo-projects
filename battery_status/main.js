navigator.getBattery().then(function(battery) {
    function updateAllBatteryInfo(){
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();

    window.onload = function () {

    }
  
    battery.addEventListener('chargingchange', function(){
      updateChargeInfo();
    });
    function updateChargeInfo(){
      console.log("Battery charging? "
                  + (battery.charging ? "Yes" : "No"));
                  power_source = document.querySelector("#power-source");
                  power_source.innerText =  battery.charging ? "Adapter" : "Battery";
        
    }
  
    battery.addEventListener('levelchange', function(){
      updateLevelInfo();
    });
    function updateLevelInfo(){
      console.log("Battery level: "
                  + battery.level * 100 + "%");
                  battery_level = document.querySelector("#level")
                  battery_level.innerText = battery.level * 100 + "%"
    }
  
    battery.addEventListener('chargingtimechange', function(){
      updateChargingInfo();
    });
    function updateChargingInfo(){
      console.log("Battery charging time: "
                   + battery.chargingTime + " seconds");
    }
  
    battery.addEventListener('dischargingtimechange', function(){
      updateDischargingInfo();
    });
    function updateDischargingInfo(){
      console.log("Battery discharging time: "
                   + battery.dischargingTime + " seconds");
    }


    }

  );



  
// setTimeout("location.reload(true);",100)


