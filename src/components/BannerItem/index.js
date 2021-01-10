import React from "react";
import { Dimensions } from "react-native";
import { BannerView, BannerPhoto } from "./styles";

export default function BannerItem({ photo, key }) {


  return (
    <BannerView key={key}>
      <BannerPhoto
        source={{
          uri: photo.trim(),
          width: Dimensions.get("window").width - 50,
          height: 180,
          resizeMode: "contain",
        }}
      />
    </BannerView>
  );
}
