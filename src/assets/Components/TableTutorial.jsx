import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Saikat",
    age: 23,
    address: "Dhaka",
  },
  {
    key: "2",
    name: "Rahim",
    age: 25,
    address: "Chittagong",
  },
  {
    key: "3",
    name: "Rahima",
    age: 26,
    address: "Khulna",
  },
  {
    key: "4",
    name: "Rahim",
    age: 27,
    address: "Rajshahi",
  },
  {
    key: "5",
    name: "Rahim",
    age: 27,
    address: "Rajshahi",
  },
  {
    key: "6",
    name: "Rahim",
    age: 27,
    address: "Rajshahi",
  },
];

const TableTutorial = () => {
  return <Table columns={columns} dataSource={dataSource}   bordered
  pagination={{ pageSize: 5 }} />;
};

export default TableTutorial;