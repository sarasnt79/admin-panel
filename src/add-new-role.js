import React, { Component ,useState } from 'react';
import { Tooltip } from "antd";


const AddNewRole = (props) =>{
    const rows = [];
    let result;
    const [isChange,setIsChange]=useState(false);
    const [newTitle,setNewTitle]=useState(props.title);

   
    const handleIsChange =() =>{
      setIsChange(true)
      }

    const handleCopy = () => {
        props.copyItem(props.index ,props.keyProps)
      };
    const handleDeleted = () => {
      props.removeItem(props.index)
    };
    const handleChanging = () => {
      props.updateData(props.keyProps , newTitle)
      setIsChange(false);
    };
    const handleChange=(evt) =>{
        setNewTitle(evt.target.value)
    }

    for (let i = 1; i <= props.row; i++) {
        rows.push( 
          <tr 
          key={Math.random()}
           className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
            <th scope="row" className="px-6 py-5 font-medium text-white whitespace-nowrap border-l border-gray-300">
              <div className="flex items-center justify-center">
                 <input 
                  type="checkbox"
                  id={i*props.index}
                  name={i*props.index}
                  value={i*props.index}
                 className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded 
                 focus:ring-red-500"/>
              </div>
            </th>
           </tr>
           );}
           if(isChange){
            result=(
              <div>
                  <form onSubmit={handleChanging}>
                      <input
                       type='text'
                       name='title'
                       value={newTitle}
                       onChange={handleChange}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                         rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 w-36" required />
                       <button className="text-gray-400 hover:text-white border border-gray-400 hover:bg-gray-500 font-medium rounded-lg
                        text-sm px-1 py-1 text-center mr-5">CHANGE</button>
                  </form>
                </div>
            )
        }
    return(
        <div>
         <table className="text-sm text-gray-500 dark:text-gray-400 ">
           <thead className="text-xs text-white uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400 relative">
               <tr>
             
                 <th scope="col" className="px-14 h-16 py-3 border-l border-gray-300 cursor-pointer" >
                    {isChange? result : 
                    <div>
                    <Tooltip placement="top" title='تغییر دادن اسم'>
                       <span onClick={handleIsChange}>
                          {newTitle}
                        </span>
                    </Tooltip>
                    <Tooltip placement="top" title='حذف ستون'>
                    <button type="button" className="text-sm font-medium text-white h-6 w-6 bg-gray-800 hover:text-blue-300
                         absolute right-1 top-1" onClick={handleDeleted}>
                          <i className="fas fa-trash"></i>
                         </button>
                    </Tooltip>
                    <Tooltip placement="top" title='کپی کردن ستون'>
                    <button type="button" className="text-sm font-medium text-white h-6 w-6 bg-gray-800 hover:text-blue-300
                         absolute left-1 top-1" onClick={handleCopy}>
                          <i className="fa-solid fa-copy"></i>
                         </button>
                    </Tooltip>

                    </div>
                     }  
                  </th>
               </tr>
           </thead>
           <tbody>
            {rows}
           </tbody>
       </table>
      
        </div>
    )
}
export default AddNewRole;