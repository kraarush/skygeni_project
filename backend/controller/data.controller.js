import updatedOpportunityCountData from "../util/calculateOpportunityData.js";
import updatedAcvData from "../util/calculateAcvData.js"

export const home = async (req,res) => {
    try {
        console.log('i am called');
        res.status(200).json({
            opportunityData: updatedOpportunityCountData,
            acvData: updatedAcvData,
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