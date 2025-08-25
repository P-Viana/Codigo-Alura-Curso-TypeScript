import { formatoData } from "../types/formato-data.js";


export function formatarMoeda(valor:number) : string {
    return valor.toLocaleString("pt-br", {currency: "BRL", style:"currency"});
}

export function formatarData(data:Date, formato: formatoData =formatoData.PADRAO) : string {
    if (formato == formatoData.DIA_SEMANA_DIA_MES_ANO) {
       return data.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"}); 
    }
    else if (formato == formatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br",{
            day: "2-digit",
            month: "2-digit"
        });
    }
    else{
        return data.toLocaleDateString("pt-br");
    }
}