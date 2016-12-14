(function() {

// Copyright © 2015, Oracle and/or its affiliates. All rights reserved.

// Our region identifier
//var uuid = "0AC59CA4-DFA6-442C-8C65-22247851344C";
var uuid = "23a01af0-232a-4518-9c0e-323fb773f5ef";
var beaconRegion;

function initialise() {
beaconRegion = createRegion();
var delegate = new cordova.plugins.locationManager.Delegate();

// Callback for enter/exit region whilst monitoring
delegate.didDetermineStateForRegion = function (pluginResult) {
var options;
if (pluginResult.state == "CLRegionStateInside") {

// Fire local notification and start ranging from there so that ranging only
// starts if the app is in the foreground, or the user taps on the notification
options = {"alert":"Welcome! Thank you for entering the " + 
pluginResult.region.identifier + " region.", 
"sound":"SYSTEM_DEFAULT",
"vibration":"SYSTEM_DEFAULT",
"payload":{"id":pluginResult.region.identifier, "inside":true}};
adf.mf.api.localnotification.add(options, function() {}, function() {});
} else if (pluginResult.state == "CLRegionStateOutside") {

// Stop ranging immediately
stopRanging();

// Fire local notification
options = {"alert":"Goodbye. Thank you for visiting the " + 
pluginResult.region.identifier + " region.",
"sound":"SYSTEM_DEFAULT",
"vibration":"SYSTEM_DEFAULT",
"payload":{"id":pluginResult.region.identifier, "inside":false}};
adf.mf.api.localnotification.add(options, function() {}, function() {});
}
};

// Callback for ranging region
delegate.didRangeBeaconsInRegion = function(pluginResult) {
var beacons = pluginResult.beacons;
for (var i = 0; i < beacons.length; i++) { 

// Add to list of beacons in BeaconManager
adf.mf.api.invokeMethod("mobile.BeaconManager", "beaconRanged", 
beacons[i].uuid, beacons[i].major, 
beacons[i].minor, beacons[i].proximity, 
function() {}, function() {});
}
};

// Set delegate
cordova.plugins.locationManager.setDelegate(delegate);

// Required in iOS 8+
cordova.plugins.locationManager.requestAlwaysAuthorization();

// Start monitoring by default each time the app is launched
startMonitoring();
}

function createRegion() {


// Monitor any beacons in this UUID-based region
return new cordova.plugins.locationManager.BeaconRegion("AdvertBeacon", uuid); 
}

// Callable externally
startMonitoring = function() {
cordova.plugins.locationManager.startMonitoringForRegion(
beaconRegion).fail(console.error).done();
adf.mf.api.setValue({"name": "#{applicationScope.region}",
"value": beaconRegion.uuid}, 
function() {}, function() {});
adf.mf.api.setValue({"name": "#{applicationScope.monitoring}", "value": true}, 
function() {}, function() {});
}

// Callable externally
stopMonitoring = function() {
stopRanging(); // Must stop ranging first
cordova.plugins.locationManager.stopMonitoringForRegion(
beaconRegion).fail(console.error).done();
adf.mf.api.setValue({"name": "#{applicationScope.monitoring}", "value": false}, 
function() {}, function() {});
}

// Callable externally
startRanging = function() {
cordova.plugins.locationManager.startRangingBeaconsInRegion(
beaconRegion).fail(console.error).done();
adf.mf.api.setValue({"name": "#{applicationScope.ranging}", "value": true}, 
function() {}, function() {});
}

// Callable externally
stopRanging = function() {
cordova.plugins.locationManager.stopRangingBeaconsInRegion(
beaconRegion).fail(console.error).done();
adf.mf.api.setValue({"name": "#{applicationScope.ranging}", "value": false}, 
function() {}, function() {});


// Clear list of beacons
adf.mf.api.invokeMethod("mobile.BeaconManager", "clearBeacons", 
function() {}, function() {});
}

document.addEventListener("showpagecomplete", initialise, false);

}) ();