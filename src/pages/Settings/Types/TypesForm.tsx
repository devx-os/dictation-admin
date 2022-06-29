import React from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";

const defaultValues = {
    title: '',
    slug: ''
}
const schema = yup
    .object().shape({
        title: yup.string().required(),
        slug: yup.string(),
    })

const TypesForm = ({initialValues, onSubmit}: TypesFormProps) => {
    const {register, control, handleSubmit} = useForm({
        resolver: yupResolver(schema),
        defaultValues: initialValues || defaultValues
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2'>
            <div className='flex flex-col space-y-2'>
                <div className='form-control space-y-1 flex-grow'>
                    <label htmlFor='title' className='label-text'>Title</label>
                    <input {...register('title')} placeholder='Title' className='input input-primary w-full'
                           type='text'/>
                </div>
                <div className='form-control space-y-1 flex-grow'>
                    <label htmlFor='slug' className='label-text'>Slug</label>
                    <input {...register('slug')} placeholder='Slug' className='input input-primary w-full'
                           type='text'/>
                </div>
                <button className='btn btn-primary'>Add</button>
            </div>

        </form>
    );
};

export default TypesForm;