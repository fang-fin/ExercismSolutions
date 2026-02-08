// 定义颜色列表，顺序必须严格遵守题目给出的数值
const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'
];

/**
 * 将电阻颜色数组转换为对应的两位数值
 * @param colors 包含颜色名称的字符串数组
 * @returns 前两位颜色组成的数字
 */
export function decodedValue(colors: string[]): number {
  
  return  COLORS.indexOf(colors[0])*10 +COLORS.indexOf(colors[1]);;
}