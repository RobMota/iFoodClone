import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, Alert, ActivityIndicator } from "react-native";
import api from "../../services/api";
import {
  SafeAreaView,
  ViewActivity,
  CategoryView,
  BannerView,
  PrincipalView,
  ViewRestaurants,
  TitleRestaurants,
  ButtonTypeSelect,
  TextTypeSelect,
  SelectType,
} from "./styles";

import CategoryItem from "../../components/CategoryItem";
import RestaurantItem from "../../components/RestaurantItem";
import BannerItem from "../../components/BannerItem";

export default function Principal() {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [type, setType] = useState("Entrega");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/");
        const data = await response.data;

        setLoaded(true);
        setBanners(data.banner_principal);
        setCategories(data.categorias);
        setRestaurants(data.restaurantes);
      } catch (error) {
        Alert.alert("Error to consult " + error);
      }
    }

    fetchData();
  }, []);

  const ViewHome = () => {
    return (
      <PrincipalView>
        <SelectType>
          <ButtonTypeSelect onPress={() => setType("Entrega")}>
            <TextTypeSelect selected={type == "Entrega"}>
              Entrega
            </TextTypeSelect>
          </ButtonTypeSelect>

          <ButtonTypeSelect onPress={() => setType("Retirada")}>
            <TextTypeSelect selected={type == "Retirada"}>
              Retirada
            </TextTypeSelect>
          </ButtonTypeSelect>
        </SelectType>

        <CategoryView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              photo={category.img_url}
              text={category.nome}
            />
          ))}
        </CategoryView>

        <BannerView horizontal={true} showsHorizontalScrollIndicator={false}>
          {banners.map((banner) => (
            <BannerItem key={banner.id} photo={banner.banner_img_url} />
          ))}
        </BannerView>

        <TitleRestaurants>Restaurantes</TitleRestaurants>
        <ViewRestaurants>
          {restaurants.map((restaurant) => (
            <RestaurantItem
              key={restaurant.id}
              photo={restaurant.url_img}
              name={restaurant.nome}
              note={restaurant.nota}
              category={restaurant.categoria}
              distance={restaurant.distancia}
              freightValue={restaurant.valor_frete}
              deliveryTime={restaurant.tempo_entrega}
            />
          ))}
        </ViewRestaurants>
      </PrincipalView>
    );
  };

  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        {loaded ? (
          <ViewHome />
        ) : (
          <>
            <ViewActivity>
              <ActivityIndicator color="#f0001a" size="large" />
              <Text>Carregando dados aguarde...{loaded}</Text>
            </ViewActivity>
          </>
        )}
      </SafeAreaView>
    </>
  );
}
