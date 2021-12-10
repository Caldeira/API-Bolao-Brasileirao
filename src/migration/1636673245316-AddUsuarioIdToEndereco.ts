import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUsuarioIdToEndereco1636673245316 implements MigrationInterface {
    name = 'AddUsuarioIdToEndereco1636673245316'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD \`usuarioId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD UNIQUE INDEX \`IDX_82bec04bb9fadadad0a33cb0c4\` (\`usuarioId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_82bec04bb9fadadad0a33cb0c4\` ON \`endereco\` (\`usuarioId\`)`);
        await queryRunner.query(`ALTER TABLE \`endereco\` ADD CONSTRAINT \`FK_82bec04bb9fadadad0a33cb0c43\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`usuario\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP FOREIGN KEY \`FK_82bec04bb9fadadad0a33cb0c43\``);
        await queryRunner.query(`DROP INDEX \`REL_82bec04bb9fadadad0a33cb0c4\` ON \`endereco\``);
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP INDEX \`IDX_82bec04bb9fadadad0a33cb0c4\``);
        await queryRunner.query(`ALTER TABLE \`endereco\` DROP COLUMN \`usuarioId\``);
    }

}
