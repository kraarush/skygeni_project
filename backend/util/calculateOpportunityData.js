import data from "../data.js";

const wonValue = data[data.length-1].count;

const updatedOpportunityCountData = data.map((item, index, arr) => {
    const ceilItem = {
        ...item,
        acv: Math.ceil(item.acv),
    };


    if (index < arr.length - 1) {
        const next = arr[index + 1];
        ceilItem.bottomValue = Math.round((next.count / item.count) * 100);
        ceilItem.rightPercentage = Math.round((wonValue / item.count) * 100);
    }

    return ceilItem;
});

updatedOpportunityCountData[5].rightPercentage = 100;
export default updatedOpportunityCountData;
