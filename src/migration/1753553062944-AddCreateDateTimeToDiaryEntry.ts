import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCreateDateTimeToDiaryEntry1753553062944 implements MigrationInterface {
    name = 'AddCreateDateTimeToDiaryEntry1753553062944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary_entry" ADD "createDateTime" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diary_entry" DROP COLUMN "createDateTime"`);
    }

}
