package com.eclipsesource.cordova.plugin.firebase.crashlytics;

import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;

public interface ActionHandler {
    boolean handle(JSONArray args, CordovaInterface cordova);
}
