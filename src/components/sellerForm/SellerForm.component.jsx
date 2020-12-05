import React, {useContext} from 'react'
import { UserContext } from '../../context/userContext'
import { useForm } from "react-hook-form";
import api from '../../context/apiContext'
import './SellerForm.styles.scss'
import Grid from '@material-ui/core/Grid'
const axios = require('axios')
function SellerForm() {
  const { user } = useContext(UserContext)
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
  const postData = {...data, ...user}
    axios.post(`${api}/art`, postData)
          .then(function (response) {
            console.log("sellerpost response: ",response)
            alert("form submitted")
        })
          .catch(function (error) {
            alert('Some error occured, please try again')
          });
  };
    return (
        <div className="SellerForm">
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title: </label>
            <input name="title" ref={register({ required: true })} />
            {errors.title && <span>Please enter a title</span>}
            
            <label>Story: </label>
            <input name="story" ref={register({ required: true })} />
            {errors.story && <span>Adding a good background story makes a big difference</span>}
            
            <label>Medium: </label>
            <input name="medium" ref={register({ required: true })} />
            {errors.medium && <span>what medium was this art made on?</span>}
            
           
            
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <label>Price: </label>
                <input className="halfInput" name="price"  type="number" ref={register({ required: true })} />
                {errors.price && <span>give a price in BDT</span>}
              </Grid>
                <Grid item xs={6}>
                <label>Dimensions in inches: </label>
                <input className="halfInput" name="dimensions" placeholder="L x W" ref={register({ required: true })} />
                {errors.dimensions && <span>please provide dimensions</span>}
              </Grid>
              <Grid item xs={6}>
                <label>Type of your art</label>
                <select name="type" ref={register}>
                <option></option>
                <option value="Digital Art">Digital Art</option>
                <option value="Sketch">Sketch</option>
                <option value="Painting">Painting</option>
                <option value="Other">Other</option>
                </select>
                {errors.type && <span>Select a type for your art</span>}
              </Grid>
              
              <Grid item xs={6}>
                <label>Image Url:</label>
                <input className="halfInput" name="image" type="text" ref={register({ required: true })} />
                {errors.price && <span>You must attach the image</span>}
              </Grid>
              
            </Grid>

      
            <input className="btn" type="submit" />
          </form>
        </div>
    )
}

export default SellerForm
