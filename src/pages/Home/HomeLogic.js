import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deletetodo,canceledtodo, correctedtodo, edittodo } from '../../redux/todosSlice';
export default function HomeLogic() {
 
 
 
    const dispatch = useDispatch();
    // todo data
    const ourTodos = useSelector(state=>state.todos);
  
  
  
  
  // card Actions
  const handleDeletetodo=(index)=>{
   dispatch(deletetodo({index}));
  }
  const handlecanceledtodo=(index)=>{
    dispatch(canceledtodo({index}))
  }
  const handlecorrectedtodo=(index)=>{
    dispatch(correctedtodo({index}))
  }
  
  // task fieled
  const [newtodo,setnewtodo] = useState('');
  
  // manage new todo modal
    const [isModalAddVisible, setIsModalVisible] = useState(false);
    const handleonChange = (e)=>{
      setnewtodo(prev=>e.target.value);
    }
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOkAdd = () => {
      if(newtodo?.length)
      {
        dispatch(addtodo({todo:newtodo}));
        setnewtodo('');
      setIsModalVisible(false);
    }
    };
    const handleCancelAdd = () => {
      setIsModalVisible(false);
      setnewtodo(prev=>'');
    };
  
  
  
    // manage update todo modal
    const [todoindex,seteditindex]=useState('');
    const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  
  
  const ResetUpdateModalValues = ()=>{
  
  }
  
    const handleOkUpdata = ()=>{
    if(newtodo?.length)
   {
    dispatch(edittodo({index:todoindex,content:newtodo}));
    setIsModalUpdateVisible(prev=>!prev);
    setnewtodo(prev=>'');
    seteditindex(prev=>'');
  }
  }
  
  const  handleCancelUpdate =()=>{
    setIsModalUpdateVisible(prev=>!prev);
    setnewtodo(prev=>'');
    seteditindex(prev=>'');
  }
  
    const  handleEditbutton = (mydata)=>{
        setIsModalUpdateVisible(prev=>!prev);
      setnewtodo(prev=>mydata.content)
      seteditindex(prev=>mydata.index)
    }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    return { ourTodos,
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
}
  
}
