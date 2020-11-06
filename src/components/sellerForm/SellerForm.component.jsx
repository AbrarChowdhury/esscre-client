import React from 'react'
import { useForm } from "react-hook-form";
import './SellerForm.styles.scss'
function SellerForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 
    return (
        <div className="SellerForm">
            <h1>FORM</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>Title:</label>
            <input name="title" ref={register({ required: true })} />
            {errors.name && <span>Please enter your name</span>}
          
            <label>Art's Description:</label>
            <input name="description" ref={register({ required: true })} />
            {errors.description && <span>Please describe your art</span>}
            
            <label>Price:</label>
            <input name="price" ref={register({ required: true })} />
            {errors.price && <span>give a price in BDT</span>}
      
            <label>Type of your art</label>
            <select name="type" ref={register}>
            <option></option>
            <option value="Digital Art">Digital Art</option>
            <option value="Sketch">Sketch</option>
            <option value="Painting">Painting</option>
            <option value="Other">Other</option>
            </select>
            {errors.type && <span>Select a type for your art</span>}
            <label>Attact Image:</label>
            <input name="image" type="file" ref={register({ required: true })} />
            {errors.price && <span>You must attach the image</span>}
      
            <input className="btn" type="submit" />
          </form>
        </div>
    )
}

export default SellerForm
