
// get data from local storage 
export const loadData = () =>{
    
    try {
         const getData = localStorage.getItem("todos"); 
         return getData? JSON.parse(getData) : undefined;
    } catch (error) {
        console.log("could not load the state");
        return undefined;
    }
}
export const saveData = (state) =>{
    try {
        const saveData = JSON.stringify(state)
        localStorage.setItem("todos",saveData);
      
    } catch (error) {
        console.log("could not save the state");
    }
}