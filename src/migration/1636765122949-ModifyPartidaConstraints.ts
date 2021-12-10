import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifyPartidaConstraints1636765122949 implements MigrationInterface {
    name = 'ModifyPartidaConstraints1636765122949'

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE \`partida\` DROP FOREIGN KEY \`FK_3f47fd4c3ccc1dfbd37ffa89aa0\``);
      await queryRunner.query(`ALTER TABLE \`partida\` DROP FOREIGN KEY \`FK_73d8623d724d2921ed5a3620a55\``);
      await queryRunner.query(`ALTER TABLE \`partida\` DROP FOREIGN KEY \`FK_ed33f0276339f0973c6559d247d\``);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`placar\` \`placar\` varchar(50) NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`placarMandante\` \`placarMandante\` int NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`placarVisitante\` \`placarVisitante\` int NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`slug\` \`slug\` varchar(50) NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`dataRealizacao\` \`dataRealizacao\` datetime NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`mandanteId\` \`mandanteId\` int NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`visitanteId\` \`visitanteId\` int NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`rodadaId\` \`rodadaId\` int NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` ADD CONSTRAINT \`FK_3f47fd4c3ccc1dfbd37ffa89aa0\` FOREIGN KEY (\`mandanteId\`) REFERENCES \`time\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
      await queryRunner.query(`ALTER TABLE \`partida\` ADD CONSTRAINT \`FK_73d8623d724d2921ed5a3620a55\` FOREIGN KEY (\`visitanteId\`) REFERENCES \`time\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
      await queryRunner.query(`ALTER TABLE \`partida\` ADD CONSTRAINT \`FK_ed33f0276339f0973c6559d247d\` FOREIGN KEY (\`rodadaId\`) REFERENCES \`rodada\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`ALTER TABLE \`partida\` DROP FOREIGN KEY \`FK_ed33f0276339f0973c6559d247d\``);
      await queryRunner.query(`ALTER TABLE \`partida\` DROP FOREIGN KEY \`FK_73d8623d724d2921ed5a3620a55\``);
      await queryRunner.query(`ALTER TABLE \`partida\` DROP FOREIGN KEY \`FK_3f47fd4c3ccc1dfbd37ffa89aa0\``);
      await queryRunner.query(`ALTER TABLE \`aposta\` ADD CONSTRAINT \`FK_c792d1284c6b67efbb6060cfdbf\` FOREIGN KEY (\`partidaId\`) REFERENCES \`partida\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`rodadaId\` \`rodadaId\` int NULL DEFAULT 'NULL'`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`visitanteId\` \`visitanteId\` int NULL DEFAULT 'NULL'`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`mandanteId\` \`mandanteId\` int NULL DEFAULT 'NULL'`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`dataRealizacao\` \`dataRealizacao\` datetime NOT NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`slug\` \`slug\` varchar(50) NULL DEFAULT 'NULL'`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`placarVisitante\` \`placarVisitante\` int NOT NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`placarMandante\` \`placarMandante\` int NOT NULL`);
      await queryRunner.query(`ALTER TABLE \`partida\` CHANGE \`placar\` \`placar\` varchar(50) NULL DEFAULT 'NULL'`);
      await queryRunner.query(`ALTER TABLE \`partida\` ADD CONSTRAINT \`FK_ed33f0276339f0973c6559d247d\` FOREIGN KEY (\`rodadaId\`) REFERENCES \`rodada\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
      await queryRunner.query(`ALTER TABLE \`partida\` ADD CONSTRAINT \`FK_73d8623d724d2921ed5a3620a55\` FOREIGN KEY (\`visitanteId\`) REFERENCES \`time\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
      await queryRunner.query(`ALTER TABLE \`partida\` ADD CONSTRAINT \`FK_3f47fd4c3ccc1dfbd37ffa89aa0\` FOREIGN KEY (\`mandanteId\`) REFERENCES \`time\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
