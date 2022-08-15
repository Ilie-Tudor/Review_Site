import React from 'react'
import { PageHeader, Input } from 'antd';
import DrawerNavBar from './DrawerNavBar';
import theme1 from '../resources/themes/theme1';
const Search = Input.Search

const Header = () => {
    return (
        <PageHeader
            className="site-page-header"
            // onBack={() => window.location.href = "/"}
            title="Title"
            style={{ background: theme1.primary_color}}
            extra={[
                <Search placeholder='Search a review' allowClear key={"Search"}
                    style={{
                            maxWidth: "200px"                                         
                            }}
                />,
                <DrawerNavBar key={"DrawerNavBar"} />
            ]}
        />

    )
}
export default Header
