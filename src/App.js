import './App.css';
import { Input, Space, Table, Button, Popconfirm } from 'antd';
import React from 'react';
const { Search } = Input;
import axios from 'axios'

// function App() {
//   return (
//     <div className="App">
//      sss
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {

    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
      },
      {
        title: '操作',
        key: 'action',
        render: (_, record) =>
          <Popconfirm title="Sure to delete?"
            onConfirm={() => this.handleDelete(record.key)}>
            <Button type="primary" danger>
              删除
            </Button>
          </Popconfirm>

      },
    ],
    data: [
    ],
    searchKey: "",
  }


  onSearch = async (value) => {
    let res = await axios.get('http://localhost:3001/data/?q=' + value)
    res.data = res.data.map(item => ({ ...item, key: item.id }))
    this.setState({ data: res.data })
  };
  loadList = async () => {
    let res = await axios.get('http://localhost:3001/data')
    res.data = res.data.map(item => ({ ...item, key: item.id }))
    this.setState({ data: res.data })
  }
  handleDelete = async (id) => {
    let res = await axios.delete('http://localhost:3001/data/' + id)
    this.loadList()
  }
  render() {
    return (
      <div className='App'>
        <Search
          className='searchbox'
          placeholder="请输入查询条件"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />
        <Table columns={this.state.columns} dataSource={this.state.data} />
      </div>

    )
  }
  componentDidMount() {
    this.loadList()
  }

}

export default App;
