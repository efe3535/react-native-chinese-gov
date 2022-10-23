import { React, useState } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ScrollView,
  Image,
  TextInput
} from 'react-native';


const ArrestedText = (props) => {
  if (props.guilty) {
    return <Text style={{fontWeight:'bold', fontSize:24}}>We'll arrest you tomorrow. </Text>
  } else {
    return <Text style={{fontWeight:'bold'}} selectable>{props.val}</Text>

  }
}

const App: () => Node = () => {
  const [disabledBool, setDisabledBool] = useState(false);
  const [borderColor, setBorderColor] = useState("#282828");
  const [fieldVal, setFieldVal] = useState("");
  const [opinionList, setOpinionList] = useState([]);
  const textChanged = (text) => {
    setFieldVal(text);
    if (text.includes("dislike") || text.includes("don't") || text.includes("usa")) {
      setDisabledBool(true);
      setBorderColor("#ff0000");
    } else {
      setDisabledBool(false);
      setBorderColor("#282828");
    }
  }

  const popLast = () => {
    if (opinionList) {
      setOpinionList(opinionList.slice(0, opinionList.length - 1));
    }
  }

  const createAlert = () => {
    if (!opinionList.join("").includes(fieldVal)) {
      console.log(opinionList)
      console.log([...opinionList, (opinionList.length + 1).toString() + " -> " + fieldVal + "\n"])
      setOpinionList(opinionList => [...opinionList, (opinionList.length + 1).toString() + " -> " + fieldVal + "\n"]);
      setFieldVal("");
      if (!disabledBool) {
        Alert.alert("You've clicked the button.", "Thanks for your good feedbacks about our glorious motherland, China!",
          [
            {
              text: "好的",
              style: "destructive",
            }
          ],
        );

      } else {
        Alert.alert("You've clicked the button.", "Thanks! We'll arrest you tomorrow!",
          [
            {
              text: "好的",
              style: "destructive",
            }
          ],
        );
      }
    } else {
      if(opinionList.length>0) {
        Alert.alert("Mao Zedong says:", "Thanks for  contributing, comrade. But you can't repeat the same shit over and over.");
      }
      else {
        Alert.alert("Mao Zedong says:", "Please write something, comrade.");
      }
    }
  }
  return (

    <SafeAreaView style={{ backgroundColor: "#121212", flex: 1 }}>
      <ScrollView style={{ margin: 5 }}>
        <StatusBar barStyle="dark-content" />
        <Text selectable={!disabledBool} style={{ color: "#ebdbb2", fontSize: 16, textAlign: 'center', textAlignVertical: 'center', marginTop: 32 }}>
          Hey, what is your opinion about Chinese government?
        </Text>
        <TextInput value={fieldVal} onChangeText={textChanged} placeholder='hint: 我們希望你寫出好東西' style={{ width: 300, backgroundColor: "#282828", flexDirection: 'row', height: 50, alignSelf: 'center', marginTop: 35, borderRadius: 5, borderWidth: 2, borderColor: borderColor }} />

        <View style={
          { alignItems: 'center',  backgroundColor:"#282828", marginTop: 35, marginBottom: 15, height: 150, marginHorizontal:15}
        }>
          <ScrollView>
            <ArrestedText guilty={disabledBool} val={opinionList} />
          </ScrollView>
        </View>
        <View style={
          { alignItems: 'center', marginTop: 35, marginBottom: 15, }
        }>
          <Button disabled={disabledBool} onPress={createAlert} title='Send your opinion in' color={!disabledBool ? "#98971a" : "#FF0000"} touchSoundDisabled />
        </View>
        <View style={
          { alignItems: 'center', marginBottom: 15}
        }>
          <Button disabled={disabledBool} onPress={popLast} title='Delete your last opinion' color={"#FF0000"} touchSoundDisabled />
        </View>
      </ScrollView>
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
