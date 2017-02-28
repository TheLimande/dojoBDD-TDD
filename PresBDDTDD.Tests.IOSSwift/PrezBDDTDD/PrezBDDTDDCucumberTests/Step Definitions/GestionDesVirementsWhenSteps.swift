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
    
    func GestionDesVirementsWhenSteps() {
        
        When("j'effectue un virement de ([0-9]*)€ du compte cheque vers le compte epargne") { (args, userInfo) -> Void in
            print("virement de 100€ vers compte épargne")
        }


    }
}
