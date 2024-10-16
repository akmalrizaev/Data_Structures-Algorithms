function addTo80(n) {
    return n + 80;
  }
  
  addTo80(5)
  
  function memoizeAddTo80() {
      let cache = {};
      return function(n) {

          if (n in cache) {
            return cache[n];
          } else {
            console.log('long time');
            const answer = n + 80;
            cache[n] = answer;
            return answer;
      }
    }
  }

  const memoized = memoizeAddTo80();

  console.log('1', memoized(5));
  console.log('2',memoized(5));