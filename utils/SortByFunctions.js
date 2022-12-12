 const titleASC = (list) => { //alphabeticalSort ascend
    let alphaASC = [...list];
      alphaASC.sort((a,b)=>{
        let x = a.Title.toUpperCase(),
        y = b.Title.toUpperCase();
        return x === y ? 0 : x > y ? 1 : -1;
      })
    return alphaASC
  }
    
  const titleDES = (list) => { //alphabeticalSort descend
    let alphaDES = [...list]; 
      alphaDES.sort((a,b)=>{   
        let x = a.Title.toUpperCase(), 
        y = b.Title.toUpperCase();
        return x === y ? 0 : x > y ? -1 : 1;
      }) 
    return alphaDES;
  }

  const ratingDES = (list) => { //filter button for rating for descend
    let sortedDES = [...list];
      sortedDES.sort((a,b)=>{
        if(a.Rating > b.Rating) return -1;    
        if(a.Rating < b.Rating) return 1;   
      })
      return sortedDES
  }

  const ratingASC = (list) => { //filter button for rating ascend
    let sortedASC = [...list];
      sortedASC.sort((a,b)=>{
        if(a.Rating < b.Rating) return -1;
        if(a.Rating > b.Rating) return 1;
        return 0;
      })
      return sortedASC
  }

  const handleGenreSort = (list, value) => {
    let genreSort = [...list];
    let tempArray = []
    
    for(let i = 0; i < genreSort.length; i++) {
        const Genre = [] = genreSort[i].Genre   
          if(Genre.includes(value)) {
            tempArray.push(genreSort[i]);
          }
    }
    
    if(tempArray.length > 0) {
      return tempArray
    } else {
      return genreSort
    }
  }

  export {
    titleASC,
    titleDES,
    ratingASC,
    ratingDES,
    handleGenreSort
  }