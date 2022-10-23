import { React, useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';

  
const ArrestedText = (props) => {
  if(props.guilty) {
    return <Text>We'll arrest you tomorrow. </Text>
  } else {
    return null;
  }
}

const App: () => Node = () => {
  const [disabledBool ,setDisabledBool] = useState(false);
  function textChanged(text) {
    if(text.includes("dislike") || text.includes("don't") || text.includes("usa")) {
      setDisabledBool(true);
    } else {
      setDisabledBool(false);
    }
  }


  const createAlert = () => {
    if(!disabledBool) { 
      Alert.alert("You've clicked the button.","Thanks for your good feedbacks about our glorious motherland, China!", 
        [
          {
            text:"ikr",
            style:"destructive",
          }
        ],
        
      );

    } else {
      Alert.alert("You've clicked the button.","Thanks! We'll arrest you tomorrow!", 
        [
          {
            text:"ikr",
            style:"destructive",

          }
        ],
        
      );

    }
  }
  return (
    
    <SafeAreaView style={{backgroundColor:"#121212", flex:1}}>
      <StatusBar barStyle="dark-content" />  
      <Text style={{color:"#ebdbb2", fontSize:16, textAlign:'center', textAlignVertical:'center', marginTop:32}}>
        Hey, what is your opinion about Chinese government?
      </Text>
      <TextInput onChangeText={textChanged} placeholder='hint: 我們希望你寫出好東西' style={{width:300, backgroundColor:"#282828", flexDirection:'row', height:50, alignSelf:'center', marginTop:35}} />
      <View style={
        {alignItems:'center' , marginTop: 35}
      }>
        <ArrestedText guilty={disabledBool} />
        <Button disabled={disabledBool} onPress={createAlert} title='Send your opinion in' color={!disabledBool ? "#98971a" : "#FF0000"} touchSoundDisabled />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
