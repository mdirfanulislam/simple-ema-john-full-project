import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css';
import useAuth from '../../Context/useAuth'
import { addToDb } from '../../utilities/fakedb';

const Shipping = () => {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const {user} = useAuth();
    const onSubmit = data => { 
        console.log(data);
        addToDb(data);
        alert("Process Submit Successfully");
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input 
                    defaultValue={user.displayName} 
                    {...register("name", { required: true })} 
                />
                <input 
                    defaultValue={user.email} 
                    {...register("email", { required: true })} 
                />
                {errors.email && <span className="error">This field is required</span>}
                <input 
                    placeholder="Address" 
                    defaultValue="" 
                    {...register("address", { required: true })} 
                />
                <input 
                    placeholder="City" 
                    defaultValue="" 
                    {...register("city", { required: true })} 
                />
                <input 
                    placeholder="Phone" 
                    defaultValue="" 
                    {...register("phone", { required: true })} 
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;