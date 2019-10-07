/*Her laves det store regnestykke for prisen så, med de priser der 
passer til bilen.*/ 
class CitybilPriceStrategy {
    beregnPris(turTidMinutter, turAfstand) {
            var price = (4.5 * (Math.floor(turAfstand)+1) + (7 * turTidMinutter));
            if (price < 75){
                return 75;
            }else{
                return price;
            }
    }
}
class CityBilDecorator {
    constructor (taxameter) {
        this.taxameter = taxameter;
    }

    getStartetTidspunkt() {
        return this.taxameter.getStartetTidspunkt();
    }

    get afstand() {
        return this.taxameter.afstand;
    }

    startTur() {
        return this.taxameter.startTur();
    }

    get minimumAfstandTilbage() {
        return 2 - this.afstand;
    }

    slutTur() {
        if (this.afstand < 2) {
            alert(`Du har ikke hørt langt nok, du mangler at køre ${this.minimumAfstandTilbage} km`);
        }else{
            return this.taxameter.slutTur();
        }
    }

    koer(delta_afst) {
        return this.taxameter.koer(delta_afst);
    }

    beregnPris() {
        return this.taxameter.beregnPris();
    }
}
const taxameter = new Taxameter(clock, new CitybilPriceStrategy())
const decoratedTaxameter3 = new CityBilDecorator(taxameter);
start(decoratedTaxameter3);