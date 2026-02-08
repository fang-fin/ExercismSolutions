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
  // 1. 获取第一个颜色的值（作为十位数）
  const firstValue = COLORS.indexOf(colors[0]);
  
  // 2. 获取第二个颜色的值（作为个位数）
  const secondValue = COLORS.indexOf(colors[1]);

  // 3. 组合并返回。计算公式：十位 * 10 + 个位
  return firstValue * 10 + secondValue;
}