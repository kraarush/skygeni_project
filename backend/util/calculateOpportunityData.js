import data from "../data.js";

const wonValue = data[data.length-1].count;

let updatedOpportunityCountData = data.map((item, index, arr) => {
    const ceilItem = {
        ...item,
        acv: Math.ceil(item.acv),
    };
    
    ceilItem.middleValue = ceilItem.count;

    if (index < arr.length - 1) {
        const next = arr[index + 1];
        ceilItem.bottomValue = Math.round((next.count / item.count) * 100);
        ceilItem.rightPercentage = Math.round((wonValue / item.count) * 100);
    }

    return ceilItem;
});

updatedOpportunityCountData[5].rightPercentage = 100;
updatedOpportunityCountData[0].percentage = 1;

for(var i=1;i<updatedOpportunityCountData.length;i++){
    const prev = updatedOpportunityCountData[i-1].percentage;
    updatedOpportunityCountData[i].percentage = prev * (updatedOpportunityCountData[i-1].bottomValue/100);
}

export default updatedOpportunityCountData;
