import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsuario1636670202736 implements MigrationInterface {
  name = "AddUsuario1636670202736";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`usuario\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(50) NOT NULL, \`email\` varchar(50) NOT NULL, \`senha\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`usuario\``);
  }
}
