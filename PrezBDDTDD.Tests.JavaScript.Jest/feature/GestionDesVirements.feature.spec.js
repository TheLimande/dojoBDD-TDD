import { defineFeature, loadFeature } from 'jest-cucumber';

import Compte from '../src/model/Compte';
import ServiceVirement from '../src/service/ServiceVersement';
import VIREMENT_STATUS from '../src/model/VirementStatus';

const feature = loadFeature('./feature/GestionDesVirements.feature');

defineFeature(feature, test => {

    let serviceVirement;
    let compteCheque;
    let compteEpargne;
    let statutVirement;

    const givenJaiUnCompteChequeAvecUnSoldeDeX = given => {
        given(/j'ai un compte cheque avec un solde de (\d+)€/, function(solde) {
            compteCheque.solde = parseInt(solde);
        });
	};

    const givenJaiUnCompteEpargneAvecUnSoldeDeX = given => {
        given(/j'ai un compte épargne avec un solde de (\d+)€/, function(solde) {
            compteEpargne.solde = parseInt(solde);
        });
	};

    const givenLaLimiteDuVirementEstDeX = given => {
        given(/la limite de virement est (\d+)€/, function(limite) {
            serviceVirement.plafond = parseInt(limite);
        });
	};

    const whenJeffectueUnVirementDeXDuCompteChequeVersLeCompteEpargne = when => {
        when(/j'effectue un virement de (\d+)€ du compte cheque vers le compte épargne/, function(versement) {
            statutVirement = serviceVirement.effectuerVirement(parseInt(versement), compteCheque, compteEpargne);
        });
	};

    const thenLeSoldeDuCompteChequeEstDeX = then => {
        then(/le solde du compte cheque est (\d+)€/, function(nouveauSolde) {
            expect(compteCheque.solde).toBe(parseInt(nouveauSolde));
        });
	};

    const thenLeSoldeDuCompteEpargneEstDeX = then => {
        then(/le solde du compte épargne est (\d+)€/, function(nouveauSolde) {
            expect(compteEpargne.solde).toBe(parseInt(nouveauSolde));
        });
	};

    const thenLeVirementEstConfirme = then => {
        then(/le virement est confirmé/, function() {
            expect(statutVirement).toBe(VIREMENT_STATUS.OK);
        });
	};

    const thenLeVirementEstRefusePourMotifHorsProvision = then => {
        then(/le virement est refusé pour motif hors provision/, function() {
            expect(statutVirement).toBe(VIREMENT_STATUS.SOLDE_INSUFISANT);
        });
	};

    const thenLeVirementEstRefusePourMotifPlafondDepasse = then => {
        then(/le virement est refusé pour motif plafond dépassé/, function() {
            expect(statutVirement).toBe(VIREMENT_STATUS.PLAFOND_DEPASSE);
        });
	};

    beforeEach(() => {
        serviceVirement = new ServiceVirement();
        compteCheque = new Compte();
        compteEpargne = new Compte();
    });

    test('Virement simple', ({ given, when, then }) => {
        givenJaiUnCompteChequeAvecUnSoldeDeX(given);

        givenJaiUnCompteEpargneAvecUnSoldeDeX(given);

        whenJeffectueUnVirementDeXDuCompteChequeVersLeCompteEpargne(when);

        thenLeSoldeDuCompteChequeEstDeX(then);

        thenLeSoldeDuCompteEpargneEstDeX(then);

        thenLeVirementEstConfirme(then);
    });

    test('Virement hors provision', ({ given, when, then }) => {
		givenJaiUnCompteChequeAvecUnSoldeDeX(given);

		givenJaiUnCompteEpargneAvecUnSoldeDeX(given);

		whenJeffectueUnVirementDeXDuCompteChequeVersLeCompteEpargne(when);

		thenLeSoldeDuCompteChequeEstDeX(then);

		thenLeSoldeDuCompteEpargneEstDeX(then);

        thenLeVirementEstRefusePourMotifHorsProvision(then);
    });

    test('Virement plafonné', ({ given, when, then }) => {
        givenJaiUnCompteChequeAvecUnSoldeDeX(given);

        givenJaiUnCompteEpargneAvecUnSoldeDeX(given);

        givenLaLimiteDuVirementEstDeX(given);

        whenJeffectueUnVirementDeXDuCompteChequeVersLeCompteEpargne(when);

        thenLeSoldeDuCompteChequeEstDeX(then);

        thenLeSoldeDuCompteEpargneEstDeX(then);

        thenLeVirementEstRefusePourMotifPlafondDepasse(then);
    });
});
