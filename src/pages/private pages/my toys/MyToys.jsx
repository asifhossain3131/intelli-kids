import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToysTableRow from "./MyToysTableRow";
import Swal from "sweetalert2";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { FaBackward } from "react-icons/fa";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState(0);
  const navigation=useNavigation()
  if(navigation.state==='loading'){
    return <Spinner></Spinner>
  }

  useEffect(() => {
    fetch(
      `https://intelli-kidos-server.vercel.app/mytoys?email=${user?.email}&sort=${sort}`)
      .then((res) => res.json())
      .then((data) => {
                setMyToys(data) 
      });
  }, [sort]);

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://intelli-kidos-server.vercel.app/toys/${id}`,{
          method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = myToys.filter((toy) => toy._id !== id);
            setMyToys(remaining);
            Swal.fire("Deleted!", "Your toy has been deleted.", "success");
          });
      }
    });
  };


  return (
    <>
     <div className='flex gap-4 justify-center items-center  bg-cyan-500 bg-opacity-75 p-8 mb-4'>
            <Link to='/'>Home</Link>
            <FaBackward></FaBackward>
            <Link to='/addtoys'>Add Toys</Link>
            <FaBackward></FaBackward>
            <Link className='text-blue-500 font-semibold'>My Toys</Link>
         </div>
      
        <div className="dropdown dropdown-hover ms-12 mb-20">
  <label tabIndex={0} className="select select-bordered mt-4">Fillter by price</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><button onClick={()=>setSort(1)}>Lower To Higher</button></li>
    <li><button onClick={()=>setSort(-1)}>Higher To Lower</button></li>
  </ul>
</div>
    

      {/* table starts */}
      <div className="overflow-x-auto mb-20">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Stocks</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToysTableRow
                key={toy._id}
                toy={toy}
                handleDeleteToy={handleDeleteToy}
              ></MyToysTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
