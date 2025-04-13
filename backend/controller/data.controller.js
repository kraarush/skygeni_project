import updatedOpportunityCountData from "../util/calculateOpportunityData.js";
import updatedAcvData from "../util/calculateAcvData.js"
import { acvTableData, totalAcvValue } from "../util/calculateAcvTableData.js";
import { opportunityTableData, totalOpportunityValue } from "../util/calculateOpportunityTableData.js";

export const home = async (req,res) => {
    try {
        res.status(200).json({
            opportunityData: updatedOpportunityCountData,
            acvData: updatedAcvData,
            acvTableData: acvTableData,
            opportunityTableData: opportunityTableData,
            totalAcvValue,
            totalOpportunityValue,
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Interval server error",
            success: false
        });
    }
}