export function currencyFormatter(value: number): string {
    return new Intl.NumberFormat("es-PY", {style: "currency", currency: "PYG"}).format(value);
}