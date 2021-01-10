import React from "react";
import { Text, StatusBar } from "react-native";
import { SafeAreaView, Image, ButtonContainer, View } from "./styles";
import banner from "../../assets/img/banner.png";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <Text>Perfil</Text>
      </SafeAreaView>
    </>
  );
}
