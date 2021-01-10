import React from "react";
import { Text } from "react-native";

import { RestaurantView, RestaurantPhoto, RestaurantInfo } from "./styles";
import { AntDesign } from "@expo/vector-icons";

export default function RestaurantItem({
  photo,
  name,
  key,
  note,
  category,
  distance,
  freightValue,
  deliveryTime,
}) {
  return (
    <RestaurantView key={key}>
      <RestaurantPhoto
        source={{
          uri: photo.trim(),
          width: 50,
          height: 50,
          resizeMode: "cover",
        }}
      />
      <RestaurantInfo>
        <Text>{name}</Text>
        <Text>
          <AntDesign name="star" size={12} color="#F9A825" />
          {note} - {category} - {distance}
        </Text>
        <Text>
          {deliveryTime} • R$ {freightValue}
        </Text>
        <Text></Text>
      </RestaurantInfo>
    </RestaurantView>
  );
}
