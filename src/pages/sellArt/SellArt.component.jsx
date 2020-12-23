import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import SellerForm from '../../components/sellerForm/SellerForm.component'
import UserAuth from '../../components/userAuth/userAuth.component'
function SellArt() {
  const { user } = useContext(UserContext)
  

  return (
    <div className="full-page">
    {user ?  <SellerForm/> : <UserAuth/> }
    </div>
  );
}


export default SellArt