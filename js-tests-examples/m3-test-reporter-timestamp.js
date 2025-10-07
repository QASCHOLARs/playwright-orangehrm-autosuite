//const timestampISO = new Date().toISOString().replace(/[:.]/g, '-');
const timestampLocal = new Date().toLocaleString().replace(/[ :,/]/g, '-') .replace(/-+/g, '-');
console.log('Formatted Local Timestamp:', timestampLocal);

