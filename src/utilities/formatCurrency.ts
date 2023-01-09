const CURRENVY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'USD', style: 'currency'})

export function formatCurrency(number : number){
    return CURRENVY_FORMATTER.format(number)
}