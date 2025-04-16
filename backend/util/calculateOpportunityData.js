import data from "../data.js";

const wonValue = data[data.length-1].count;

// formatting data according to the frontend needs
let updatedOpportunityCountData = data.map((item, index, arr) => {
    if (index < arr.length - 1) {
        const next = arr[index + 1];
        item.bottomValue = Math.round((next.count / item.count) * 100);
        item.rightPercentage = Math.round((wonValue / item.count) * 100);
    }
    item.count = Math.round(item.count);
    item.percentage = item.bottomValue/100;
    
    return {
        label: item.label,
        middleValue: item.count,
        bottomValue: item.bottomValue,
        rightPercentage: item.rightPercentage,
        percentage: item.percentage
    };  
});

updatedOpportunityCountData[data.length-1].rightPercentage = 100;

// adding the percentage of the green part in the svg for the all the objects
updatedOpportunityCountData[0].percentage = 1;
for(var i=1;i<updatedOpportunityCountData.length;i++){
    const prev = updatedOpportunityCountData[i-1].percentage;
    updatedOpportunityCountData[i].percentage = prev * (updatedOpportunityCountData[i-1].bottomValue/100);
}

export default updatedOpportunityCountData;