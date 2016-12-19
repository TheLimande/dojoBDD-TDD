describe("ServiceVirement Devrait",
    function () {

        it("Debiter Un Montant Du Compte A Lors Du Virement",
            function () {
                //Arrange
                var A = new Compte();
                A.Solde = 20;
                var B = new Compte();
                var srv = new ServiceVirement();

                //Act
                var retour = srv.EffectuerVirement(5, A, B);
                //Assert
                expect(A.Solde).toBe(15);
                expect(retour).toBe(RetourVirement.Ok);
            });

        it("Crediter Un Montant Du Compte B Lors Du Virement",
            function () {
                //Arrange
                var A = new Compte();
                A.Solde = 20;
                var B = new Compte();
                B.Solde = 5;
                var srv = new ServiceVirement();

                //Act
                var retour = srv.EffectuerVirement(5, A, B);
                //Assert
                expect(B.Solde).toBe(10);
                expect(retour).toBe(RetourVirement.Ok);
            });

        it("Ne Pas Debiter Un Montant Superieur Au Solde Du Compte A Lors Du Virement",
            function () {
                //Arrange
                var A = new Compte();
                A.Solde = 20;
                var B = new Compte();
                B.Solde = 5;
                var srv = new ServiceVirement();

                //Act
                var retour = srv.EffectuerVirement(21, A, B);
                //Assert
                expect(A.Solde).toBe(20);
                expect(B.Solde).toBe(5);
                expect(retour).toBe(RetourVirement.SoldeDepasse);
            });

        it("Ne Pas Debiter Un Montant Superieur Au Plafond Lors Du Virement",
            function () {
                //Arrange
                var A = new Compte();
                A.Solde = 20;
                var B = new Compte();
                B.Solde = 5;
                var srv = new ServiceVirement();
                srv.Plafond = 2;

                //Act
                var retour = srv.EffectuerVirement(5, A, B);
                //Assert
                expect(A.Solde).toBe(20);
                expect(B.Solde).toBe(5);
                expect(retour).toBe(RetourVirement.PlafondDepasse);
            });
    });
