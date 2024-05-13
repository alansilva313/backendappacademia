-- CreateTable
CREATE TABLE `Objetivo` (
    `id` VARCHAR(191) NOT NULL,
    `peso` DOUBLE NOT NULL,
    `altura` DOUBLE NOT NULL,
    `id_user` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Objetivo` ADD CONSTRAINT `Objetivo_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
