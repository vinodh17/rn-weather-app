import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { getWeather } from "../Redux/Actions/action";
import { SvgUri } from 'react-native-svg';

 const Country = ({ navigation, country, getWeather }: any) => {
  return (
    <View style={styles.container}>
      <Text>
        <Text>Capital : {country.capital}, </Text>
        <Text>Population : {country.population}, </Text>
        <Text>Lat-Long : {country.latlng} </Text>
      </Text>

<SvgUri style={styles.icon} height="30%" width="50%" uri={country.flag} />

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
	icon: {
		marginBottom: 50
	}
});

const mapStateToProps = (state: any) => ({ country: state.appReducer.country });

export default connect(mapStateToProps, { getWeather })(Country);
