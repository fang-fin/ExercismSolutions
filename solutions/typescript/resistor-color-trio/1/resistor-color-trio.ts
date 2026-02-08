let COLOR: string[] = [
  'black', 'brown', 'red', 'orange', 'yellow',
  'green', 'blue', 'violet', 'grey', 'white'
];




export function decodedResistorValue(color:string[]): string{

  const ohms = (COLOR.indexOf(color[0])*10+COLOR.indexOf(color[1]))*10**COLOR.indexOf(color[2])
  if (ohms >= 1_000_000_000) {
    return ohms / 1_000_000_000 + " gigaohms";
  }
  if (ohms >= 1_000_000) {
    return ohms / 1_000_000 + " megaohms";
  }
  if (ohms >= 1_000) {
    return ohms / 1_000 + " kiloohms";
  }

  
  return ohms + " ohms";
  
}
