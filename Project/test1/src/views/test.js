
function Sort(numere) {
	let nr_sort= [];
  let minimum
  let position ;
  while(numere.length > 0 ) {
  	console.log("while....")
  	for(i = 0; i < numere.length; i++) {
      if(i===0) {
        minimum = numere[i]
      } else {
        let current_value = numere[i] ;
        if( current_value < minimum) {
          minimum = current_value;
          position = i ;
        }
      }
  	}
    nr_sort.push(minimum)
  	numere.splice(position,1)
  }
  
  console.log("=======")
  console.log(nr_sort)
	return nr_sort;
}

Sort(numere)