export default function isMobile(value: string): boolean {
  const mobile = window.matchMedia(`(max-width: ${value})`).matches
  return mobile;
}