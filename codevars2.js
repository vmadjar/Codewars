function chooseBestSum(t, k, ls){
    if (ls.length < k) return null
    const results = [[]]
    for (const value of ls) {
        const copy = [...results]
        for (const prefix of copy) {
            results.push(prefix.concat(value))
        }
    }
    return results
        .filter((a => a.length && a.length == k ))
        .map(item => item.reduce((a,b) => a + b), 0)
        .filter(item => item <= t)
        .sort((a,b) => b-a)[0] || null
}