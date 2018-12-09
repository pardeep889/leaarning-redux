export function movieslist(){
    return{
        type: "MOVIES_LIST",
        payload: [
            { id: 1, name: "The persuit of happyness" },
            { id: 2, name: "The da vinci code" },
            { id: 3, name: "Deadpool 2" }
        ]
    }
}