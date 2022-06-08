import React, {useState} from 'react';
import axios from 'axios';

const useHttp = (requestObj, callback) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {

        setIsLoading(true);

        try{
            let response;

            if(requestObj.method === 'GET' || requestObj.method === 'DELETE'){

                response = await axios(requestObj.url, 
                    { 
                        method: requestObj.method,
                        headers: requestObj.headers,
                    }
                )
            }
            else{
                
                response = await axios(requestObj.url, 
                    { 
                        method: requestObj.method,
                        headers: requestObj.headers,
                        body: requestObj.body
                    }
                )
            }
            console.log(response)

            if(response.status !== 200) throw new Error('Request Failed')
            
            callback(response.data.result);
            setIsLoading(false);

        }
        catch(error) {
            setError(error.message || 'Something went wrong.')
        }
    };

    return {isLoading, error, sendRequest}
};

export default useHttp;