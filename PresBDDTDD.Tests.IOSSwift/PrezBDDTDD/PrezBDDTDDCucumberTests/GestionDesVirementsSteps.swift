//
//  GestionDesVirementsSteps.swift
//  PrezBDDTDD
//
//  Created by Yann Breleur on 14/02/2017.
//  Copyright © 2017 AXA. All rights reserved.
//

import Foundation
import XCTest
import Cucumberish

class  GestionDesVirementsSteps: NSObject {
    
    func  GestionDesVirementsSteps() {
        
        MatchAll("j'ai un compte cheque avec un solde de (.*)€") { (args, userInfo) -> Void in
//          Context.CompteCheque.Solde = solde;
            if let solde:String = args?[0] {
               print("\(solde)")
            }
            
        }
        
        MatchAll("j'ai un compte épargne avec un solde de (.*)€"){ (args, userInfo) -> Void in
//            Context.CompteEpargne.Solde = solde;
            if let solde:String = args?[0] {
                print("\(solde)")
            }
        }
        
        MatchAll("la limite de virement est (.*)€"){ (args, userInfo) -> Void in
//           Context.srvVirement.Plafond = limite;
            if let solde:String = args?[0] {
                print("\(solde)")
            }
        }
        
    }
}
