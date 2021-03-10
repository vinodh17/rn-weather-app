import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { getWeather } from "../Redux/Actions/action";

export const Country = ({ navigation, country, getWeather }: any) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text>Capital : {country.capital}, </Text>
        <Text>Population : {country.population}, </Text>
        <Text>Lat-Long : {country.latlng} </Text>
      </Text>
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
          marginBottom: 20,
          marginTop: 10,
        }}
        source={{ uri: country.flag }}
      />
      <Button
        title="Get Details"
        onPress={() => getWeather(country.capital, navigation)}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state: any) => ({ country: state.appReducer.country });

export default connect(mapStateToProps, { getWeather })(Country);
