export const svgDroplet = (size: number) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="${size}" height="${size}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D0F2FF"/>
      <stop offset="20%" stop-color="#D5F3FF"/>
      <stop offset="100%" stop-color="#85BCF1"/>
    </linearGradient>
  </defs>
  <path d="M12 2C10.2 6 8 8 8 12a4 4 0 0 0 8 0c0-4-2.2-6-4-10z" fill="url(#grad)"/>
</svg>
`;
