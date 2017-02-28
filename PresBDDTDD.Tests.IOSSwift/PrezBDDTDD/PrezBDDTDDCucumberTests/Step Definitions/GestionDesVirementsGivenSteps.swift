//
//  GestionDesVirementsGivenSteps.swift
//  PrezBDDTDD
//
//  Created by Yann Breleur on 14/02/2017.
//  Copyright © 2017 AXA. All rights reserved.
//

import Foundation
import XCTest
import Cucumberish

class GestionDesVirementsGivenSteps: NSObject {
    
    var context:ContextGestionVirement
    
    init(_ context: ContextGestionVirement) {
        self.context = context
    }
    
    func GestionDesVirementsGivenSteps() {
        
        Given("compte cheque avec un solde de ([0-9]*)") { (args, userInfo) -> Void in
            let solde = Int((args?[0]) ?? "0") ?? 0
            self.context.compteCheque.solde = solde
        }
        
        Given("j'ai un compte épargne avec un solde de ([0-9]*)€"){ (args, userInfo) -> Void in
            let solde = Int((args?[0]) ?? "0") ?? 0
            self.context.compteEpargne.solde = solde
        }
        
        Given("la limite de virement est ([0-9]*)€"){ (args, userInfo) -> Void in
            let limiteVirement = Int((args?[0]) ?? "0") ?? 0
            self.context.limiteVirement = limiteVirement
        }
        
    }
}
