"use server";

import {Types } from 'mongoose';
import Task, { getTaskById } from '@/models/Task';
import { notFound, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function editTask(formData: FormData){

    const id = formData.get("id");

    if(!id){
        throw new Error("Missing or Invalid id");
    }
    console.log(id.toString());
    const task = await getTaskById(id.toString());

    if(!task){
        notFound();
    }

    const editedTask = new Task ({
        id: id,
        title: formData.get("title"),
        description: formData.get("description") ?? "",
        dueDate: formData.get("due_date") ?? Date.now,
        status: formData.get("status"),
        userId: formData.get("user_id")
    });

    try{
        await editedTask.validate();
        task.title = editedTask.title;
        task.description = editedTask.description;
        task.dueDate = new Date(editedTask.dueDate);
        task.status = editedTask.status;
        
        await task.save();
        

    } catch(error){
        console.error(error);
        throw new Error("Failed to edit task");
    }

    revalidatePath("/tasks");
    redirect(`/tasks/${id}`);

}


export async function deleteTask(id: Types.ObjectId | string){
    
    try{
        await Task.findOneAndDelete({_id: id})
    }catch(error){
        console.error(error);
        throw new Error("Failed to delete task")
    }
    revalidatePath("/tasks");
    redirect(`/tasks`);
}