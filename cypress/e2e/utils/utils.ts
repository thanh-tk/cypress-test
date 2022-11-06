
import xlsx, { read, utils, writeFile } from "xlsx";

export function excelReader(filePath: string) {
  const workbook = xlsx.readFile(filePath);
  if(!workbook){
    return;
  }


}