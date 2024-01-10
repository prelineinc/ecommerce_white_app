export const ordercolumns = [
  {
    name: 'itemname',
    label: 'Name',
    align: 'left',
    field: 'itemname',
    sortable: true,
  },
  { name: 'username', align: 'center', label: 'UserName', field: 'username', sortable: true },
  { name: 'address', align: 'center', label: 'Address', field: 'address', sortable: true },
  { name: 'totalamount', align: 'center', label: 'TotalAmount', field: 'totalamount', sortable: true },
  { name: 'totalcount', align: 'center', label: 'TotalCount', field: 'totalcount', sortable: true },
  { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true },
  { name: 'action', align: 'right', label: 'Action' }
]

export const orderrows = [
  {
    itemname: 'Jeans',
    username: 'John',
    address: 'Flat No: 2, Good Street, Chennai-65',
    totalamount: '2599',
    totalcount: '1',
    status: 'Shipped'
  },
  {
    itemname: 'T-shirts',
    username: 'John',
    address: 'No: 6, Western Street, Chennai-54',
    totalamount: '999',
    totalcount: '2',
    status: 'Delivered'
  },
]
