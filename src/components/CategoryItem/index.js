import React from "react";
import { CategoryView, CategoryPhoto, CategoryText } from "./styles";

export default function CategoryItem({ photo, text, key }) {
  return (
    <CategoryView key={key}>
      <CategoryPhoto
        source={{
          uri: photo,
          width: 98,
          height: 58,
        }}
      />
      <CategoryText>{text}</CategoryText>
    </CategoryView>
  );
}
