import { PrismaClient } from '@prisma/client';
import { catchAsync } from '../utils/catchAsync';
import { Request, Response, NextFunction } from 'express';
const prisma = new PrismaClient();

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await prisma.user.findMany();
    res.status(200).json({
      users,
    });
  }
);
export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.findFirst({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      user,
    });
  }
);
export const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.create(req.body);
    res.status(200).json({
      user,
    });
  }
);

export const updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.status(200).json({
      user,
    });
  }
);
export const deleteUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      user,
    });
  }
);
