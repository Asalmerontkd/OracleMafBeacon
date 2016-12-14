package mobile;

  // Copyright © 2015, Oracle and/or its affiliates. All rights reserved.


import java.util.ArrayList;
import java.util.List;

import oracle.adfmf.amx.event.ActionEvent;
import oracle.adfmf.framework.api.AdfmfContainerUtilities;
import oracle.adfmf.framework.api.AdfmfJavaUtilities;
import oracle.adfmf.java.beans.ProviderChangeListener;
import oracle.adfmf.java.beans.ProviderChangeSupport;

public class BeaconManager {

  private static List<Beacon> beacons = null;
  protected transient static ProviderChangeSupport providerChangeSupport;

  public BeaconManager() {
    if (beacons == null) {
      beacons = new ArrayList<Beacon>();
      providerChangeSupport = new ProviderChangeSupport(this);
    }
  }

  public void startMonitoring(ActionEvent actionEvent) {
    AdfmfContainerUtilities.invokeContainerJavaScriptFunction(
      AdfmfJavaUtilities.getFeatureId(), "startMonitoring", new Object[] {});
  }

  public void stopMonitoring(ActionEvent actionEvent) {
    AdfmfContainerUtilities.invokeContainerJavaScriptFunction(
      AdfmfJavaUtilities.getFeatureId(), "stopMonitoring", new Object[] {});
  }

  public List<Beacon> getBeacons() {
    return beacons;
  }

  public static void beaconRanged(String uuid, int major, int minor, String proximity) {
    for (Beacon beacon : beacons) {
      if (beacon.getMajor() == major && beacon.getMinor() == minor) {
        // Existing beacon, update proximity
        beacon.setProximity(proximity);
        return;
      }
    }

    // No existing beacon found, add new one
    beacons.add(new Beacon(uuid, major, minor, proximity));
    providerChangeSupport.fireProviderRefresh("beacons"); 
  }

  public static void clearBeacons() {
    beacons.clear();
    providerChangeSupport.fireProviderRefresh("beacons"); 
  }

  public void addProviderChangeListener(ProviderChangeListener l) {
    providerChangeSupport.addProviderChangeListener(l);
  }

  public void removeProviderChangeListener(ProviderChangeListener l) {
    providerChangeSupport.removeProviderChangeListener(l);
  }
}