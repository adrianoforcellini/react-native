import React, { useState, useEffect } from "react";
import {Text, TouchableOpacity, Image, View, Alert} from 'react-native';
import styles from "./Styles";
import randomChuckJoke from "../../APIs/chuck";
import recharge from "./recharge.png";

const Home = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    const data = await randomChuckJoke();
    setJoke(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{joke.value}</Text>
      <TouchableOpacity style={styles.imageContainer} 
      onPress={() =>getJoke()} >
        <Image style={styles.image} source={recharge} />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
