const algorithm = (favourite,series,movies) => {

    const favArray = [...favourite] 
    const seriesArray = [...series]
    const movieArray = [...movies]
    let tempArray = [] // array for cutted favorite genres
    let finalArray = [] // this array contains the final result
    let itemsMap = {}
    let maxValue = 0
    let maxCount = 0 // maximum count
      
        
      
      for(let i = 0; i < favArray.length; i++) { // go trough the list of favorite genres and cut them for better usage e.g "Drama, Action, Crime" => "Drama"
        const Genre = [] = favArray[i].Genre
        let cut = Genre.substring(0, Genre.indexOf(',')) // cut from the , onwards
        let replaced = cut.replace('"', '') //what is left after cutting is ""Drama" so replace the second " with empty space
        tempArray.push(replaced) //push the replaced string to new array
      }
      
      for (let item of tempArray) { //Here we calculate the occurances of each index. e.g "Drama", "Action", "Drama","Adventure","Horror" returns Drama with count of 2
        if (itemsMap[item] == null) {
          itemsMap[item] = 1;
        } else {
          itemsMap[item]++;
        }

        if (itemsMap[item] > maxCount) {
          maxValue = item;
          maxCount = itemsMap[item];
        }
      }

      for(let i = 0; i < seriesArray.length; i++) { // go trough series with the maxValue
        const Genre = [] = seriesArray[i].Genre // get genre from series with index i
        if(Genre.includes(maxValue)) { //does the genre contain the maxValue? if found then it is added it to the finalArray
          finalArray.push(seriesArray[i])
        }   
      }

      for(let i = 0; i < movieArray.length; i++) { // same as above but for movies
        const Genre = [] = movieArray[i].Genre
        if(Genre.includes(maxValue)) {
          finalArray.push(movieArray[i])
        }
      }

      for(let i = 0; i < favArray.length; i++) { // and finaly, Loop trough favorites and compare favorite to finalArray
        const Title = [] = favArray[i].Title
        let index = finalArray.findIndex(p => p.Title === Title) //if finalArray has the same title as favArray title, then delete object with that id
          if(index !== -1) {
            finalArray.splice(index, 1) //deletion
          }
      }

      for(let i = 0; i < finalArray.length; i++) { //scramble array so series dont come before movies. after this there can be s, s, m, s, m. not s, s, s, ,s ,s ... s, m, m, m, m...m
        const randomPosition = Math.floor((finalArray.length - i) * Math.random())
        const randomItem = finalArray.splice(randomPosition, 1)
        finalArray.push(...randomItem)
      }
      
      return finalArray //return array
}

export {
    algorithm
}