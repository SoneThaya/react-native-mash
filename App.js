import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
  Linking,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const [name, setName] = useState('Bob');
  const [session, setSession] = useState({number: 6, title: 'state'});
  const [current, setCurrent] = useState(true);

  const [count, setCount] = useState(0);
  const [addCount, setAddCount] = useState(0);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onClickHandler = () => {
    setName('Steve.');
    setSession({number: 7, title: 'Style'});
    setCurrent(false);
  };

  const onClickAddHandler = () => {
    setAddCount(addCount + 5);
    setCount(count + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Googling with {name}</Text>
      <Text style={styles.text}>
        This is session number {session.number} and about {session.title}
      </Text>
      <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text>
      <Button title="Update State" onPress={onClickHandler}></Button>

      <Text style={styles.text}>{addCount}</Text>
      <Button title="Add" onPress={onClickAddHandler}></Button>
      <Text style={styles.text}>You clicked {count} times</Text>
      {/* <Button
        title="Google"
        onPress={() => {
          Linking.openURL('https://www.google.com');
        }}></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
