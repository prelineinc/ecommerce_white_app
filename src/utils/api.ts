export const sortData = <T>(
  data: T,
  column: string,
  stateColumn: string
): T => {
  const sortOrder = stateColumn ? stateColumn.split('-') : column.split('-');
  if (sortOrder.length == 1) {
  }
  return data;
};
