export default function isMobile(value) {
    const mobile = window.matchMedia(`(max-width: ${value})`).matches;
    return mobile;
}
//# sourceMappingURL=isMobile.js.map