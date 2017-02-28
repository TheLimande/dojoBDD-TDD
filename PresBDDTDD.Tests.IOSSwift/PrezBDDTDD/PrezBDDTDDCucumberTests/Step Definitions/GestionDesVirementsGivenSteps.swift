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
    
    
    func GestionDesVirementsGivenSteps() {
        
        print("blabla")
        
        Given("compte cheque avec un solde de ([0-9]*)") { (args, userInfo) -> Void in
            let solde = args?[0] ?? ""
            print("cheque:\(solde)")
        }
        
        Given("j'ai un compte épargne avec un solde de ([0-9]*)€"){ (args, userInfo) -> Void in
            let solde = args?[0] ?? ""
            print("epargne:\(solde)")
        }
        
        Given("la limite de virement est ([0-9]*)€"){ (args, userInfo) -> Void in
            let solde = args?[0] ?? ""
            print("limite virement :\(solde)")
        }

        
        

        
        
    }
}
