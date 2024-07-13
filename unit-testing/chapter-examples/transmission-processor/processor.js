function processor(transmission) {
    if (transmission.indexOf("::")<0 || transmission.indexOf("::")>1){
        return -1
    }
    let parts = transmission.split("::");
    let id = parseInt(parts[0])
        if (id = NaN){
            return { parts: -1 };
        }
    let rawData = parts [1]
    if (rawData[0] !=="<" ||rawData[rawData.length -1] !==">") {
        rawData = -1;
     }
    return {
        id: id,
        rawData: rawData
    };
  
 }

 module.exports = processor;