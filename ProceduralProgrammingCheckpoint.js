const V1 = [-6, 3, -11];
const V2 = [12, 0, 4];
let result = 0;
const dotProduct = (V1, V2) => {
    for (let i = 0; i < 3; i++) {
        result += V1[i]*V2[i]
        
    }
    return result
}
console.log(dotProduct(V1, V2));

const vectors = [[7, 1, 1],[6, 0, 2], [5, 7, 0], [3, 1, 2], [2, 3 ,8], [0, 0, 0]]
const orthogonalVectors = (vectors) => {
    for(let i = 0; i < vectors.length; i++){
        for(let j = i + 1; j < vectors.length; j++){
          if(dotProduct(vectors[i], vectors[j]) === 0){
              console.log(`${vectors[i]} and ${vectors[j]} are orthogonal `)
          }
        }
      }
    
}
console.log(orthogonalVectors(vectors));

