export default function response(code: number, message: string, data?: any): object {
  return {
    status: code,
    data: data !== undefined ? data : null, // Set data to null if undefined
    message: message,
  };
}
