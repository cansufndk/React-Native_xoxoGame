import React from 'react';
import { Platform } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = Platform.OS === "ios" ?
    "ca-app-pub-1017432203303316/2427239866" :
    "ca-app-pub-1017432203303316/2427239866"

function B3() {
    return (
        <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.INLINE_ADAPTIVE_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: false,
            }}
        />
    );
}

export default B3;