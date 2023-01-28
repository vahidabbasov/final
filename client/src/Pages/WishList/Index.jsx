import React from 'react'
import { Helmet } from 'react-helmet'
import { toast, Toaster } from 'react-hot-toast'
import './Index.scss'
function Index({wishList, setWishList}) {

    function deleteAll(){
        setWishList([])
    }
    function deleteFromWishList(_id){
        let newWishList=wishList.filter((x)=>x._id!==_id)
        setWishList(newWishList)
    }
  return (
    <div className="wishListContainer">
      <Helmet>
        <title>WishList</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
       {wishList.length === 0 && <h1>No items yet...</h1>}
      {wishList.length !== 0 && (
        
        <button
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "red",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            if (window.confirm("Are you sure?")) {
              deleteAll();
              toast.success("Succesfully deleted all!");
            }
          }}
        >
          Delete ALL
        </button>
      )}

      {wishList.map((item) => {
        return (
          <div className="card">
            <img src={`${item.img}`} alt="" />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <button
              onClick={() => {
                if (window.confirm("Are you sure?")) {
                  toast.success("Succesfully deleted!");
                  deleteFromWishList(item._id);
                }
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Index