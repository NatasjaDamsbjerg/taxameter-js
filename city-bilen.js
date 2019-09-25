/*Her laves det store regnestykke for prisen så, med de priser der 
passer til bilen.*/ 
class CitybilPriceStrategy {
    beregnPris(turTidMinutter, turAfstand) {
            return (4.5 * (Math.floor(turAfstand)+1) + (7 * turTidMinutter) + 75);
    }
}
start(new Taxameter(clock, new CitybilPriceStrategy()));