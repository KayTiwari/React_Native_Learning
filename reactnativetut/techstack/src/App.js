import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import reducers from './reducers'
import { Header } from './components/common'
import { createStore } from 'redux'

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
        <View>
        <Header text='Tec.Stack'/>
        </View>
        </Provider>
    );
};

export default App;