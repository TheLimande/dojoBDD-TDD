//
//  ContextGestionVirement.swift
//  PrezBDDTDD
//
//  Created by Yann Breleur on 28/02/2017.
//  Copyright © 2017 AXA. All rights reserved.
//

class ContextGestionVirement {
    var compteCheque:Compte
    var compteEpargne:Compte
    var limiteVirement:Int?
    var virementStatus:VirementStatus?
    
    init() {
        compteCheque = Compte(0)
        compteEpargne = Compte(0)    }
}
