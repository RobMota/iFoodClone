import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";

export const PrincipalView = styled.ScrollView`
  flex: 1;
`;

export const SelectType = styled.View`
  flex-direction: row;
  text-align: left;
  padding: 0 0 20px 20px;
  font-weight: bold;
  width: ${Dimensions.get("window").width}px;
`;

export const ButtonTypeSelect = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const TextTypeSelect = styled.Text`
  ${(props) =>
    props.selected
      ? css`
          font-weight: bold;
          color: #f0001a;
        `
      : css``}
`;

export const CategoryView = styled.ScrollView`
  height: 90px;
  width: ${Dimensions.get("window").width - 10}px;
`;

export const BannerView = styled.ScrollView`
  margin-top: 20px;
  height: 180px;
  flex-direction: row;
  width: ${Dimensions.get("window").width - 10}px;
`;

export const TitleRestaurants = styled.Text`
  text-align: left;
  margin: 40px 20px 10px 20px;
  font-weight: bold;
  width: ${Dimensions.get("window").width}px;
`;

export const ViewRestaurants = styled.View`
  justify-content: center;
  margin: 10px 20px 30px 20px;
  width: ${Dimensions.get("window").width - 50}px;
`;

export const ViewActivity = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: 40px;
`;
