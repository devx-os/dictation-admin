import * as React from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import {Input, Select} from "../../components/Form";
import 'react-markdown-editor-lite/lib/index.css';
import {PostState} from "../../types";
import {PostFormProps, PostFormValues} from "./types";

const defaultValues: PostFormValues = {
    title: '',
    state: PostState.DRAFT,
    type: 'post'
}

const schema = yup
    .object().shape({
        title: yup.string().required(),
        state: yup.string().required(),
        type: yup.string().required()
    })

const PostForm = ({initialValues, onSubmit}: PostFormProps) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<PostFormValues>({
        resolver: yupResolver(schema),
        defaultValues: initialValues || defaultValues,
    });

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    function handleEditorChange({html, text}: any) {
        console.log('handleEditorChange', html, text);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2'>
            <div className='flex flex-col space-y-2 sm:basis-2/3'>
                <Input {...register('title')} placeholder='Title'/>
                <MdEditor style={{height: '300px'}} renderHTML={text => mdParser.render(text)}
                          onChange={handleEditorChange}/>
            </div>
            <div className='flex flex-col space-y-2 sm:basis-1/3'>
                <Select {...register('state')} placeholder='Status' options={Object.values(PostState)}/>
                <Select {...register('type')} placeholder='Type' options={['post']}/>
                <button type='submit' className='btn btn-primary'>SEND</button>
            </div>
        </form>
    );
};

export default PostForm;