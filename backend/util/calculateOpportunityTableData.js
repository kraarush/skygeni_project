import updatedOpportunityCountData from "./calculateOpportunityData.js";

export let totalOpportunityValue = 0;

// setting the table data
export const opportunityTableData = updatedOpportunityCountData.map((item, index, arr) => {
    const came = item.count || 0;
    const bottom = item.bottomValue ?? 0;
    const moved = item.label === "Won" ? "-" : Math.ceil(came * (bottom / 100));
    const lost = item.label === "Won" ? "-" : came - moved;
    const winRate = `${item.rightPercentage}%`;
    if (typeof lost === "number") totalOpportunityValue += lost;

    return {
        stage: item.label,
        came,
        lost,
        moved,
        winRate,
    };
});

