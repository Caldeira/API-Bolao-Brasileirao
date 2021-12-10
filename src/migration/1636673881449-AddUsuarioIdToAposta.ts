import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUsuarioIdToAposta1636673881449 implements MigrationInterface {
    name = 'AddUsuarioIdToAposta1636673881449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`aposta\` ADD \`usuarioId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`aposta\` ADD CONSTRAINT \`FK_e9bff60fe377a9d0a6c05ec67c6\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`aposta\` DROP FOREIGN KEY \`FK_e9bff60fe377a9d0a6c05ec67c6\``);
        await queryRunner.query(`ALTER TABLE \`aposta\` DROP COLUMN \`usuarioId\``);
    }
}
