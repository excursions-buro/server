import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import * as excursionService from './excursion.service';
import { getExcursionTypes as getExcursionTypesService } from './excursion.service';

export const getExcursions = catchAsync(async (req: Request, res: Response) => {
  const filters = {
    typeId: req.query.typeId as string | undefined,
    priceMin: req.query.priceMin ? Number(req.query.priceMin) : undefined,
    priceMax: req.query.priceMax ? Number(req.query.priceMax) : undefined,
    date: req.query.date ? new Date(req.query.date as string) : undefined,
    title: req.query.title as string | undefined,
    peopleCount: req.query.peopleCount
      ? Number(req.query.peopleCount)
      : undefined,
  };

  const excursions = await excursionService.getExcursions(filters);
  res.json(excursions);
});

export const getExcursionById = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const excursion = await excursionService.getExcursionById(id);

    if (!excursion) {
      res.status(404).json({ error: 'Excursion not found' });
      return;
    }

    res.json(excursion);
  }
);

export const getExcursionTypes = catchAsync(
  async (req: Request, res: Response) => {
    const types = await getExcursionTypesService();

    if (!types) {
      res.status(404).json({ error: 'Excursion-types not found' });
      return;
    }

    res.json(types);
  }
);
