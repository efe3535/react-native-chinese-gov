//import React, { PureComponent, PropTypes} from 'react';
import React from 'react';
import { Text } from 'react-native';

const ArrestedText = (props) => {
    if (props.guilty) {
      return <Text style={{fontWeight:'bold', fontSize:24}}>We'll arrest you tomorrow. </Text>
    } else {
      return <Text style={{fontWeight:'bold'}} selectable>{props.val}</Text>
  
    }
}
  
export default ArrestedText