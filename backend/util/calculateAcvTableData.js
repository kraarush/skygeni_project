import updatedAcvData from "./calculateAcvData.js";


export let totalAcvValue = 0;

// formatting table data according to the frontend needs
export const acvTableData = updatedAcvData.map((item, index) => {
    const came = item.middleValue;
    const nextItem = updatedAcvData[index + 1];
    const moved = item.label === "Won" || !nextItem ? "-" : (nextItem.middleValue);
    const lost = item.label === "Won" ? "-" : (came - moved);
    const winRate = item.rightPercentage;
    if (typeof lost === "number") totalAcvValue += lost;
    
    return {
        stage: item.label,
        came,
        lost,
        moved,
        winRate,
    };
});