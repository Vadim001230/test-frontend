export default function formatValue(value: number): string {
  if (value < 10) {
    return `0${value}`;
  }
  return String(value);
}
