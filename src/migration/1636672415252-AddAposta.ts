import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAposta1636672415252 implements MigrationInterface {
    name = 'AddAposta1636672415252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`aposta\` (\`id\` int NOT NULL AUTO_INCREMENT, \`placarMandante\` int NOT NULL, \`placarVisitante\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`aposta\``);
    }

}
