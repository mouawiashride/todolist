import React from 'react'
import { Col, Card, } from 'antd'

import { BsCheck2All } from 'react-icons/bs';
import {MdEdit,MdDelete,MdCancel} from 'react-icons/md'

import styles from './TodoCard.module.css'
import './todoCard.css'


export default function Todocard({ index,Update,title, content, statue, handleDeletetodo ,handlecanceledtodo ,handlecorrectedtodo }) {
  return (
    <Col
      xs={{ span: 24 }}
    >
      <Card
        className={`${statue === "idle" ? ` blackTitle  ${styles.card_todo}` : ` ${styles.card_todo}  whiteTitle`}`}
        title={title}
        style={{ backgroundColor: `${statue === 'failed' ? '#cc3333' : (statue === 'success' ? '#33ff00' : 'white')}`, color: ` ${statue === 'idle' ? 'black' : 'white'} ` }}
        // todo actions icon
        extra={statue==="idle" ?  (<div className={styles.containericons} > 
        <MdDelete onClick={() => {handleDeletetodo(index) }} style={{ color: 'white', fontSize: '27px',padding:'4px' , backgroundColor: '#cc3333', borderRadius: '50%' }} />
        <MdEdit onClick={() => { Update({index,content}) }} style={{ color: 'white', fontSize: '27px', backgroundColor: '#3399cc', padding: '4px', borderRadius: '50%' }} />
        <MdCancel onClick={() => { handlecanceledtodo(index) }} style={{ color: '#cc3333', fontSize: '27px', backgroundColor: 'white', borderRadius: '50%' }} />
        {/* <CheckCircleFilled onClick={() => { handlecorrectedtodo(index) }} style={{ color: 'rgb(51, 255, 0)', fontSize: '27px', backgroundColor: 'white', padding: '5px', borderRadius: '50%' }} /> */}
        <BsCheck2All onClick={() => { handlecorrectedtodo(index) }} style={{ color: 'white', fontSize: '27px', backgroundColor: 'rgb(51, 255, 0)', padding: '4px', borderRadius: '50%' }} />
        </div>) : (<MdDelete onClick={() => { handleDeletetodo(index) }} style={{ color: 'white', fontSize: '27px', backgroundColor: '#cc3333', padding: '4px', borderRadius: '50%' }} />)  } bordered={false}>
        {content}
   
      </Card>
    </Col>
  )
}
