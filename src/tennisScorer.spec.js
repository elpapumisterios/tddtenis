import TennisScorer from "./tennisScorer";    

test("Marcador inicial  'love-love'",()=>{
    const tennisScorer = new TennisScorer();
    expect(tennisScorer.obtenerPuntuacion()).toBe("love - love");
});
test("Marcador 15 - love",()=>{
    const tennisScorer = new TennisScorer();
    tennisScorer.playerA();
    expect(tennisScorer.obtenerPuntuacion()).toBe("15 - love");
});