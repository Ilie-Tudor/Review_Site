import React, { useState } from 'react'
import {Table as AntdTable} from 'antd'




const Table = ({ n_columns, column_heads, content }) => {

    const table_structure = () => {
        const columns_structure = []
        for (let i = 0; i < n_columns; i++) {
            columns_structure.push(
                {
                    title: column_heads[i],
                    dataIndex: column_heads[i],
                    key: column_heads[i]
                }
            )
        }
        return columns_structure;
    }

    const data_source = () => {
        const data_source = []
        let n = content.length;
        let temp_obj = {};
        let key = 1;
        temp_obj.key = key;
        for (let i = 0; i <= n; i++) {

            if ((i) % n_columns === 0 && i !== 0) {
                data_source.push(temp_obj)
                temp_obj = {};
                key++;
                temp_obj.key = key;
            }
            if (i !== n)
                temp_obj[column_heads[(i) % n_columns]] = content[i];

        }
        return data_source;
    }
    const [dataSource] = useState(data_source())
    const [tableStructure] = useState(table_structure())

    

    return (
        <>
            <AntdTable 
                columns={tableStructure} 
                dataSource={dataSource} 
                pagination={false} 
                showHeader={false}
                style={{background: 'rgb(127, 127, 127)'  , color: 'rgb(127, 127, 127)'}}
            />
        </>
    )
}

export default Table