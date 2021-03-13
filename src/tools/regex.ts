export function searchNameReg(name: string) {
  return new RegExp(name.split(' ').join('.*\\ .*'), 'i')
}
