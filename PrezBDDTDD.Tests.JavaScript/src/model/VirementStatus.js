(function(global){
    'use strict';
    var VirementStatus = {};
    VirementStatus[VirementStatus["OK"] = 0] = "OK";
    VirementStatus[VirementStatus["SOLDE_DEPASSE"] = 1] = "SOLDE_DEPASSE";
    VirementStatus[VirementStatus["PLAFOND_DEPASSE"] = 2] = "PLAFOND_DEPASSE";

    global.VirementStatus = VirementStatus;

})(this);