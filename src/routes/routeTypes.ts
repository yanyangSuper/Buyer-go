// 自动生成或手写路由路径常量
export const ROUTES = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOT_FOUND: '*',
} as const;

// 可选：生成类型
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
