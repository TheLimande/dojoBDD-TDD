using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PrezBDDTDD.Tests.Model;
using PrezBDDTDD.Tests.Process;

namespace PrezBDDTDD.Tests.UnitTests
{
    [TestClass]
    public class ServiceVirementDevrait
    {
        [TestMethod]
        public void DebiterUnMontantDuCompteALorsDuVirement()
        {
            //Arrange
            Compte A = new Compte();
            A.Solde = 20;
            Compte B = new Compte();
            ServiceVirement srv = new ServiceVirement();

            //Act
            var retour = srv.EffectuerVirement(5, A, B);
            //Assert
            Assert.AreEqual(15, A.Solde);
            Assert.AreEqual(RetourVirement.Ok, retour);
        }

        [TestMethod]
        public void CrediterUnMontantDuCompteBLorsDuVirement()
        {
            //Arrange
            Compte A = new Compte();
            A.Solde = 20;
            Compte B = new Compte();
            B.Solde = 5;
            ServiceVirement srv = new ServiceVirement();

            //Act
            var retour = srv.EffectuerVirement(5, A, B);
            //Assert
            Assert.AreEqual(10, B.Solde);
            Assert.AreEqual(RetourVirement.Ok, retour);
        }

        [TestMethod]
        public void NePasDebiterUnMontantSuperieurAuSoldeDuCompteALorsDuVirement()
        {
            //Arrange
            Compte A = new Compte();
            A.Solde = 20;
            Compte B = new Compte();
            B.Solde = 5;
            ServiceVirement srv = new ServiceVirement();

            //Act
            var retour = srv.EffectuerVirement(21, A, B);
            //Assert
            Assert.AreEqual(20, A.Solde);
            Assert.AreEqual(5, B.Solde);
            Assert.AreEqual(RetourVirement.SoldeDepasse, retour);
        }

        [TestMethod]
        public void NePasDebiterUnMontantSuperieurAuPlafondLorsDuVirement()
        {
            //Arrange
            Compte A = new Compte();
            A.Solde = 20;
            Compte B = new Compte();
            B.Solde = 5;
            ServiceVirement srv = new ServiceVirement();
            srv.Plafond = 2;

            //Act
            var retour = srv.EffectuerVirement(5, A, B);
            //Assert
            Assert.AreEqual(20, A.Solde);
            Assert.AreEqual(5, B.Solde);
            Assert.AreEqual(RetourVirement.PlafondDepasse, retour);
        }


    }
}
