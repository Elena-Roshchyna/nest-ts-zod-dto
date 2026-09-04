import { Body, Controller, Post } from '@nestjs/common';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { CreateCarSchema } from './create-car.schema';
import type { CreateCarDto } from './create-car.schema';

@Controller('cars')
export class CarsController {
  @Post()
  create(
    @Body(new ZodValidationPipe(CreateCarSchema)) dto: CreateCarDto,
  ): CreateCarDto {
    return dto;
  }
}
