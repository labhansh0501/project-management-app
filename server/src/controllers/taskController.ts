import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTask = async (req: Request, res: Response): Promise<void> => {
  const { projectId } = req.query;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
      include: {
        author: true,
        assignee: true,
        comments: true,
        attachments: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: `Error retrivin tasks: ${error.message}` });
  }
};



export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    title,
    description,
    status,
    priority,
    tags,
    startDate,
    dueDate,
    points,
    projectId,
    authorUserId,
    assignedUserId,
  } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        tags,
        startDate: startDate ? new Date(startDate) : null,
        dueDate: dueDate ? new Date(dueDate) : null,
        points,
        projectId,
        authorUserId,
        assignedUserId,
      },
    });
    res.status(201).json(newTask);
  } catch (error: any) {
    res.status(500).json({ message: `Error creating task` });
  }
};


export const updateTaskStatus = async (req: Request, res: Response): Promise<void> => {
    const {taskId} =  req.params;
    const {status} = req.body;

  try {
    const updatedTasks = await prisma.task.update({
      where: {
        id: Number(taskId)
      },
      data: {
        status: status,
      },
    });
    res.json(updateTaskStatus);
  } catch (error: any) {
    res.status(500).json({ message: `Error updating tasks: ${error.message}` });
  }
};



export const getUserTask = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        OR : [
          {authorUserId : Number(userId)},
          {assignedUserId : Number(userId)}
        ]
      },
      include: {
        author: true,
        assignee: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: `Error retrivin user's tasks: ${error.message}` });
  }
};
