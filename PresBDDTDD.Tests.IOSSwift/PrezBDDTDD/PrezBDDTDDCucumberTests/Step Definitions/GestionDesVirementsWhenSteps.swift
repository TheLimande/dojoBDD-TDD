//
//  GestionDesVirementsWhenSteps.swift
//  PrezBDDTDD
//
//  Created by Yann Breleur on 14/02/2017.
//  Copyright © 2017 AXA. All rights reserved.
//

import Foundation
import XCTest
import Cucumberish

class GestionDesVirementsWhenSteps: NSObject {
    
    var context:ContextGestionVirement
    
    init(_ context: ContextGestionVirement) {
        self.context = context
    }
    
    func GestionDesVirementsWhenSteps() {
        
        When("j'effectue un virement de ([0-9]*)€ du compte cheque vers le compte epargne") { (args, userInfo) -> Void in
            let montantVirement = Int((args?[0]) ?? "0") ?? 0
            let serviceVirement = ServiceVirement(self.context.limiteVirement)
            self.context.virementStatus = serviceVirement.effectuerVirement(de: montantVirement,
                                                                      duCompte: self.context.compteCheque,
                                                                      auCompte: self.context.compteEpargne)
        }


    }
}
