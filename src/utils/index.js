function SortArr(contacts, order, sortBy) {
  console.log(order);
  if (order === 1) {
    return contacts.sort((a, b) =>
      a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
    );
  }
  return contacts.sort((a, b) =>
    a[sortBy] < b[sortBy] ? 1 : b[sortBy] < a[sortBy] ? -1 : 0
  );
}

function handleInputChange(data, inputChange, dataOrig, searchBy, order) {
  const dataOrigem = dataOrig;

  let dataFilter = data.filter(
    (el) => el[searchBy].toLowerCase().indexOf(inputChange.toLowerCase()) > -1
  );

  if (inputChange.trim() === '') {
    dataFilter = dataOrigem;
  }

  return SortArr(dataFilter, order, searchBy);
}

export { handleInputChange };
