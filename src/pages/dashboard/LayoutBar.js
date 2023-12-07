import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import TableSiswa from './TableSiswa';
const { Header, Content } = Layout;

const LayoutBar = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ height: '100vh' }}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                    color: 'white'
                }}
            >
                <div className="demo-logo">Aleksander Ucok</div>
            </Header>
            <Layout>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Data Siswa</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <div className="demo-logo" 
                            style={{ 
                                margin: '2em 0',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            Data Siswa
                        </div>
                        <TableSiswa />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default LayoutBar;