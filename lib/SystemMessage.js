import React, { Component } from 'react';
import { StyleSheet, Text, View, ViewPropTypes, } from 'react-native';
import PropTypes from 'prop-types';
import Color from './Color';
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 5,
        marginBottom: 10,
    },
    text: {
        backgroundColor: Color.backgroundTransparent,
        color: Color.defaultColor,
        fontSize: 12,
        fontWeight: '300',
    },
});
export default class SystemMessage extends Component {
    render() {
        const { currentMessage, containerStyle, wrapperStyle, textStyle, } = this.props;
        if (currentMessage) {
            // console.log('currentMessage', currentMessage)
            switch(currentMessage.date){
                case 'right':
                    return (<View style={[styles.container, containerStyle]}>
                        <View style={[wrapperStyle, {width: '105%'}]}>
                        <Text style={[styles.text, textStyle, {textAlign: 'right', color: '#999'}]}>{currentMessage.text}</Text>
                        </View>
                    </View>);
                case 'left':
                    return (<View style={[styles.container, containerStyle]}>
                        <View style={[wrapperStyle, {width: '105%', paddingLeft: 40}]}>
                        <Text style={[styles.text, textStyle, {textAlign: 'left', color: '#999'}]}>{currentMessage.text}</Text>
                        </View>
                    </View>);
                default:
                    return (<View style={[styles.container, containerStyle]}>
                        <View style={wrapperStyle}>
                        <Text style={[styles.text, textStyle]}>{currentMessage.text}</Text>
                        </View>
                    </View>);
            }
        }
        return null;
    }
}
SystemMessage.defaultProps = {
    currentMessage: {
        system: false,
    },
    containerStyle: {},
    wrapperStyle: {},
    textStyle: {},
};
SystemMessage.propTypes = {
    currentMessage: PropTypes.object,
    containerStyle: ViewPropTypes.style,
    wrapperStyle: ViewPropTypes.style,
    textStyle: PropTypes.any,
};
//# sourceMappingURL=SystemMessage.js.map