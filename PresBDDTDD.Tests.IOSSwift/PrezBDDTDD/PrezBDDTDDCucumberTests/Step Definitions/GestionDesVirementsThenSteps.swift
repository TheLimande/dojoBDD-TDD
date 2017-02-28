//
//  GestionDesVirementsThenSteps.swift
//  PrezBDDTDD
//
//  Created by Yann Breleur on 14/02/2017.
//  Copyright © 2017 AXA. All rights reserved.
//

import Foundation
import XCTest
import Cucumberish

class GestionDesVirementsThenSteps: NSObject {
    
    var context:ContextGestionVirement
    
    init(_ context: ContextGestionVirement) {
        self.context = context
    }
    
    
    func GestionDesVirementsThenSteps() {
        
        Then("le solde du compte cheque est ([0-9]*)") { (args, userInfo) -> Void in
            let soldeCompteObtenu = self.context.compteCheque.solde
            let soldeCompteVoulu = Int((args?[0]) ?? "0") ?? 0
            let messageErreur = "Le solde du compte cheque devrait être :\(soldeCompteVoulu)€ au lieu de : \(soldeCompteObtenu)€"
            CCISAssert(soldeCompteVoulu == soldeCompteVoulu, messageErreur)
        }
        
        Then("le solde du compte épargne est ([0-9]*)") { (args, userInfo) -> Void in
            let soldeCompteObtenu = self.context.compteEpargne.solde
            let soldeCompteVoulu = Int((args?[0]) ?? "0") ?? 0
            let messageErreur = "Le solde du compte épargne devrait être :\(soldeCompteVoulu)€ au lieu de : \(soldeCompteObtenu)€"
            CCISAssert(soldeCompteVoulu == soldeCompteVoulu, messageErreur)
        }
        
        Then("le virement est confirmé"){ (args, userInfo) -> Void in
            let messageErreur = "Le virement devrait être confirmé"
            
            if let statutObtenu = self.context.virementStatus {
                CCISAssert(statutObtenu == VirementStatus.OK, messageErreur)
            } else {
                SThrowCucumberishException(messageErreur)
            }
        }
        
        Then("le virement est refusé pour motif plafond dépassé"){ (args, userInfo) -> Void in
            let messageErreur = "Le virement devrait refusé pour motif : plafond dépassé"
            
            if let statutObtenu = self.context.virementStatus {
                CCISAssert(statutObtenu == VirementStatus.PLAFOND_DEPASSE, messageErreur)
            } else {
                SThrowCucumberishException(messageErreur)
            }
        }
        
        Then("le virement est refusé pour motif hors provision"){ (args, userInfo) -> Void in
            let messageErreur = "Le virement devrait refusé pour motif : hors provision"
            
            if let statutObtenu = self.context.virementStatus {
                CCISAssert(statutObtenu == VirementStatus.SOLDE_DEPASSE, messageErreur)
            } else {
                SThrowCucumberishException(messageErreur)
            }
        }

    }
}
