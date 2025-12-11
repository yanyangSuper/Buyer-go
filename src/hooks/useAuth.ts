// src/hooks/useAuth.ts
import { useState } from 'react';

// 👇 提取初始化逻辑为函数
const getInitialAuthState = () => {
  const token = localStorage.getItem('auth_token');
  return !!token;
};

export const useAuth = () => {
  // ✅ 直接在 useState 中初始化，避免 Effect
  const [isAuthenticated, setIsAuthenticated] = useState(getInitialAuthState);
  const [isLoading] = useState(false); // 注意：现在初始就是 false

  const login = (token: string) => {
    localStorage.setItem('auth_token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, logout };
};
