// src/lib/apiClient.ts
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// ✅ 新增一个泛型参数 D（代表 Data / Body）
export async function apiClient<T, D = undefined>(
  url: string,
  method: HttpMethod = 'GET',
  data?: D // 👈 不再是 any！
): Promise<T> {
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer ${getToken()}`
    },
    ...(data !== undefined && { body: JSON.stringify(data) }), // 注意：用 !== undefined 而非 truthy 判断
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    // 可选：解析错误响应体
    let errorMessage = `HTTP error! status: ${response.status}`;
    try {
      const errorData = await response.json();
      errorMessage += ` - ${JSON.stringify(errorData)}`;
    } catch (e) {
      console.error('Error parsing error response:', e);
      // 忽略 JSON 解析失败
    }
    throw new Error(errorMessage);
  }

  return response.json() as Promise<T>;
}
