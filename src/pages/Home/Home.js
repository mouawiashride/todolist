import { Row, PageHeader, Layout } from 'antd'
import {  PlusCircleOutlined } from '@ant-design/icons';

import { v4 as uuidv4 } from 'uuid';

import React from 'react'
import styles from './Home.module.css'
import NewtodoModal from '../../components/newtodoModal/newtodoModal';
import Todocard from '../../components/todocard/todocard';

import HomeLogic from './HomeLogic';
const { Content } = Layout;

export default function Home() {
  const { ourTodos,
    handleDeletetodo,
    handlecanceledtodo,
    handlecorrectedtodo,
    handleonChange,
    showModal,
    handleOkAdd,
    handleCancelAdd,
    handleCancelUpdate,
    handleEditbutton,
    handleOkUpdata,
    newtodo,
    isModalAddVisible,
isModalUpdateVisible,
todoindex,
setnewtodo
  } = HomeLogic(); 
 


  return (
    <Layout className={styles.main_container}>
      {/* modal add todo */}
      <NewtodoModal  title='new'  todocontent={newtodo} handleonChange={handleonChange} isModalVisible={isModalAddVisible} handleOk={handleOkAdd} handleCancel={handleCancelAdd} />

      {/* modal update todo */}
      <NewtodoModal title='update' index={todoindex} todocontent={newtodo} handleonChange={handleonChange} isModalVisible={isModalUpdateVisible} handleOk={handleOkUpdata} handleCancel={handleCancelUpdate} />
      
      {/* header of page */}
      <PageHeader
        title="TODO LIST"
        className={styles.header}
      />
{/* cards of tasks */}
      <Content className='container'>
        <Row
          className={styles.todo_container}
          justify="center"
          align="middle"
          gutter={[0, 20]}
        >
          {ourTodos?.map((onetodo,index)=>{
            
            return <Todocard 
            index={index} 
            setnewtodo={setnewtodo} 
            handlecorrectedtodo={handlecorrectedtodo} 
            handlecanceledtodo={handlecanceledtodo} 
            handleDeletetodo={handleDeletetodo} 
            Update={handleEditbutton} 
            key={uuidv4()} 
            title={onetodo.title} 
            content={onetodo.content} 
            statue={onetodo.statue} />
          })}
          <PlusCircleOutlined  onClick={showModal} style={{ color: 'white', fontSize: '40px', backgroundColor: '#33ff00', borderRadius: '50%',display:'block' }}  />
        </Row>
      </Content>



    </Layout>
  )
}
