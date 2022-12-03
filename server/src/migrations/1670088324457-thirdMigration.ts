import { MigrationInterface, QueryRunner } from "typeorm";

export class thirdMigration1670088324457 implements MigrationInterface {
    name = 'thirdMigration1670088324457'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
    }

}
