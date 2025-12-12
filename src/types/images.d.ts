// 声明所有图片、字体等静态资源的类型
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

// 如果用到 WebP 等
declare module '*.webp' {
  const value: string;
  export default value;
}
