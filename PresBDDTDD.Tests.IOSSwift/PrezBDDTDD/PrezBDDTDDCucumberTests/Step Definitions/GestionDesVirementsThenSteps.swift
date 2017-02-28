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
    
    func GestionDesVirementsThenSteps() {
        
        Then("le solde du compte cheque est ([0-9]*)") { (args, userInfo) -> Void in
            let typeCompte = "cheque"
            let soldeCompte = args?[0] ?? ""
            print("le solde du compte de type : \(typeCompte) doit être de: \(soldeCompte)€")
        }
        
        Then("le solde du compte épargne est ([0-9]*)") { (args, userInfo) -> Void in
            let typeCompte = "épargne"
            let soldeCompte = args?[0] ?? ""
            print("le solde du compte de type : \(typeCompte) doit être de: \(soldeCompte)€")
        }
        
        Then("le virement est confirmé"){ (args, userInfo) -> Void in
            print("le virement est confirmé")
        }
        
        Then("le virement est refusé pour motif ([A-Za-z]*)"){ (args, userInfo) -> Void in
            let motif = args?[0] ?? ""
            print("le virement est refusé pour motif :  \(motif)")
        }

    }
}
