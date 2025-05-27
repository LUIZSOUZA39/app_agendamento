import AsyncStorage from '@react-native-async-storage/async-storage';

const Key = 'tasks';

const getData = async () => {
    let data = JSON.parse(await AsyncStorage.getItem(Key));

    if (data == null) {
        data = []
        setData(data)
    
    }

    return data
}

const setData = async (value) => {
    await AsyncStorage.setItem(Key,JSON.stringify(value));    
}

const addData = async (task) => {
    const data= await getData()    
    console.log(data)
    data.push(task)
    await setData(data)    
}

export {
    getData,
    setData,
    addData
}
