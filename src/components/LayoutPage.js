import React,{useState} from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
import { Menu } from 'antd'

import { Header } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import { Content } from 'antd/lib/layout/layout'
import {BarChartOutlined, HomeOutlined} from '@ant-design/icons';

import LayoutStyle from '../styles/Layout.module.less'

const LayoutPage = ({children}) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='keywords' content="Expense Tracker" />
                <meta name='description' content="Tracks expense" />
                <meta charSet='utf-8' />
                <link rel='icon' href='/favicon.ico' />
                <title>Expense Tracker</title>
            </Head>
            <div>
                <main >
                    <Layout hasSider>
                        <Sider >
                            <div className={LayoutStyle.logo} />
                                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
                                    <Menu.Item key="1" icon={<HomeOutlined />}>Home Page</Menu.Item>
                                    <Menu.Item key="2" icon={<BarChartOutlined />}>Expense Tracker</Menu.Item>
                                </Menu>
                        </Sider>
                        <Layout className={LayoutStyle.siteLayout}>
                            <Header className={LayoutStyle.siteLayoutBackground} style={{ padding: 0 }}>
                                Expense Tracker
                            </Header>
                            <Content
                                className={LayoutStyle.siteLayoutBackground}
                                style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                }}
                            >
                                {children}
                            </Content>
                        </Layout>
                    </Layout>
                   
                </main>
            </div>
        </>
    )
}

export default LayoutPage
