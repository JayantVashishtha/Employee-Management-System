import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[300px] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
        {data.tasks.map((e, index)=>{
          if(e.active){
            return<AcceptTask key={index} data={e}/>
          }
          if(e.newTask){
            return<NewTask key={index} data={e}/>
          }
          if(e.completed){
            return<CompleteTask key={index} data={e}/>
          }
          if(e.failed){
            return<FailedTask key={index} data={e}/>
          }
        })}     
    </div>
  )
}

export default TaskList