//: Playground - noun: a place where people can play

import UIKit

let str = "When j'effectue un virement de 100€ du compte cheque vers le compte epargne"
let pattern  = "j'effectue un virement de ([0-9]*)€ du compte cheque vers le compte epargne"

let regex = try! NSRegularExpression(pattern: pattern, options: [])
let match = regex.matches(in: str, options: [], range: NSRange(location: 0, length: str.characters.count)).first

print(match ?? "aucun resultat")


//var regex = NSRegularExpression(pattern, options:NSRegularExpressionAnchorsMatchLines, error:&error)
//if(error == nil){
//    print(error)
//}
//var searchRange = NSMakeRange(0, str.length())
//var  match = regex.matchesInString.regularExpressionWithPattern(step.text, options:NSMatchingReportCompletion, range:searchRange).firstObject()
        
