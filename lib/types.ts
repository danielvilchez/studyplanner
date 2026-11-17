export enum taskStatus{
    Pending = 0,
    Completed =1

}

export type Task = {
    id: number,
    title: string,
    description: string,
    status: taskStatus,
    dueDate?: Date
}

    