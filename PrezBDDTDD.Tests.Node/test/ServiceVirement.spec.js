var ServiceVirement = require('../src/service/ServiceVirement');
var Compte = require('../src/model/Compte');
var VirementStatus = require('../src/model/VirementStatus');
var assert = require('assert');

describe("Service virement", ()=>{
    it("doit débiter un montant du compte A lors du virement", ()=>{
        var A = new Compte();
        var B = new Compte();
        A.solde = 20;
        var service = new ServiceVirement();
        var retour = service.effectuerVirement(5, A, B);
        assert.equal(15, A.solde);
        assert.equal(VirementStatus.OK, retour);
    });

    it("doit créditer un montant du compte B lors du virement", ()=>{
        var A = new Compte();
        var B = new Compte();
        A.solde = 20;
        B.solde = 5;
        var service = new ServiceVirement();
        var retour = service.effectuerVirement(5, A, B);
        assert.equal(10, B.solde);
        assert.equal(VirementStatus.OK, retour);
    });
    
    it("ne doit pas débiter un montant supérieur au solde du compte A lors du virement", ()=>{
        var A = new Compte();
        var B = new Compte();
        A.solde = 20;
        B.solde = 5;
        var service = new ServiceVirement();
        var retour = service.effectuerVirement(21, A, B);
        assert.equal(20, A.solde);
        assert.equal(5, B.solde);
        assert.equal(VirementStatus.SOLDE_DEPASSE, retour);
    });

    
    
    it("ne doit pas débiter un montant supérieur au plafond lors du virement", ()=>{
        var A = new Compte();
        var B = new Compte();
        A.solde = 20;
        B.solde = 5;
        var service = new ServiceVirement();
        service.plafond = 2;
        var retour = service.effectuerVirement(3, A, B);
        assert.equal(20, A.solde);
        assert.equal(5, B.solde);
        assert.equal(VirementStatus.PLAFOND_DEPASSE, retour);
    });

});