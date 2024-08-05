import * as XLSX from 'xlsx';

export  const convertFile = (e) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsBinaryString(e.target.files[0]);
      reader.onload = (e) => {
        const data = e.target.result;
        const regionList = XLSX.read(data, { type: "binary" });
        const sheetName = regionList.SheetNames[0];
        const sheet = regionList.Sheets[sheetName];
        const parseData = XLSX.utils.sheet_to_json(sheet);
        resolve(parseData);
      };
      reader.onerror = (error) => reject(error);
    });
  };