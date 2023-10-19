import React from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/7657770845" :
    "ca-app-pub-1017432203303316/7657770845"


function B1() {
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: false,
            }}
        />
    );
}

export default B1;