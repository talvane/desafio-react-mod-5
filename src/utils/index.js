function handleInputChange(data, inputChange, dataOrig) {
  const dataOrigem = dataOrig;

  let dataFilter = data.filter(
    (el) => el.name.toLowerCase().indexOf(inputChange.toLowerCase()) > -1
  );

  if (inputChange.trim() === '') {
    dataFilter = dataOrigem;
  }

  return dataFilter;
}

export { handleInputChange };
