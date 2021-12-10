import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPartida1636672146161 implements MigrationInterface {
    name = 'AddPartida1636672146161'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`partida\` (\`id\` int NOT NULL AUTO_INCREMENT, \`placar\` varchar(50) NULL, \`placarMandante\` int NOT NULL, \`placarVisitante\` int NOT NULL, \`status\` enum ('agendada', 'andamento', 'finalizado') NOT NULL DEFAULT 'agendada', \`slug\` varchar(50) NULL, \`dataRealizacao\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`partida\``);
    }

}
