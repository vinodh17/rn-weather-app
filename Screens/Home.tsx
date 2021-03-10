import { connect } from "react-redux";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { getCountry } from "../Redux/Actions/action";

const Home = (props: any) => {
const [input, setCountry] = useState("");

  const getCountryDetails = () => {
    props.getCountry(input, props.navigation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(inpu) => setCountry(inpu)}
          placeholder="Enter Country Name"
        />

        <Button onPress={getCountryDetails} title="Submit"></Button>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
		flex: 1,
		display: 'flex',
    backgroundColor: "#fff",
		alignItems: "center",
		height: '100%',
    justifyContent: "center",
	},
	inputContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
  input: {
		color: '#000',
    width: 200,
    height: 50,
    padding: 8,
    marginRight: 10,
    borderColor: "#333",
    borderWidth: 1,
		borderRadius: 5,
		fontSize: 18,
		flex: 1,
		marginBottom: 10
  },
});

export default connect(null, { getCountry })(Home);
