/* eslint-disable arrow-body-style */
export const snakeToCamel = (str) => {
  return str.toLowerCase().replace(/([-_][a-z])/g, (group) => {
    return group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

export const namesToCamelCase = (data) => {
  return data.map((item) => {
    return { ...item, name: snakeToCamel(item.name) };
  });
};

export const formatDateLong = (dueDateStr) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(Date.parse(dueDateStr, 'YYYY-MM-DD')).toLocaleDateString('en-us', options);
};

export const allKeysToCamelCase = (data) => {
  console.log(data);
  return data;
};
