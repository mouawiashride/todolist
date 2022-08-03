import { Button, Input, Modal } from 'antd'
import React from 'react'
import  './newtodoModal.css'


export default function NewtodoModal({handleonChange, isModalVisible, handleOk, handleCancel,todocontent,index,title }) {
    return (
        <>
            <Modal
                closable={false}
                footer={false}
                visible={isModalVisible} 
                className="modalnewtodo"
            >
                    <Input value={todocontent} onChange={handleonChange} placeholder="Type Any Task ..." />
                    <div className='buttonmodalcontainer' >
                    <Button  className='cancelbutton'   onClick={handleCancel}>Cancel</Button>
                    <Button   className='donebutton'  onClick={()=> handleOk()}>  {title === 'new' ? 'Add' : 'Update'} </Button> 
                    </div>
            </Modal>
        </>
    )
}
