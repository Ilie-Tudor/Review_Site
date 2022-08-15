import React, { useState } from 'react'
import { Drawer, Button } from 'antd'


export default function DrawerNavBar() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (

        <>
            <Button onClick={showDrawer}>
                activate drawer
            </Button>
            <Drawer
                title="Basic Drawer"
                placement="left"
                visible={visible}
                onClose={onClose}
            >
                <p>ceva aici</p>
                <p>ceva aici</p>
                <p>ceva aici</p>
            </Drawer>
        </>
    )
}
