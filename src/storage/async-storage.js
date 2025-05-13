import AsyncStorage from '@react-native-async-storage/async-storage';

const Key = 'tasks';

const getData = async () => {
    let data = await AsyncStorage.getItem(Key);
}

if (data == null) {
    data = new Array ()
    setData(data)

}
 return data

async (value) => {
    await AsyncStorage.setItem(Key,JSON.stringify(value));

}
export {
    getData,
    setData
}
