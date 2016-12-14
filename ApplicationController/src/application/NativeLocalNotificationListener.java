package application;

  // Copyright © 2015, Oracle and/or its affiliates. All rights reserved.

import java.util.HashMap;
import oracle.adfmf.framework.api.AdfmfContainerUtilities;
import oracle.adfmf.framework.event.Event;
import oracle.adfmf.framework.event.EventListener;
import oracle.adfmf.framework.event.NativeLocalNotificationEvent;
import oracle.adfmf.framework.exception.AdfException;
import oracle.adfmf.json.JSONException;
import oracle.adfmf.json.JSONObject;

public class NativeLocalNotificationListener implements EventListener {

  public NativeLocalNotificationListener() {
  }

  public void onMessage(Event event) {
    String payload = event.getPayload();

    if (!"{}".equals(payload)) {
      try {
        HashMap<String, Object> payloadMap = 
          ((NativeLocalNotificationEvent)event).getPayloadObject();
        JSONObject jsonPayload = (JSONObject)payloadMap.get("payload");
        boolean inside = jsonPayload.getBoolean("inside");

        // If inside, start ranging (If outside, ranging already has been stopped)
        if (inside) {
          AdfmfContainerUtilities.invokeContainerJavaScriptFunction("Beacon", 
                                                                    "startRanging", 
                                                                    new Object[] {});
        }
      } catch (JSONException e) {
        System.out.println("Local Notification JSON error: " + e.getMessage());
      }
    }
  }

  public void onError(AdfException adfException) {
    System.out.println("Local Notification error: " + adfException.getMessage());
  }

  public void onOpen(String token) {
    System.out.println("Local Notification opened: " + token);
  }
}