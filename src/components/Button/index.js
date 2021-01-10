import React from "react";
import { TouchableOpacity, Text } from "./styles";

export default function Button({ theme, text, ...rest }) {
  return (
    <TouchableOpacity theme={theme || ""} {...rest}>
      <Text theme={theme || ""}>{text}</Text>
    </TouchableOpacity>
  );
}
