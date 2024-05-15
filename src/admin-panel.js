import ColumnsPanel from "./columns-panel";


const AdminPanel = () =>{
    return(
        <div className="w-screen h-screen bg-gray-700 flex justify-center items-center py-4">
            <div className="h-full w-11/12 border border-gray-500 rounded-md">
                <h1 className="w-full h-1/6 h-20 bg-gray-800 flex justify-center items-center text-white rounded-md text-xl font-semibold">
                    اضافه و ویرایش نقش ها
                </h1>
                <ColumnsPanel/>
            </div>
        </div>
    )
}
export default AdminPanel;