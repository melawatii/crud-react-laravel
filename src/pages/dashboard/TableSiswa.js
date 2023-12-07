import React from 'react';
import { Space, Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'NISN',
    dataIndex: 'nisn',
    key: 'nisn',
    sorter: {
      compare: (a, b) => a.nisn - b.nisn,
      multiple: 3,
    },
  },
  {
    title: 'NIS',
    dataIndex: 'nis',
    key: 'nis',
    sorter: {
      compare: (a, b) => a.nis - b.nis,
      multiple: 3,
    },
  },
  {
    title: 'Nama Siswa',
    dataIndex: 'nama',
    key: 'nama',
    sorter: {
      compare: (a, b) => a.nama - b.nama,
      multiple: 3,
    },
  },
  {
    title: 'Rombel',
    dataIndex: 'rombel',
    key: 'rombel',
    sorter: {
      compare: (a, b) => a.rombel - b.rombel,
      multiple: 3,
    },
  },
  {
    title: 'Jurusan',
    dataIndex: 'jurusan',
    key: 'jurusan',
    sorter: {
      compare: (a, b) => a.jurusan - b.jurusan,
      multiple: 3,
    },
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a style={{ color: 'orange' }}>
          <EditOutlined />
        </a>
        <a style={{ color: 'red' }}>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    nisn: '0045653673',
    nis: '12007891',
    nama: 'Melawati',
    rombel: 'RPL XII-1',
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  {
    key: '2',
    nisn: '1122334455',
    nis: '12345678',
    nama: 'Aleksander Ucok',
    rombel: 'TKJ XII-2',
    jurusan: 'Teknik Komputer dan Jaringan',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableSiswa = () => 
<Table columns={columns} dataSource={data} onChange={onChange}
  style={{ 
    margin: '0 10em',
  }}
/>;

export default TableSiswa;