import { useEffect, useState } from "react";

const Usecurrencyinfo = (currency) => {           // We want an API call here ; API call should be done only when the hook is used ; useEffect hook can be used as it is triggeed after render phase ; Hence we'll use ueEffect() as our fetch will get called automatically here and hence we don't have to make any extra fetch function
    const [data, setdata] = useState({})            // empty obj is given default value because if we don't get data then empty obj will ensure that our application won't crash

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

        .then((res) => {return res.json()})            // converting data to json because api data is in form of string 
        .then((res) => {setdata(res[currency])})

        console.log(data);
    }, [currency])

    console.log(data);
    return data;
}

export default Usecurrencyinfo;
