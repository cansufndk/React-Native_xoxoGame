
import React, { useEffect, useState } from 'react';
import { Button, Platform } from 'react-native';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/2569079780" :
    "ca-app-pub-1017432203303316/2569079780"


const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
});

function G2() {
    const [loaded, setLoaded] = useState(false);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
            setLoaded(true);
        });
        const unsubscribeShow = interstitial.addAdEventListener(AdEventType.OPENED, () => {
            setOpened(true);
            interstitial.load();
        });
        // Start loading the interstitial straight away
        interstitial.load();

        // Unsubscribe from events on unmount
        return () => {
            unsubscribe;
            unsubscribeShow;
        };
    }, []);

    // No advert ready to show yet
    if (loaded == false) {
        // console.log("G1 loaded if")
        if (interstitial.loaded == true) {
            // console.log("G1 loaded if if loaded")
            interstitial.show();
        }
        else {
            interstitial.load()
            // console.log("G1 loaded else load")
        }
        return null;
    }
    else if (opened == true) {
        // console.log("G1 opened elseif")
        interstitial.load();
        setOpened(false);
    }
    else {
        interstitial.show();
        setLoaded(false);
    }
}
export default G2;