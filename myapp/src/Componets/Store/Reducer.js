const count =143;

export default function reducer(state=count,action){
    const {type,payload}=action;
    console.log(payload)
    switch(type){
        case "inc":
            return state+1;
        case "dec":
            return state-1;
            
        default:
            return state
    }
}

