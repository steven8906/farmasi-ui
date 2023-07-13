export function currencyFormatter(value: number): string {
    return new Intl.NumberFormat("es-PY", {style: "currency", currency: "PYG"}).format(value);
}

export function validateAlphabetic(text: string):string {
    return text.replace(/[a-zA-Z]+/g, '');
}