import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1670167971355 implements MigrationInterface {
    name = 'initialMigration1670167971355'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "UQ_84cae51c485079bdd8cdf1d828f" UNIQUE ("phone"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "registerDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients_contacts_contacts" ("clientsId" uuid NOT NULL, "contactsId" uuid NOT NULL, CONSTRAINT "PK_0922f7d2cfe123106c2cd0899eb" PRIMARY KEY ("clientsId", "contactsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6562add14c8ede7871fa434d60" ON "clients_contacts_contacts" ("clientsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_11917fa4ad98504baba25ba723" ON "clients_contacts_contacts" ("contactsId") `);
        await queryRunner.query(`ALTER TABLE "clients_contacts_contacts" ADD CONSTRAINT "FK_6562add14c8ede7871fa434d609" FOREIGN KEY ("clientsId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "clients_contacts_contacts" ADD CONSTRAINT "FK_11917fa4ad98504baba25ba7231" FOREIGN KEY ("contactsId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients_contacts_contacts" DROP CONSTRAINT "FK_11917fa4ad98504baba25ba7231"`);
        await queryRunner.query(`ALTER TABLE "clients_contacts_contacts" DROP CONSTRAINT "FK_6562add14c8ede7871fa434d609"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_11917fa4ad98504baba25ba723"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6562add14c8ede7871fa434d60"`);
        await queryRunner.query(`DROP TABLE "clients_contacts_contacts"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}
