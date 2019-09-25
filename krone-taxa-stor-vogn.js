/*Her laves det store regnestykke for prisen så, med de priser der 
passer til bilen.*/ 
class StorVognPriceStrategy {
    beregnPris(turTidMinutter, turAfstand) {
            return (12 * (turAfstand)) + (6.67 * turTidMinutter) + 69;
    }
}

start(new Taxameter(clock, new StorVognPriceStrategy()));