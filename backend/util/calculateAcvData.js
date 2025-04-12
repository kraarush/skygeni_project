import data from "../data.js";

const wonValue = data[data.length-1].acv;

const updatedAcvData = data.map((item, index, arr) => {
    const ceilItem = {
        ...item,
        acv: Math.ceil(item.acv),
    };


    if (index < arr.length - 1) {
        const next = arr[index + 1];
        ceilItem.bottomValue = Math.round((next.acv / item.acv) * 100);
        ceilItem.rightPercentage = Math.round((wonValue / item.acv) * 100);
    }

    return ceilItem;    
});

updatedAcvData[data.length-1].rightPercentage = 100;
export default updatedAcvData;
