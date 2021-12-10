import {MigrationInterface, QueryRunner} from "typeorm";

export class AddRodada1636671764039 implements MigrationInterface {
    name = 'AddRodada1636671764039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rodada\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(50) NULL, \`slug\` varchar(50) NULL, \`rodada\` int NOT NULL, \`status\` enum ('agendada', 'andamento', 'finalizado') NOT NULL DEFAULT 'agendada', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`rodada\``);
    }

}
