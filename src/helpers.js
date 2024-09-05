

export const moneyFormat = amount =>{
    return amount.toLocaleString('es-ES', {style: 'currency', currency: 'USD'});

}