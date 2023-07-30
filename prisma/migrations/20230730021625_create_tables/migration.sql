-- CreateTable
CREATE TABLE "schedulings" (
    "id" TEXT NOT NULL,
    "carName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "date" TIMESTAMPTZ NOT NULL,
    "car_id" TEXT NOT NULL,

    CONSTRAINT "schedulings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "local" TEXT NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedulings" ADD CONSTRAINT "schedulings_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
