import { Car, Prisma } from "@prisma/client";

export interface CarRepository {
    list(): Promise<Car[]>
    create(data: Prisma.CarCreateInput): Promise<Car>
    findById(id: string): Promise<Car | null> 
}