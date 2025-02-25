export const removeWidows = (text) => {
    return text.replace(/\b(\w)\b\s/g, '$1\u00A0');
}