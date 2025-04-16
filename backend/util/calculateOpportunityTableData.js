import updatedOpportunityCountData from "./calculateOpportunityData.js";

export let totalOpportunityValue = 0;

// formatting table data according to the frontend needs
export const opportunityTableData = updatedOpportunityCountData.map((item) => {
    const came = item.middleValue ;
    const bottom = item.bottomValue;
    const moved = item.label === "Won" ? "-" : Math.round(came * (bottom / 100));
    const lost = item.label === "Won" ? "-" : came - moved;
    const winRate = item.rightPercentage;
    if (typeof lost === "number") totalOpportunityValue += lost;

    return {
        stage: item.label,
        came,
        lost,
        moved,
        winRate,
    };
});

