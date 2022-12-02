import { MigrationInterface, QueryRunner } from "typeorm";

export class initalMigration1669945386682 implements MigrationInterface {
    name = 'initalMigration1669945386682'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "emails" character varying NOT NULL, "phones" character varying NOT NULL, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "emails" character varying NOT NULL, "registerDate" character varying NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
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
