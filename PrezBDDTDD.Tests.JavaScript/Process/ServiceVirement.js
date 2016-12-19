function ServiceVirement() {
    //Todo : demander la limite de plafond par défaut
    this.Plafond = 1000;
};

ServiceVirement.prototype = {
    EffectuerVirement: function(/*int*/ montant, /*Compte*/ compteDebiteur, /*Compte*/ compteCrediteur) {
        if (montant > compteDebiteur.Solde)
        {
            return RetourVirement.SoldeDepasse;
        }

        if (montant > this.Plafond)
        {
            return RetourVirement.PlafondDepasse;
        }

        compteDebiteur.Solde -= montant;
        compteCrediteur.Solde += montant;
        return RetourVirement.Ok;
    }
};
