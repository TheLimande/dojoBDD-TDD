(function(){
    'use strict';
    describe("Service virement", function(){
        it("doit débiter un montant du compte A lors du virement", function(){
            var A = new Compte();
            var B = new Compte();
            A.solde = 20;
            var service = new ServiceVirement();
            var retour = service.effectuerVirement(5, A, B);
            expect(15).toBe(A.solde);
            expect(VirementStatus.OK).toBe(retour);
        });

        it("doit créditer un montant du compte B lors du virement", function(){
            var A = new Compte();
            var B = new Compte();
            A.solde = 20;
            B.solde = 5;
            var service = new ServiceVirement();
            var retour = service.effectuerVirement(5, A, B);
            expect(10).toBe(B.solde);
            expect(VirementStatus.OK).toBe(retour);
        });
        
        it("ne doit pas débiter un montant supérieur au solde du compte A lors du virement", function(){
            var A = new Compte();
            var B = new Compte();
            A.solde = 20;
            B.solde = 5;
            var service = new ServiceVirement();
            var retour = service.effectuerVirement(21, A, B);
            expect(20).toBe(A.solde);
            expect(5).toBe(B.solde);
            expect(VirementStatus.SOLDE_DEPASSE).toBe(retour);
        });

        it("ne doit pas débiter un montant supérieur au plafond lors du virement", function(){
            var A = new Compte();
            var B = new Compte();
            A.solde = 20;
            B.solde = 5;
            var service = new ServiceVirement();
            service.plafond = 2;
            var retour = service.effectuerVirement(3, A, B);
            expect(20).toBe(A.solde);
            expect(5).toBe(B.solde);
            expect(VirementStatus.PLAFOND_DEPASSE).toBe(retour);
        });
    });
})();
