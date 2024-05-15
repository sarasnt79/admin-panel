import React, { Component ,useState } from 'react';
import AddNewRole from './add-new-role';
import './column.css';
import { Tooltip } from "antd";

const ColumnsPanel =() =>{
    const rows = [];
    let result;
    const [column,setColumnList]=useState(0);
    const [isAdd,setIsAdd]=useState(false);
    const [title,setTitle]=useState();
    const [data, setData] = useState([
        {
          id: "",
          title: "",
        }
      ]);

    const handleChange=(evt) =>{
        setTitle(evt.target.value)

    }
    const handleCopyColumn = (indx ,id) =>{
        const newItem =[...data];
        newItem.splice(indx , 0 ,data[indx]);
        const updateData= newItem.map(data =>{
            if(data.id === id){
                return {...data ,id : Math.random()};
            }
            return data;
           })
        setColumnList(column + 1 );
        setData(updateData)
    }
    const handleRemoveColumn = (indx) =>{
        const newItem =[...data];
        newItem.splice(indx , 1);
        setColumnList(column - 1 );
        setData(newItem)
    }
    const handleIsChange =() =>{
        setIsAdd(!isAdd)
    }
    const update=(id ,newTitle) =>{
        const updateData= data.map(data =>{
         if(data.id === id){
             return {...data ,title : newTitle};
         }
         return data;
        })
        setData(updateData)
     }
    const handleAddColumn=()=>{
        if(column === 0){
            const newItem =[...data];
            newItem.splice(0 , 1);
            setData(newItem)
        }
        setColumnList(column + 1 );

             setData((data) => [
               ...data,
               { 
                 id: Math.random(),
                 title: title,
               }
             ]); 
        setIsAdd(!isAdd)

    }
    for (let i = 0; i < column; i++) {
        rows.push(<AddNewRole
            row={12}
            title={data[i].title}
            keyProps={data[i].id}
            copyItem={handleCopyColumn}
            removeItem={handleRemoveColumn}
            updateData={update}
            index={i}
            key={Math.random()}
            />);
    }

    if(isAdd){
        result=(
            <div className='mt-3'>
              <form onSubmit={handleAddColumn}>
                  <input  
                  type='text'
                  name='title'
                  value={title || ''}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                   rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 w-36" required />
                  <button className="text-gray-400 hover:text-white border border-gray-400 hover:bg-gray-500 font-medium rounded-lg
                   text-sm px-1 py-1 text-center mr-5">ADD</button>
              </form>
            </div>
        )
    }

    return(
      <div className="h-3/4 w-full p-5">
        <div className="relative direction overflow-x-auto shadow-md sm:rounded-lg flex flex-row">
            <table className="text-sm text-gray-500">
                <thead className="text-xs text-white uppercase bg-gray-800 relative">
                    <tr>
                        <th scope="col" className="px-6 h-16 py-3 border-l border-red-300">
                            امکانات
                            {isAdd? result :
                               <Tooltip placement="top" title='اضافه کردن'>
                                <button type="button" className="text-sm font-medium text-white hover:text-red-400
                                    absolute left-2 top-1" onClick={handleIsChange}>
                                    <i className="fa-solid fa-plus"></i>
                                 </button>
                               </Tooltip>
                            }
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            مدیریت سفارشات
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            سفارشات آنلاین
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            سفارشات حضوری
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            سفارشات آنلاین
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            سفارشات آنلاین
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            سفارشات آنلاین
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            مدیریت تخفیفات
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            متن تستی
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                        متن تستی
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                        متن تستی  
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            سفارشات آنلاین
                        </th>
                    </tr>
                    <tr className="bg-gray-700 rounded-md border-b border-gray-500 hover:bg-gray-500">
                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap border-l border-red-300">
                            سفارشات آنلاین
                        </th>
                    </tr>
                </tbody>
            </table>
          {rows}
        </div>
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 
          focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-60
          py-1 me-2 mt-6">ذخیره</button>
      </div>
     )
}
export default ColumnsPanel;