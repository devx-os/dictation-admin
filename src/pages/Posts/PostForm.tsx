import * as React from 'react';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import {Select} from "../../components/Form";
import 'react-markdown-editor-lite/lib/index.css';
import {PostState} from "../../types";
import {PostFormProps, PostFormValues} from "./types";
import {RiCheckFill, RiPencilFill} from "react-icons/ri";
import {slugify} from "../../utils/string";

const defaultValues: PostFormValues = {
    title: '',
    slug: '',
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
        getValues,
        watch
    } = useForm<PostFormValues>({
        resolver: yupResolver(schema),
        defaultValues: initialValues || defaultValues,
    });

    const [editSlug, setEditSlug] = React.useState({
        mode: false,
        edited: false,
    })

    console.log('VALUES', getValues())
    console.log('ERRORS', errors)

    const mdParser = new MarkdownIt(/* Markdown-it options */);

    function handleEditorChange({html, text}: any) {
        console.log('handleEditorChange', html, text);
    }

    const handleEditSlug = () => {
        setEditSlug({mode: !editSlug.mode, edited: true})
    }

    const slugFormField = register('slug')
    const slugFormFieldValue = () => {
        if (editSlug.mode) {
            return
        } else {
            if (initialValues?.slug || editSlug.edited) {
                return getValues('slug')
            } else {
                return slugify(watch('title'))
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col space-y-2'>
            <div className='flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2'>
                <div className='flex flex-col space-y-2 sm:basis-3/4'>
                    <div className='form-control'>
                        <input {...register('title')} autoFocus placeholder='Title'
                               className='input input-primary w-full'
                               type='text'/>
                    </div>
                    <div className='form-control flex-row items-center space-x-2'>
                        <label className='label-text'>Slug</label>
                        <div className='flex flex-row items-center'>
                            <span className='italic'>/</span>
                            <input disabled={!editSlug.mode} value={slugFormFieldValue()} {...slugFormField}
                                   className='input input-primary input-sm w-max p-0 px-1 font-bold italic'
                                   type='text'/>
                            <button type="button" onClick={handleEditSlug}
                                    className='btn btn-outline btn-sm'>{editSlug.mode ? <RiCheckFill color='green'/> :
                                <RiPencilFill/>}</button>
                        </div>
                    </div>
                    <MdEditor style={{height: '300px'}} className='rounded-lg input-primary p-0'
                              renderHTML={text => mdParser.render(text)}
                              onChange={handleEditorChange}/>
                </div>
                <div className='flex flex-col space-y-2 sm:basis-1/4'>
                    <Select {...register('state')} className='form-control flex-row space-x-2 w-full'
                            label='Status' inputClassName='select-sm flex-grow' placeholder='Status'
                            options={Object.values(PostState).map((o, i) => <option key={`${o}-${i}`}
                                                                                    value={o}>{o}</option>)}/>
                    <Select {...register('type')} className='form-control flex-row space-x-2' label='Type'
                            inputClassName='select-sm flex-grow' placeholder='Type'
                            options={[{title: 'Post', slug: 'post'}].map((o, i) => <option key={`${o.slug}-${i}`}
                                                                                           value={o.slug}>{o.title}</option>)}/>
                    <button type='submit' className='btn btn-primary'>SEND</button>
                </div>
            </div>
            {/* PLUGINS TABS */}
            <div className='rounded-lg bg-white p-2 h-max w-full'>
                PLUGIN TAB
            </div>
        </form>
    );
};

export default PostForm;