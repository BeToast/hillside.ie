const arrayFromPath = (path: string):string[] => {
  return path.split('/');
}
//format 'dir/subdir/'
const pathFromArray = (array: string[]):string => {
  return array.toString().replace(',', '/')+'/';
}

export { arrayFromPath, pathFromArray }