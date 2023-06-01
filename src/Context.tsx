import {createContext, PropsWithChildren, useState} from "react";

export interface IMCCalculated {
    height: string,
    weight: string,
    result: string,
    resultColor: string,
    imc?: string,
    date: Date
}

export interface IMCContext {
    results : IMCCalculated[],
    addNewIMC: (newResult : IMCCalculated) => void
}

type Props  = {

}

export function Context(props : PropsWithChildren<Props>) {

    const [result, setResult] = useState<IMCCalculated[]>([])

    function addNewIMC(newResult : IMCCalculated){
        setResult([...result, newResult])
    }

    return <IMCContext.Provider value={{results: result, addNewIMC: addNewIMC}}>{props.children}</IMCContext.Provider>
}


export const IMCContext = createContext<IMCContext>({} as any);

export default Context;