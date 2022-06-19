import React, {useState} from 'react';
import axios from 'axios';

const useHttp = (requestObj, callback) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {

        setIsLoading(true);

        try{
            let response;

            if(requestObj.method === "GET") response = await axios.get(requestObj.url);
            if(requestObj.method === "DELETE") response = await axios.delete(requestObj.url);
            if(requestObj.method === "PUT") response = await axios.put(requestObj.url, requestObj.body);
            if(requestObj.method === "PATCH") response = await axios.patch(requestObj.url, requestObj.body);
            if(requestObj.method === "POST") response = await axios.post(requestObj.url, requestObj.body, requestObj);

            console.log(response)

            if(response.status !== 200) {
                callback(response.status)
                throw new Error('Request Failed')
            };
            
            callback(response.data);
            setIsLoading(false);

        }
        catch(error) {
            setError(error.message || 'Something went wrong.')
        }
    };

    return {isLoading, error, sendRequest}
};

export default useHttp;