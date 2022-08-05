import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Table, Tag, Pagination } from 'antd';
import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [],
            data: [],
            loading: false,
            pagination: {
                current: 1,
                pageSize: 10,
                total: 200
            }
        }
    }
    componentDidMount() {
        this.setState({
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: (text) => <a>{text}</a>,
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: 'Tags',
                    key: 'tags',
                    dataIndex: 'tags',
                    render: (_, { tags }) => (
                        <>
                            {tags.map((tag) => {
                                let color = tag.length > 5 ? 'geekblue' : 'green';

                                if (tag === 'loser') {
                                    color = 'volcano';
                                }

                                return (
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })}
                        </>
                    ),
                },
                {
                    title: 'Action',
                    key: 'action',
                    render: (_, record) => (
                        <Space size="middle">
                            <a>Invite {record.name}</a>
                            <a>Delete</a>
                        </Space>
                    ),
                },
            ],
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
            ]
        })

    }
    handleTableChange(page) {
        console.log(page);
        this.setState({pagination: page,loading:true})
        let list = [];
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                list.push({
                    key: Math.floor(Math.random() * 1000 + 200 * Math.random() - 39), name: 'John Gegg'+i, age: Math.floor(Math.random() * (99 - 10 + 1)) + 10, address: "Sidney No. " + i +" Lake Park",
                    tags: ['cool', 'teacher']
                })
            }
            this.setState({ data: list,loading:false })

        }, 1000);



    }
    render() {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTableChange.bind(this)}
                />
                {/* <Pagination defaultCurrent={1} total={50} /> */}
            </div>
        )
    }

}

export default App;