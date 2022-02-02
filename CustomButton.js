import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const MashButton = props => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      style={styles.warning_button}
      android_ripple={{color: '#ffffff'}}>
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 30,
    fontStyle: 'italic',
    margin: 10,
    textAlign: 'center',
  },
  button: {
    width: 200,
    height: 60,
  },
});

export default MashButton;
