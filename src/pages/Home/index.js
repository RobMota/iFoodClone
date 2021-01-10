import React from "react";
import { Text, StatusBar } from "react-native";
import { SafeAreaView, Image, ButtonContainer, View } from "./styles";
import banner from "../../assets/img/banner.png";
import Button from "../../components/Button";

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner} />
          <Text>Permitir localização</Text>
          <Text>Para describrir restaurantes que entregam em sua região</Text>
        </View>
        <ButtonContainer>
          <Button text="PULAR" onPress={() => navigation.navigate("Main")} />
          <Button theme="primary" text="ENTRAR" />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
