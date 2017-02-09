'use strict';

var gherkin = require('node-gherkin-runner');
var ServiceVirement = require('../src/service/ServiceVirement');
var Compte = require('../src/model/Compte');
var VirementStatus = require('../src/model/VirementStatus');
var assert = require('assert');

gherkin.api.featureSteps(/Gestion des Virements/)
    .before(() => {
        this.serviceVirement = new ServiceVirement();
        this.compteCheque = new Compte();
        this.compteEpargne = new Compte();
    })
    .given(/j'ai un compte cheque avec un solde de (\d+)€/, (solde) => {
        this.compteCheque.solde = parseInt(solde);
    })
    .given(/j'ai un compte épargne avec un solde de (\d+)€/, (solde) => {
        this.compteEpargne.solde = parseInt(solde);
    })
    .given(/la limite de virement est (\d+)€/, (limite) => {
        this.serviceVirement.plafond = parseInt(limite);
    })
    .when(/j'effectue un virement de (\d+)€ du compte cheque vers le compte épargne/, (versement) => {
        this.statutVirement = this.serviceVirement.effectuerVirement(parseInt(versement), this.compteCheque, this.compteEpargne);
    })
    .then(/le solde du compte cheque est (\d+)€/, (nouveauSolde) => {
        assert.equal(this.compteCheque.solde, parseInt(nouveauSolde));
    })
    .then(/le solde du compte épargne est (\d+)€/, (nouveauSolde) => {
        assert.equal(this.compteEpargne.solde, parseInt(nouveauSolde));
    })
    .then(/le virement est confirmé/, () => {
        assert.equal(this.statutVirement, VirementStatus.OK);
    })
    .then(/le virement est refusé pour motif hors provision/, () => {
        assert.equal(this.statutVirement, VirementStatus.SOLDE_DEPASSE);
    })
    .then(/le virement est refusé pour motif plafond dépassé/, () => {
        assert.equal(this.statutVirement, VirementStatus.PLAFOND_DEPASSE);
    });
