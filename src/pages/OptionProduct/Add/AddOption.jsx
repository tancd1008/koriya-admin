import React, { useState } from 'react'
import './AddOption.css'
import { assets, url } from '../../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddOption = () => {


    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
    });

    const onSubmitHandler = async (event) => {
        event.preventDefault();

       

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        const response = await axios.post(`${url}/api/category/add`, formData);
        if (response.data.success) {
            toast.success(response.data.message)
            setData({
                name: "",
                description: "",
            })
            setImage(false);
        }
        else {
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
               
                <div className='add-product-name flex-col'>
                    <p>Options</p>
                    <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Type here' required />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Options description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} type="text" rows={6} placeholder='Write content here' required />
                </div>
               
                <button type='submit' className='add-btn' >ADD</button>
            </form>
        </div>
    )
}

export default AddOption
