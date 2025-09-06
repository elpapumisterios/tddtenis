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
test("Marcador 30 - love",()=>{
    const tennisScorer = new TennisScorer();
    tennisScorer.playerA();
    tennisScorer.playerA();
    expect(tennisScorer.obtenerPuntuacion()).toBe("30 - love");
});
test("Marcador 30 - 15",()=>{
    const tennisScorer = new TennisScorer();
    tennisScorer.playerA();
    tennisScorer.playerA();
    tennisScorer.playerA();
    tennisScorer.playerB();
    expect(tennisScorer.obtenerPuntuacion()).toBe("30 - 15");
});
test("Marcador 15 - 15",()=>{
    const tennisScorer = new TennisScorer();
    tennisScorer.playerA();
    tennisScorer.playerB();
    expect(tennisScorer.obtenerPuntuacion()).toBe("15 - 15");
});
test("Marcador 30 - 30",()=>{
    const tennisScorer = new TennisScorer();
    tennisScorer.playerA();
    tennisScorer.playerB();
    tennisScorer.playerB();
    expect(tennisScorer.obtenerPuntuacion()).toBe("15 - 30");
});