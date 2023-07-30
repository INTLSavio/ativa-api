import { Scheduling, Prisma } from "@prisma/client";

interface ListAavailabilityRequest {
    day: number;
    month: number;
    year: number;
    car_id: string;
}

export interface SchedulingRepository {
    list(): Promise<Scheduling[]>
    listAvailability(data: ListAavailabilityRequest): Promise<Scheduling[]>
    create(data: Prisma.SchedulingUncheckedCreateInput): Promise<Scheduling>
}