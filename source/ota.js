class Ota {

    getKeysAndValues(inputObject){
        let keys = [];
        let values = [];

        for(let key in inputObject){
            keys.push(key);
            values.push(inputObject[key]);
        }
        return [keys,values];
    }
}

export default Ota;
