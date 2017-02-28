//
//  ServiceVersement.swift
//  PrezBDDTDD
//
//  Created by Yann Breleur on 28/02/2017.
//  Copyright © 2017 AXA. All rights reserved.
//


class ServiceVirement {
    let plafond:Int?
    
    init(_ plafond:Int?) {
        self.plafond = plafond
    }
    
    func effectuerVirement(de montant: Int, duCompte compteDebiteur: Compte, auCompte compteCrediteur: Compte) -> VirementStatus {
        
        if montant > compteDebiteur.solde {
            return VirementStatus.SOLDE_DEPASSE
        }
        
        if let plafond = plafond,  montant > plafond{
            return VirementStatus.PLAFOND_DEPASSE
        }
        compteDebiteur.solde -= montant
        compteCrediteur.solde += montant
        return VirementStatus.OK
    }
}
