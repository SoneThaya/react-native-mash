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
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  Alert,
  ToastAndroid,
  Modal,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MashButton from './CustomButton';

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
  const [name, setName] = useState('');
  const [showWarning, SetShowWarning] = useState(false);

  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
      SetShowWarning(true);
      // Alert.alert(
      //   'Warning',
      //   'The name must be longer than 3 characters.',
      //   [
      //     {
      //       text: 'Do not show again',
      //       onPress: () => console.warn('Do not show again'),
      //     },
      //     {
      //       text: 'Cancel',
      //       onPress: () => console.warn('Cancel pressed'),
      //     },
      //     {
      //       text: 'OK',
      //       onPress: () => console.warn('Ok pressed'),
      //     },
      //   ],
      //   {
      //     cancelable: true,
      //     onDismiss: () => console.warn('Alert dismissed!'),
      //   },
      // );
      // ToastAndroid.showWithGravity(
      //   'The name must be at least 3 characters',
      //   ToastAndroid.LONG,
      //   ToastAndroid.CENTER,
      // );
    }
  };

  const [Refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...Items, {name: 'Item 69'}]);
    setRefreshing(false);
  };

  const [Items, setItems] = useState([
    {key: '1', name: 'Item 1'},
    {key: '2', name: 'Item 2'},
    {key: '3', name: 'Item 3'},
    {key: '4', name: 'Item 4'},
    {key: '5', name: 'Item 5'},
    {key: '6', name: 'Item 6'},
    {key: '7', name: 'Item 7'},
    {key: '8', name: 'Item 8'},
    {key: '9', name: 'Item 9'},
    {key: '10', name: 'Item 10'},
    {key: '11', name: 'Item 11'},
    {key: '12', name: 'Item 12'},
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ];

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onClickHandler = () => {
    setName('Style Test is done.');
  };

  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png',
      }}>
      <Modal
        visible={showWarning}
        onRequestClose={() => SetShowWarning(false)}
        transparent
        animationType="slide"
        hardwareAccelerated>
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_title}>
              <Text style={styles.text}>Warning!</Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 3 characters
              </Text>
            </View>

            <Pressable
              onPress={() => SetShowWarning(false)}
              style={styles.warning_button}
              android_ripple={{color: '#ffffff'}}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text>Please write your name: </Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={value => setName(value)}
      />
      <MashButton
        onPressFunction={onPressHandler}
        title={submitted ? 'Clear' : 'Submit'}
        color={'#00ff00'}
      />
      <MashButton
        onPressFunction={onPressHandler}
        title={'Test'}
        color={'#ff00ff'}
      />
      <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color="#00f"></Button>
      {submitted ? (
        <View style={styles.body}>
          <Text style={styles.text}>You are registered as {name}</Text>
          <Image style={styles.image} source={require('./assets/done.png')} />
        </View>
      ) : (
        <Image style={styles.image} source={require('./assets/error.png')} />
      )}

      {/* <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
      /> */}
      {/* <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Items}
        // needs to be in parentheses and curly braces
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }
      /> */}
      {/* <ScrollView
        style={styles.body}
        refreshControl={
          <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            colors={['#ff00ff']}
          />
        }>
        {Items.map(object => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          );
        })}
      </ScrollView> */}

      {/* styles section */}
      {/* <View style={styles.row}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View> */}

      {/* <Text style={styles.text}>{name}</Text>
      <View style={styles.button}>
        <Button title="Update State" onPress={onClickHandler}></Button>
      </View> */}
      {/* <Text style={styles.text}>
        {current ? 'current session' : 'next session'}
      </Text> */}

      {/* <Text style={styles.text}>{addCount}</Text>
      <Button title="Add" onPress={onClickAddHandler}></Button>
      <Text style={styles.text}>You clicked {count} times</Text> */}
      {/* <Button
        title="Google"
        onPress={() => {
          Linking.openURL('https://www.google.com');
        }}></Button> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#555555',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    height: 100,
    width: 100,
    margin: 10,
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 0,
    paddingBottom: 0,
  },
  middleRow: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginTop: 0,
    paddingTop: 0,
  },
  bottomRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    height: 100,
    width: 100,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    height: 100,
    width: 100,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    height: 100,
    width: 100,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
