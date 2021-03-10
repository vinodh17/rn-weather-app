import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";

const Weather = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>Temperature: {props.weather.temperature},</Text>
      <Text>Wind Speed: {props.weather.wind_speed},</Text>
      <Text>Perception: {props.weather.precip}</Text>
      <Image
        style={{ height: 120, width: 120, borderRadius: 60, marginTop: 10 }}
        source={{ uri: `${props.weather.weather_icons}` }}
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
