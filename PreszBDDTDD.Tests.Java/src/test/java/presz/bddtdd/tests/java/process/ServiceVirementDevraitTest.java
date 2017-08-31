package presz.bddtdd.tests.java.process;

import org.junit.Test;
import org.junit.Assert;
import presz.bddtdd.tests.java.model.Compte;

public class ServiceVirementDevraitTest {

    @Test
    public void DebiterUnMonantDuCompteALorsDuVirement() throws Exception {
        //Arrange
        Compte a = new Compte();
        a.setSolde(20);
        Compte b = new Compte();
        ServiceVirement srv = new ServiceVirement();

        //Act
        RetourVirement retour = srv.effectuerVirement(5, a, b);

        //Assert
        Assert.assertEquals(15, a.getSolde());
        Assert.assertEquals(RetourVirement.Ok, retour);
    }

    @Test
    public void CrediterUnMontantDuCompteBLorsDuVirement() throws Exception {
        //Arrange
        Compte a = new Compte();
        a.setSolde(20);
        Compte b = new Compte();
        b.setSolde(5);
        ServiceVirement srv = new ServiceVirement();

        //Act
        RetourVirement retour = srv.effectuerVirement(5, a, b);

        //Assert
        Assert.assertEquals(10, b.getSolde());
        Assert.assertEquals(RetourVirement.Ok, retour);
    }

    @Test
    public void NePasDebiterUnMontantSuperieurAuSoldeDuCompteALorsDuVirement() throws Exception {
        //Arrange
        Compte a = new Compte();
        a.setSolde(20);
        Compte b = new Compte();
        b.setSolde(5);
        ServiceVirement srv = new ServiceVirement();

        //Act
        RetourVirement retour = srv.effectuerVirement(21, a, b);

        //Assert
        Assert.assertEquals(20, a.getSolde());
        Assert.assertEquals(5, b.getSolde());
        Assert.assertEquals(RetourVirement.SoldeDepasse, retour);
    }

    @Test
    public void NePasDebiterUnMontantSuperieurAuPlafondLorsDuVirement() throws Exception {
        //Arrange
        Compte a = new Compte();
        a.setSolde(20);
        Compte b = new Compte();
        b.setSolde(5);
        ServiceVirement srv = new ServiceVirement();
        srv.setPlafond(2);

        //Act
        RetourVirement retour = srv.effectuerVirement(3, a, b);

        //Assert
        Assert.assertEquals(20, a.getSolde());
        Assert.assertEquals(5, b.getSolde());
        Assert.assertEquals(RetourVirement.PlafondDepasse, retour);
    }
}
