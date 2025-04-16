import data from "../data.js";

const wonValue = data[data.length-1].acv;

// formatting data according to the frontend needs
const updatedAcvData = data.map((item, index, arr) => {
    
    if (index < arr.length - 1) {
        const next = arr[index + 1];
        item.bottomValue = Math.round((next.acv / item.acv) * 100);
        item.rightPercentage = Math.round((wonValue / item.acv) * 100);
    }
    item.acv = Math.round(item.acv);
    item.percentage = item.bottomValue/100;
    
    return {
        label: item.label,
        middleValue: item.acv,
        bottomValue: item.bottomValue,
        rightPercentage: item.rightPercentage,
        percentage: item.percentage
    };    
});

updatedAcvData[data.length-1].rightPercentage = 100;

// adding the percentage of the green part in the svg for the all the objects
updatedAcvData[0].percentage = 1;
for(var i=1;i<updatedAcvData.length;i++){
    const prev = updatedAcvData[i-1].percentage;
    updatedAcvData[i].percentage = prev * (updatedAcvData[i-1].bottomValue/100);
}


export default updatedAcvData;