import TennisScorer from "./tennisScorer";    

test("Marcador inicial  'love-love'",()=>{
    const tennisScorer = new TennisScorer();
    expect(tennisScorer.obtenerPuntuacion()).toBe("love - love");
});