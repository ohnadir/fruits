import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
// import { allUsers, clearErrors } from '../../Redux/actions/user';

const AllUsers = ({allUsers}) => {
    const dispatch = useDispatch();
    const { users} = useSelector(state => state.allUsers);
    useEffect(() => {
      dispatch(allUsers());
    }, [dispatch]);
    const columns = [
        {
          title: 'firstName',
          dataIndex: '1',
          key: '1',
        },
        {
          title: 'lastName',
          dataIndex: '2',
          key: '2',
        },
        {
          title: 'email',
          dataIndex: '4',
          key: '4',
      },
      {
          title: 'phone',
          dataIndex: '5',
          key: '5',
        },{
          title: 'Role',
          dataIndex: '6',
          key: '6',
        },
    ];

    return (
        <div>
            <div>
                <Table dataSource={users} columns={columns} />;
            </div>
        </div>
    );
};

export default AllUsers;