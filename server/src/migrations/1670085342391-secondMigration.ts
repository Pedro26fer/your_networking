import { MigrationInterface, QueryRunner } from "typeorm";

export class secondMigration1670085342391 implements MigrationInterface {
    name = 'secondMigration1670085342391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "emails"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phones"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "emails"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "registerDate"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "registerDate" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "registerDate"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "registerDate" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_b48860677afe62cd96e12659482"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "emails" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "phones" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "emails" character varying NOT NULL`);
    }

}
