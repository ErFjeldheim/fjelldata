declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Dette forteller TypeScript at CSS-moduler er gyldige
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Dette forteller VS Code at Tailwind direktiver er gyldige
declare namespace CSS {
  interface AtRule {
    tailwind: any;
    apply: any;
    layer: any;
  }
}
