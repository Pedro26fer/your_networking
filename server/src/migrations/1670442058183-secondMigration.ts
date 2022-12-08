import { MigrationInterface, QueryRunner } from "typeorm";

export class secondMigration1670442058183 implements MigrationInterface {
    name = 'secondMigration1670442058183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
    }

}
