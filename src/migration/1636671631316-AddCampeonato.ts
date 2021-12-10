import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCampeonato1636671631316 implements MigrationInterface {
    name = 'AddCampeonato1636671631316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`campeonato\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(50) NOT NULL, \`slug\` varchar(50) NULL, \`nomePopular\` varchar(50) NULL, \`status\` enum ('agendada', 'andamento', 'finalizado') NOT NULL DEFAULT 'agendada', \`logo\` varchar(500) NULL, \`idCampeonatoApiExterna\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`campeonato\``);
    }

}
