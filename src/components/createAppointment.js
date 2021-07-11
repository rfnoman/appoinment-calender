import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const addTaskAction = (title) => {
    return { type: 'ADD_TASK', title }
}
export default function App(props) {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm();
    const onSubmit = data => {
        let tempdate=new Date(data.dateInput)
        let y=tempdate.getFullYear()
        let m=tempdate.getMonth()+1
        let d=tempdate.getDate()
        let info={
            ...data,
            dateIndex:y+""+m+""+d
        }
        dispatch(addTaskAction(info))
        props.closeModal()
    };
    const dispatch = useDispatch();
    console.log(watch("name"));
    // const onSubmit = data => dispatch(addTaskAction(data))
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Enter your name" {...register("name")} /><br />
            <select {...register("gender")}>
                <option value="" disabled selected>Select your Gender</option>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select><br />
            <input placeholder="Your age" {...register("age")} /><br />
            <Controller
                control={control}
                name='dateInput'
                render={({ field }) => (
                    <DatePicker
                        placeholderText='Select date'
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                    />
                )}
            /><br/>
            <input placeholder="Enter your preferred time" {...register("time", { required: true })} /><br />
            <input type="submit" />
        </form>
    );
}