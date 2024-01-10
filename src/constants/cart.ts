import { ref } from 'vue';
export const usercolumns = ref([
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: (row: any) => row.name,
    format: (val: any) => `${val}`,
    sortable: true
  },
  { name: 'number', align: 'center', label: 'Contact No', field: 'number', sortable: true },
  { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
  { name: 'usertype', align: 'center', label: 'UserType', field: 'usertype', sortable: true },
  { name: 'action', align: 'right', label: 'Action' }
])

export const userrows = ref([
  {
    name: 'John',
    email: 'john@gmail.com',
    number: '98765432110',
    usertype: 'Admin'
  },
  {
    name: 'Andrew',
    email: 'andrew@gmail.com',
    number: '98765432222',
    usertype: 'User'
  },
])
