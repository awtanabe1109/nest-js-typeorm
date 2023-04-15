import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUsers1681546562221 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "users" (
          "id" SERIAL NOT NULL,
          "username" character varying(255) NOT NULL,
          "password" character varying(255) NOT NULL,
          "created_at" TIMESTAMP NOT NULL DEFAULT now(),
          "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
          CONSTRAINT "PK_users" PRIMARY KEY ("id")
        )
      `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        DROP TABLE "users"
      `);
    }

}
