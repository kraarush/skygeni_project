import updatedAcvData from "./calculateAcvData.js";


export let totalAcvValue = 0;

// setting the acv table data
export const acvTableData = updatedAcvData.map((item, index) => {
    const came = item.acv || 0;
    const nextItem = updatedAcvData[index + 1];
    const moved = item.label === "Won" || !nextItem ? "-" : (nextItem.acv) || 0;
    const lost = item.label === "Won" ? "-" : (came - moved);
    const winRate = `${item.rightPercentage}%`;
    if (typeof lost === "number") totalAcvValue += lost;
    
    return {
        stage: item.label,
        came,
        lost,
        moved,
        winRate,
    };
});