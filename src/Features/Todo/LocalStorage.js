
// get data from local storage 
export const loadData = () =>{
    console.log("function load state called")
    try {
         const getData = localStorage.getItem("todos");
        //  console.log(JSON.parse(getData))
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
        console.log("data set ")
    } catch (error) {
        console.log("could not save the state");
    }
}