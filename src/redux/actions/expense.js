
import { ADD_EXPENSE } from "../action-type/expense"
import { DELETE_EXPENSE } from "../action-type/expense"
import { SEARCH_EXPENSE} from "../action-type/expense"

export const addExpense=(data)=>{
    console.log(data);
    return{
        type:ADD_EXPENSE,
        data,
    };
};


export const delExpense=(data)=>{
    return{
        type:DELETE_EXPENSE,
        data,
    };
};

export const searchExpense=(query)=>{
    return{
        type:SEARCH_EXPENSE,
        query,
    };
};