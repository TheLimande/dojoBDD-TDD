[<TechTalk.SpecFlow.Binding>]
module GestionDesVirementsSteps

open TechTalk.SpecFlow

// For additional details on SpecFlow step definitions see http://go.specflow.org/doc-stepdef

let [<Given>] ``j'ai un compte cheque avec un solde de (.*)€``(solde:int) = 
    ScenarioContext.Current.Pending() //TODO: implement arrange (precondition) logic
let [<Given>] ``j'ai un compte épargne avec un solde de (.*)€``(solde:int) = 
    ScenarioContext.Current.Pending() //TODO: implement arrange (precondition) logic
let [<Given>] ``la limite de virement est (.*)``(limite:int) =
    ScenarioContext.Current.Pending() //TODO: implement arrange (precondition) logic

let [<When>] ``j'effectue un virement de (.*)€ du compte cheque vers le compte épargne``(montant:int) = 
    ScenarioContext.Current.Pending() //TODO: implement act (action) logic

let [<Then>] ``le solde du compte cheque est (.*)€``(solde:int) = 
    ScenarioContext.Current.Pending() //TODO: implement assert (verification) logic
let [<Then>] ``le solde du compte épargne est (.*)€``(solde:int) = 
    ScenarioContext.Current.Pending() //TODO: implement assert (verification) logic
let [<Then>] ``le virement est confirmé``() = 
    ScenarioContext.Current.Pending() //TODO: implement assert (verification) logic
let [<Then>] ``le virement est refusé pour motif hors provision``() = 
    ScenarioContext.Current.Pending() //TODO: implement assert (verification) logic
let [<Then>] ``le virement est refusé pour motif plafond dépassé``() = 
    ScenarioContext.Current.Pending() //TODO: implement assert (verification) logic
