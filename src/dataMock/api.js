var myHeaders = new Headers();
myHeaders.append("Accept", "*/*");

var myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default"
};

async function getData() {
  const response = await fetch("https://app.silifind.fr/config", myInit);
  const data = response.json();
  return data;
}

export const response = getData();
