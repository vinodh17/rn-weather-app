import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";

const Weather = ({ weather }: any) => {
  return (
    <View style={styles.container}>
      <Text>Temperature: {weather.temperature},</Text>
      <Text>Wind Speed: {weather.wind_speed},</Text>
      <Text>Perception: {weather.precip}</Text>
      <Text>{weather.weather_icons}</Text>

      <Image
        style={{ height: 100, width: 100, borderRadius: 50 }}
        source={{ uri: weather.weather_icons }}
      />
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

const mapStateToProps = (state: any) => ({ weather: state.appReducer.weather });

export default connect(mapStateToProps)(Weather);
