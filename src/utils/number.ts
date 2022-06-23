const getRandomInteger = (min: number, max: number): number => {
    return Math.round(Math.random() * (max - min) + min);
}

const formatPercentage = (value: number): string => {
    const formatter = Intl.NumberFormat('it-IT', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
    const formattedNumber = formatter.format(value / 100);
    if (value > 0) return `+${formattedNumber}`;
    return formattedNumber;
}

const formatCurrency = (value: number, locale: string = 'it-IT', currency: string = 'EUR') => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(value)
}

const padNumber = (value: number, size = 2): string => {
    let numString = value.toString();
    while (numString.length < size) numString = '0' + value;
    return numString;
}

export {getRandomInteger, formatPercentage, formatCurrency, padNumber}