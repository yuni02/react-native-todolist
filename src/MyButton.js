import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import PropsTypes from 'prop-types';

const MyButton = ({
                      title = 'title', onPress = () => {
    }, children
                  }) => {

    return (

        <TouchableOpacity
            onPressIn={() => console.log('in')}
            // onPressOut={()=>console.log('out')}
            onLongPress={() => console.log('long')}
            delayLongPress={3000}
            pressRetentionOffset={{bottom: 10, top: 10, left: 10, right: 10}}>
            <View style={{backgroundColor: 'red', padding: 10, margin: 10}}>
                <Text style={{fontSize: 20, color: 'white'}}>{children || title} </Text>
            </View>
        </TouchableOpacity>


    )
}
//주석추가 
MyButton.defaultProps = {
    title: 'default',
    onPress: () => alert('default')
}
MyButton.propTypes = {
    title: PropsTypes.string,
    onPress: PropsTypes.func
}

export default MyButton;

