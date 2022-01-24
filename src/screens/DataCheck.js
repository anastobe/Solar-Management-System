import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import {getUser} from "../api/fakeApiUser"
import { BaseUrl } from '../utils/BaseUrl'

const DataCheck = () => {

    const [data, setdata] = useState(null)

    useEffect(() => {
        saveData()
    }, [])

    const saveData = async () =>{
       const {data, status} = await getUser(`${BaseUrl}/award`, "")
       console.log("data==>",data.result)
    }

    return (
        <View>
            <Text>Check</Text>
        </View>
    )
}

export default DataCheck
